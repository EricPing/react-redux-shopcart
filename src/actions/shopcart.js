import {GETTING_SHOPCART_LIST,
        GET_SHOPCART_LIST_SUCCESS } from '../constants/actionTypes';
/**
 * 這邊使用setTimeout是因為localhost載入資料很快，為了做到Loading的效果，所以這邊延長時間
 * @return {function} async function
 */
export function getShopList() {
    return (dispatch) => {
        dispatch({type: GETTING_SHOPCART_LIST});
        setTimeout(() => {
            fetch('/shopcart.json')
                .then((response) => response.json())
                .then((shopcartList) => {
                    dispatch({type: GET_SHOPCART_LIST_SUCCESS, shopcart_list: shopcartList});
                });
        }, 3000);
    };
};
