import {
    FETCH_CHECKOUT_ITEMS_REQUEST,
    FETCH_CHECKOUT_ITEMS_SUCCESS,
    FETCH_CHECKOUT_ITEMS_FAILURE
} from './checkoutItemsType';

const fetchCheckoutItemsRequest = () => {
    return {
        type: FETCH_CHECKOUT_ITEMS_REQUEST
    }
}
const fetchCheckoutItemsSuccess = cartItems => {
    return {
        type: FETCH_CHECKOUT_ITEMS_SUCCESS,
        payload: cartItems
    }
}
const fetchCheckoutItemsFailure = error => {
    return {
        type: FETCH_CHECKOUT_ITEMS_FAILURE,
        payload: error
    }
}
export const fetchCheckoutItems = (savedCart) => {
    const itemsId = Object.keys(savedCart.cartItems);
    return dispatch => {
        dispatch(fetchCheckoutItemsRequest)
        fetch('http://localhost:4500/itemsById', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemsId)
        })
            .then(res => res.json())
            .then(data => {
                const cartItems = itemsId.map(id => {
                    const item = data.find(item => item._id === id);
                    item.quantity = savedCart.cartItems[id];
                    return item;
                })
               dispatch(fetchCheckoutItemsSuccess(cartItems));
            })
            .catch(err => {
                const errMsg = err.message;
                dispatch(fetchCheckoutItemsFailure(errMsg));
            })
    }
}