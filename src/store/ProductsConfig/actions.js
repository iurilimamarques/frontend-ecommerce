import axios from 'axios';

import { URL_API } from '../../service/api';

import { MODIFY_SEARCH, 
         FETCH_SEARCH_PENDING,
         FETCH_SEARCH_SUCCESS,
         FETCH_SEARCH_ERROR,
         MODIFY_PRODUCTS } from '../constants';

export const modifySearch = (text) => {
    return {
        type: MODIFY_SEARCH,
        payload: text
    }
}

export const setProducts = (products) => {
    return {
        type: MODIFY_PRODUCTS,
        payload: products
    }
}

export const clickSearch = (searchTerm) => {
    return dispatch => {
        dispatch({type: FETCH_SEARCH_PENDING});
        
        return axios.get(`${URL_API}/product`)
            .then(({ data }) => dispatch(setProducts(data)));        
    }
}

const fetchSearchPending = (erro, dispatch) =>{
    dispatch(
        {
            type: FETCH_SEARCH_PENDING
        }
    ) 
}

const fetchSearchSuccess = (products) => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        products: products
    }
}

const fetchSearchError = (error) => {
    return {
        type: FETCH_SEARCH_ERROR,
        error: error
    }
}

