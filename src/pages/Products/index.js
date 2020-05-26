import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Base64 } from 'js-base64';

import { getCategories, getAllProducts, modifyCartItems } from '../../store/ProductsConfig/actions';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import TableProducts from '../TableProducts';

import './styles.css';

class Products extends Component {
    constructor() {
        super();

        this._setCartItem = this._setCartItem.bind(this);
    }

    componentDidMount() {
        this.props.getCategories();
        this.props.getAllProducts();

        this._setCartItem();
    }

    _setCartItem(i_product) {
        let storage = localStorage.getItem('cart');
        let token_user = localStorage.getItem('token_user');
        
        if (!token_user && i_product) { 
            if (storage) {
                let items = Base64.decode(storage).split('^');
                items.push(i_product);          
                localStorage.setItem('cart', Base64.encode(items.join('^')));
            }else{            
                localStorage.setItem('cart', Base64.encode(i_product));
            }
            this.props.modifyCartItems(Base64.decode(localStorage.getItem('cart')).split('^'));
        }else if(token_user && i_product){
            //salva item na tabela carrinho banco
        } else if(!i_product) {            
            if (!token_user) {
                if (localStorage.getItem('cart')!=null) {
                    this.props.modifyCartItems(Base64.decode(localStorage.getItem('cart')).split('^'));
                }
            }else{
                //busca carrinho salvo no banco de dados
            }
        }   
    }

    render() {
        const { products, categories } = this.props;                         
        return(
            <div className="container-products">
                <TopBar />
                
                <div className="container-products-filter">
                    {!categories.response
                        ?   null
                        :   <SideBar 
                                categories={categories}
                            />
                    }

                    {!products.response 
                        ?   <div className="interactions">
                                <p>Something went wrong.</p>
                            </div>
                        :
                            <TableProducts 
                                products={products}
                                setCartItems={this._setCartItem}
                            />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  products: state.ProductsReducers.products,
  categories: state.ProductsReducers.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCategories, getAllProducts, modifyCartItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Products);
