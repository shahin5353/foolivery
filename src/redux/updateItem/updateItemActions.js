import {
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE
} from './updateItemType';

const updateItemRequest = () => {
    return {
        type: UPDATE_ITEM_REQUEST
    }
}
const updateItemSuccess = result => {
    return {
        type: UPDATE_ITEM_SUCCESS,
        payload: result
    }
}
const updateItemFailure = error => {
    return {
        type: UPDATE_ITEM_FAILURE,
        payload: error
    }
}
export const updateItem = (id,updatedField) => {
    return dispatch => {
        dispatch(updateItemRequest);
        fetch(`http://localhost:4500/item/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedField),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => {
                const result = res.data;
                dispatch(updateItemSuccess(result))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(updateItemFailure(errMsg))
            })
    }
}