import { 
    FETCH_SINGLE_ITEM_REQUEST,
    FETCH_SINGLE_ITEM_SUCCESS,
    FETCH_SINGLE_ITEM_FAILURE
} from './singleItemType';
import Axios from 'axios';

const fetchSingleItemRequest = () => {
    return {
        type : FETCH_SINGLE_ITEM_REQUEST
    }
}
const fetchSingleItemSuccess = item => {
    return {
        type : FETCH_SINGLE_ITEM_SUCCESS,
        payload : item
    }
}
const fetchSingleItemFailure = error => {
    return {
        type : FETCH_SINGLE_ITEM_FAILURE,
        payload : error
    }
}
export const fetchSingleItem = (itemId) => {
    return dispatch => {
        dispatch(fetchSingleItemRequest)
        Axios.get(`https://foolivery-api.herokuapp.com/item/${itemId}`)
        .then(res => {
            const item = res.data;
            dispatch(fetchSingleItemSuccess(item))
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchSingleItemFailure(errMsg))
        })
    }
} 