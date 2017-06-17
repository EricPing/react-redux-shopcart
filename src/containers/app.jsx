import React from 'react';
import ProductList from '../components/product_list';
import Order from '../components/order';

let data = [
    {
        id: 1,
        title: '哈利波特 - 神秘的魔法石',
        img: 'https://unsplash.it/400/300/?random&1',
        price: 15,
        discount: 5,
    },
    {
        id: 2,
        title: '波西傑克森 - 神火之賊',
        img: 'https://unsplash.it/400/300/?random&2',
        price: 20,
        discount: 5,
    },
    {
        id: 3,
        title: '刀劍神域 1',
        img: 'https://unsplash.it/400/300/?random&3',
        price: 25,
        discount: 5,
    },
        {
        id: 4,
        title: '加速世界 1',
        img: 'https://unsplash.it/400/300/?random&1',
        price: 15,
        discount: 5,
    },
    {
        id: 5,
        title: '零之使魔 1',
        img: 'https://unsplash.it/400/300/?random&2',
        price: 20,
        discount: 5,
    },
    {
        id: 6,
        title: '歷史守護者 1',
        img: 'https://unsplash.it/400/300/?random&3',
        price: 25,
        discount: 5,
    },
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
                <ProductList productList={data}/>
                <Order/>
            </div>
        );
    }
}

export default App;
