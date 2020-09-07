import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE
} from './itemsType';
import Axios from 'axios';

const fetchItemsRequest = () => {
    return {
        type: FETCH_ITEMS_REQUEST
    }
}
const fetchItemsSuccess = items => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
}
const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
}
export const fetchItems = () => {
    return dispatch => {
        dispatch(fetchItemsRequest)
        Axios.get('https://foolivery-api.herokuapp.com/items')
            .then(res => {
                const items = res.data;
                dispatch(fetchItemsSuccess(items))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchItemsFailure(errMsg))
            })
    }
}