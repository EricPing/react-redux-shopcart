import {GET_SHOPCART_LIST_SUCCESS,
         GETTING_SHOPCART_LIST,
         ADDING_TO_SHOPCART,
         ADDED_TO_SHOPCART,
         UPDATE_AMOUNT_TO_SHOPCART,
         DELETE_FROM_SHOPCART} from '../constants/actionTypes';

let initialState = {
    shopcart_list: [],
    is_loading: true,
};

/**
 * @param {object} state
 * @param {string} action
 * @return {function} The reducer of product
 */
export default function shopcart(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GETTING_SHOPCART_LIST:
            state = initialState;
            break;
        case GET_SHOPCART_LIST_SUCCESS:
            state = {
                shopcart_list: action.shopcart_list,
                is_loading: false,
            };
            break;
        case ADDING_TO_SHOPCART:
            state = {...state};
            state.is_loading = true;
            break;
        case ADDED_TO_SHOPCART:
            state = {...state};
            state.shopcart_list.push({
                product: action.product,
                amount: action.amount,
                total: (action.product.price-action.product.discount) * action.amount,
            });

            state.is_loading = false;
            break;
        case UPDATE_AMOUNT_TO_SHOPCART:
            state = {...state};
            let item = state.shopcart_list[action.index];
            state.shopcart_list[action.index] = {
                ...item,
                amount: action.amount,
                total: ((item.product.price - item.product.discount) * action.amount),
            };
            break;
        case DELETE_FROM_SHOPCART:
            state = {...state};
            state.shopcart_list.splice(action.index, 1);
            break;
    }

    return state;
}
