import { 
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE
} from './deleteItemType';
import Axios from 'axios';

const deleteItemRequest = () => {
    return {
        type: DELETE_ITEM_REQUEST
    }
}
const deleteItemSuccess = item => {
    return {
        type: DELETE_ITEM_SUCCESS,
        payload: item
    }
}
const deleteItemFailure = error => {
    return {
        type: DELETE_ITEM_FAILURE,
        payload: error
    }
}
export const deleteItem = (id) => {
    return dispatch => {
        dispatch(deleteItemRequest)
        Axios.delete(`http://localhost:4500/item/${id}`)
            .then(res => {
                const item = res.data;
                dispatch(deleteItemSuccess(item))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(deleteItemFailure(errMsg))
            })
    }
}