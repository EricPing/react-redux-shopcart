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
        this.props.actions.getProducts();
        this.props.actions.getShopList();
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

HomePage.propTypes = {
    shopcartStore: PropTypes.object.isRequired,
    productStore: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default HomePage;
