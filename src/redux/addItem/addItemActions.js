import { 
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE
} from './addItemType';

const addItemRequest = () => {
    return {
        type: ADD_ITEM_REQUEST
    }
}
const addItemSuccess = item => {
    return {
        type: ADD_ITEM_SUCCESS,
        payload: item
    }
}
const addItemFailure = error => {
    return {
        type: ADD_ITEM_FAILURE,
        payload: error
    }
}
export const addItem = (itemData) => {
    console.log(itemData);
    return dispatch => {
        dispatch(addItemRequest)
        fetch('https://foolivery-api.herokuapp.com/addItem', {
            method: 'POST',
            body: JSON.stringify(itemData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => {
                const item = res.data;
                dispatch(addItemSuccess(item))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(addItemFailure(errMsg))
            })
    }
}