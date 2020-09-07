import { 
    GET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from './cartTypes';

const getUser = () => {
    const existingUser = localStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        localStorage.setItem('userId', newUser)
        return newUser;
    }
}

const getDataKey = () => {
    const userId = getUser();
    return `hot-onion/carts/${userId}`
}
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}
const initialState = {
    cartItems : []
}
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CART :
            return {
                ...state,
                cartItems : getDatabaseCart()
            }
        case ADD_TO_CART :
            const currentCart = getDatabaseCart();
            currentCart[action.key] = action.count;
            localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
            return {
                ...state,
                cartItems : getDatabaseCart()
            }
        case REMOVE_FROM_CART:
            const currentCartItems = getDatabaseCart();
            delete currentCartItems[action.key];
            localStorage.setItem(getDataKey(), JSON.stringify(currentCartItems));
            return {
                ...state,
                cartItems : getDatabaseCart()
            }
        case CLEAR_CART :
            localStorage.removeItem(getDataKey());
            return {
                ...state,
                cartItems : getDatabaseCart()
            }
        default : return state
    }
}
export default cartReducer;





// push to local storage: a temporary place for database

// const getDatabaseCart = () => {
//     const dataKey = getDataKey();
//     const data = localStorage.getItem(dataKey) || "{}";
//     return JSON.parse(data);
// }

// const addToDatabaseCart = (key, count) => {
//     const currentCart = getDatabaseCart();
//     currentCart[key] = count;
//     localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
// }

// const removeFromDatabaseCart = key => {
//     const currentCart = getDatabaseCart();
//     delete currentCart[key];
//     localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
// }

// const clearCart = (cart) => {
//     localStorage.removeItem(getDataKey());
// }
