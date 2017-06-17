import productData from './productData';
import {combineReducers} from 'redux';
export default combineReducers(
    {
        productStore: productData,
    }
);
