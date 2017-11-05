import React from 'react';
import ProductList from '../components/product_list';
import ShopCart from '../components/shop_cart';
import {Link} from 'react-router-dom';
/**
 * @return {compoment} The main compoment of HomePage.
 */
class HomePage extends React.Component {
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
                        <ProductList/>
                    </div>
                    <div className="col-md-6">
                        <ShopCart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
