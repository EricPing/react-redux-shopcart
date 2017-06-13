import React from 'react';
import ProductList from '../components/product_list';
import Order from '../components/order';

let data = [
    {
        id: 1,
        title: "A",
        detail: "B",
    },
    {
        id: 2,
        title: "A",
        detail: "B",
    },
    {
        id: 3,
        title: "A",
        detail: "B",
    }
];
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
                <ProductList product_list={data}/>
                <Order/>
            </div>
        );
    }
}

export default App;
