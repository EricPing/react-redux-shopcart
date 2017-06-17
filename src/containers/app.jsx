import React from 'react';
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
                        <ProductList productList={[]}/>
                    </div>
                    <div className="col-md-6">
                        <ShopCart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
