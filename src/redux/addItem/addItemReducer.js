import { 
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE
} from './addItemType';

const initialState = {
    loading : false,
    item : [],
    error : '',
    status : ''
}
const addItemReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_REQUEST:
            return {
                ...state,
                loading : true,
                status : 'pending'
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                loading : false,
                item : action.payload,
                error : '',
                status : 'success'
            }
        case ADD_ITEM_FAILURE:
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

export default addItemReducer;