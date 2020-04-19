import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCategories, getAllProducts } from '../../store/ProductsConfig/actions';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import TableProducts from '../TableProducts';

import './styles.css';

class Products extends Component {

    componentDidMount() {
        this.props.getCategories();
        this.props.getAllProducts();
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
  bindActionCreators({ getCategories, getAllProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Products);
