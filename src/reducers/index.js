import product from './product';
import shopcart from './shopcart';

import {combineReducers} from 'redux';
export default (
    {
        productStore: product,
        shopcartStore: shopcart,
    }
);
