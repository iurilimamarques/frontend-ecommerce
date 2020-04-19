import { MODIFY_SEARCH, 
         FETCH_SEARCH_PENDING,
         FETCH_SEARCH_SUCCESS,
         FETCH_SEARCH_ERROR,
         MODIFY_PRODUCTS,
         MODIFY_CATEGORY } from '../constants';

const INITIAL_STATE = {
    products: [],
    categories: [],
    search: '',
    pending: false,
    error: null
}

const ProductsReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MODIFY_SEARCH:            
            return {
                ...state,
                search: action.payload
            }
        case FETCH_SEARCH_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case MODIFY_PRODUCTS:        
            return {
                ...state,
                products: action.payload,
                pending: false
            }
        case MODIFY_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        default: 
            return state;
    }
}

export default ProductsReducers;
