import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ProductList from '../components/product_list';
import ShopCart from '../components/shop_cart';

/**
 * @return {compoment} The main compoment of App.
 */
class App extends React.Component {
    /**
     * @return {component}
     */
    render() {
        return (
            <div className="container">
                <h1>購物車</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ProductList product_list={this.props.product_list}/>
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
    product_list: PropTypes.array,
};

/**
 * @param {object} state
 * @return {object}
 */
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
