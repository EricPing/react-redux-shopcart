import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GETTING_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS} from '../constants/actionTypes';
import ProductList from '../components/product_list';
import ShopCart from '../components/shop_cart';

/**
 * @return {compoment} The main compoment of App.
 */
class App extends React.Component {
    /**
     *
     */
    componentDidMount() {
        this.props.getProducts();
    }

    /**
     * @return {component}
     */
    render() {
        return (
            <div className="container">
                <h1>購物車</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ProductList {...this.props.productStore}/>
                    </div>
                    <div className="col-md-6">
                        <ShopCart/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    productStore: PropTypes.object,
    getProducts: PropTypes.func,
};

/**
 * @param {object} state
 * @return {object}
 */
function mapStateToProps(state) {
  return state;
}

/**
 * @param {function} dispatch
 * @return {object} object
 */
function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => {
        dispatch({type: GETTING_PRODUCT_LIST});
        setTimeout(()=>{
            fetch('/products.json')
                .then((response) => response.json())
                .then((productList) => {
                    return dispatch({type: GET_PRODUCT_LIST_SUCCESS, product_list: productList});
                });
        }, 1500);
        
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
