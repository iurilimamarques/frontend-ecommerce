import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modifySearch, clickSearch } from '../../store/ProductsConfig/actions';

import TopBar from '../TopBar';
import SideBar from '../SideBar';
import TableProducts from '../TableProducts';

import './styles.css';

class Products extends Component {

    componentDidMount() {
        this.props.clickSearch('');
    }

    render() {
        const { products } = this.props;

        console.log(products.response);
                 
        return(
            <div className="container-products">
                <TopBar />
                
                <div className="container-products-filter">
                    <SideBar />

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
  products: state.ProductsReducers.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({modifySearch, clickSearch}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Products);
