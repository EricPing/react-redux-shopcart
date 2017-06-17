import {GETTING_PRODUCT_LIST,
         GET_PRODUCT_LIST_SUCCESS} from '../constants/actionTypes';
/**
 * 這邊使用setTimeout是因為localhost載入資料很快，為了做到Loading的效果，所以這邊延長時間
 * @return {function} async function
 */
export function getProducts() {
    return (dispatch) => {
        dispatch({type: GETTING_PRODUCT_LIST});
        setTimeout(() => {
            fetch('/products.json')
                .then((response) => response.json())
                .then((productList) => {
                    dispatch({type: GET_PRODUCT_LIST_SUCCESS, product_list: productList});
                });
        }, 3000);
    };
};
