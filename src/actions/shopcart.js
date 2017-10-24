import {GETTING_SHOPCART_LIST,
         GET_SHOPCART_LIST_SUCCESS,
         ADDING_TO_SHOPCART,
         ADDED_TO_SHOPCART,
         DELETE_FROM_SHOPCART,
         UPDATE_AMOUNT_TO_SHOPCART,
         ENABLE_ADD_TO_SHOPCART,
         DISABLE_ADD_TO_SHOPCART} from '../constants/actionTypes';

let tempShopcartList = null;
/**
 * 這邊使用setTimeout是因為localhost載入資料很快，為了做到Loading的效果，所以這邊延長時間
 * @return {function} async function
 */
export function getShopList() {
    return (dispatch) => {
        if (tempShopcartList != null) {
            dispatch({type: GET_SHOPCART_LIST_SUCCESS, shopcart_list: tempShopcartList});
            return;
        }

        dispatch({type: GETTING_SHOPCART_LIST});
        setTimeout(() => {
            fetch('/shopcart.json')
                .then((response) => response.json())
                .then((shopcartList) => {
                    tempShopcartList = shopcartList;
                    dispatch({type: GET_SHOPCART_LIST_SUCCESS, shopcart_list: shopcartList});
                });
        }, 3000);
    };
};

/**
 * @param {int} id
 * @param {object} product
 * @param {int} amount
 * @return {function} async function
 */
export function addToShopcart(id, product, amount = 1) {
    return (dispatch) => {
        dispatch({type: ADDING_TO_SHOPCART});
        dispatch({type: DISABLE_ADD_TO_SHOPCART, id: id});
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

/**
 * @param {int} id
 * @param {int} index
 * @return {function} function
 */
export function deleteFromShopcart(id, index) {
    return (dispatch) => {
        dispatch({type: ENABLE_ADD_TO_SHOPCART, id: id});
        dispatch({type: DELETE_FROM_SHOPCART, index: index});
    };
}
