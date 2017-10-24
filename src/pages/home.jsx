import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/product_list';
import ShopCart from '../components/shop_cart';
import {Link} from 'react-router-dom';
/**
 * @return {compoment} The main compoment of HomePage.
 */
class HomePage extends React.Component {
    /**
     *
     */
    componentDidMount() {
        if (this.props.productStore.product_list.length == 0) {
           this.props.actions.getProducts();
        }

        if (this.props.shopcartStore.shopcart_list.length == 0) {
           this.props.actions.getShopList();
        }

        // if (this.props.product_list.product_list.count ==0 ) {
        // }
    }

    /**
     * @return {component}
     */
    render() {
        return (
            <div>
                <h1>購物車</h1>
                <Link to="/intro">說明</Link>
                <div className="row">
                    <div className="col-md-6">
                        <ProductList actions={this.props.actions} store={this.props.productStore}/>
                    </div>
                    <div className="col-md-6">
                        <ShopCart actions={this.props.actions} store={this.props.shopcartStore}/>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    shopcartStore: PropTypes.object.isRequired,
    productStore: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default HomePage;
