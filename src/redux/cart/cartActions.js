import { 
    GET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from './cartTypes';
export const GetCart = () => {
    return {
        type : GET_CART
    }
}
export const AddToCart = (key, count=1) => {
    return {
        type : ADD_TO_CART,
        key,
        count
    }
}
export const RemoveFromCart = (key) => {
    return {
        type : REMOVE_FROM_CART,
        key
    }
}
export const ClearCart = () => {
    return {
        type : CLEAR_CART
    }
}