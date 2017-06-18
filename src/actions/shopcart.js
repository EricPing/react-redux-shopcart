import {GETTING_SHOPCART_LIST,
         GET_SHOPCART_LIST_SUCCESS,
         ADDING_TO_SHOPCART,
         ADDED_TO_SHOPCART,
         UPDATE_AMOUNT_TO_SHOPCART} from '../constants/actionTypes';
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

/**
 *
 * @param {object} product
 * @param {int} amount
 * @return {function} async function
 */
export function addToShopcart(product, amount = 1) {
    return (dispatch) => {
        dispatch({type: ADDING_TO_SHOPCART});
        setTimeout(() => {
            dispatch({type: ADDED_TO_SHOPCART, product: product, amount: amount});
        }, 1500);
    };
}

/**
 *
 * @param {int} index
 * @param {int} amount
 * @return {function} function
 */
export function updateAmountToShopcart(index, amount) {
    return (dispatch) => {
        dispatch({type: UPDATE_AMOUNT_TO_SHOPCART, index: index, amount: amount});
    };
}
