import {
    FETCH_CHECKOUT_ITEMS_REQUEST,
    FETCH_CHECKOUT_ITEMS_SUCCESS,
    FETCH_CHECKOUT_ITEMS_FAILURE
} from './checkoutItemsType';

const initialState = {
    loading : true,
    cartItems : [],
    error : ''
}
const checkoutItemsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_CHECKOUT_ITEMS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_CHECKOUT_ITEMS_SUCCESS:
            return {
                ...state,
                loading : false,
                cartItems : action.payload,
                error : ''
            }
        case FETCH_CHECKOUT_ITEMS_FAILURE:
            return {
                ...state,
                loading : false,
                cartItems : [],
                error : action.payload
            }
        default : return state
    }
}

export default checkoutItemsReducer;