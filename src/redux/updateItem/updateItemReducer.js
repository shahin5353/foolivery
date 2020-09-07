import {
    UPDATE_ITEM_REQUEST,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE
} from './updateItemType';

const initialState = {
    loading : false,
    result : [],
    error : '',
    status : ''
}
const updateItemReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_ITEM_REQUEST:
            return {
                ...state,
                loading : true,
                status : 'pending'
            }
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                loading : false,
                result : action.payload,
                error : '',
                status : 'success'
            }
        case UPDATE_ITEM_FAILURE:
            return {
                ...state,
                loading : false,
                result : [],
                error : action.payload,
                status : 'error'
            }
    default : return state
    }
}

export default updateItemReducer;