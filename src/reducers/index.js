import product from './product';
import shopcart from './shopcart';

import {combineReducers} from 'redux';
export default combineReducers(
    {
        productStore: product,
        shopcartStore: shopcart,
    }
);
