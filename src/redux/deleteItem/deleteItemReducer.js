import { 
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE
} from './deleteItemType';

const initialState = {
    loading : false,
    item : [],
    error : '',
    status : ''
}
const deleteItemReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_ITEM_REQUEST:
            return {
                ...state,
                loading : true,
                status : 'pending'
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                loading : false,
                item : action.payload,
                error : '',
                status : 'success'
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                loading : false,
                item : [],
                error : action.payload,
                status : 'error'
            }
    default : return state
    }
}

export default deleteItemReducer;