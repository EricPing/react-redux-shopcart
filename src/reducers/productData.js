import {
    GET_PRODUCT_LIST_SUCCESS,
    GETTING_PRODUCT_LIST,
} from '../constants/actionTypes';

let initialState = {
    product_list: [],
    is_loading: true,
};

/**
 * @param {object} state
 * @param {string} action
 * @return {function} The reducer of product
 */
export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_SUCCESS:
            state = {
                ...action,
                is_loading: false,
            };
            break;
        case GETTING_PRODUCT_LIST:
            state = initialState;
            break;
    }

    return state;
}
