import { 
    FETCH_SINGLE_ITEM_REQUEST,
    FETCH_SINGLE_ITEM_SUCCESS,
    FETCH_SINGLE_ITEM_FAILURE
} from './singleItemType';

const initialState = {
    loading : true,
    item : [],
    error : null
}
const singleItemReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_SINGLE_ITEM_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_SINGLE_ITEM_SUCCESS:
            return {
                ...state,
                loading : false,
                item : action.payload,
                error : ''
            }
        case FETCH_SINGLE_ITEM_FAILURE:
            return {
                ...state,
                loading : false,
                item : [],
                error : action.payload
            }
        default : return state
    }
}

export default singleItemReducer;