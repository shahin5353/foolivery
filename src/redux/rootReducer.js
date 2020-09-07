import {combineReducers} from 'redux';
import itemsReducer from './items/itemsReducer';
import singleItemReducer from './singleItem/singleItemReducer';
import addItemReducer from './addItem/addItemReducer';
import deleteItemReducer from './deleteItem/deleteItemReducer';
import updateItemReducer from './updateItem/updateItemReducer';
import cartReducer from './cart/cartReducer';
import checkoutItemsReducer from './checkoutItems/checkoutItemsReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    addItem : addItemReducer,
    deleteItem : deleteItemReducer,
    updateItem : updateItemReducer,
    item: singleItemReducer,
    cart : cartReducer,
    checkoutItems : checkoutItemsReducer
})

export default rootReducer;