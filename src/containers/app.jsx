import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProductList from '../components/product_list';
import ShopCart from '../components/shop_cart';
import actions from '../actions';

/**
 * @return {compoment} The main compoment of App.
 */
class App extends React.Component {
    /**
     *
     */
    componentDidMount() {
        this.props.actions.getProducts();
        this.props.actions.getShopList();
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
                        <ProductList actions={this.props.actions} {...this.props.productStore}/>
                    </div>
                    <div className="col-md-6">
                        <ShopCart actions={this.props.actions} {...this.props.shopcartStore}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    shopcartStore: PropTypes.object.isRequired,
    productStore: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
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
    actions: bindActionCreators(actions, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
