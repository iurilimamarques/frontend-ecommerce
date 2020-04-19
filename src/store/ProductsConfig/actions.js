import axios from 'axios';

import { URL_API } from '../../service/api';

import { MODIFY_SEARCH, 
         FETCH_SEARCH_PENDING,
         FETCH_SEARCH_SUCCESS,
         FETCH_SEARCH_ERROR,
         MODIFY_PRODUCTS,
         MODIFY_CATEGORY } from '../constants';

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

export const setCategories = (categories) => {
    let all_items = '';
    if (categories.response) {
        all_items = categories.response.reduce( function( prevVal, elem ) {
                        return prevVal + elem.count;
                    }, 0 );
        categories.response.unshift({nome: 'Todos', count: all_items});
    }
        
    return {
        type: MODIFY_CATEGORY,
        payload: categories
    }
}

export const clickSearch = (searchTerm) => {
    return dispatch => {
        dispatch({type: FETCH_SEARCH_PENDING});
        
        return axios.get(`${URL_API}/product?searchTerm=${searchTerm}`)
            .then(({ data }) => dispatch(setProducts(data)));        
    }
}

export const searchByCategory = (filterCategorie) => {
    if (!filterCategorie) {
        filterCategorie = '';
    }
    
    return dispatch => {        
        return axios.get(`${URL_API}/product?categorie=${filterCategorie}`)
            .then(({ data }) => dispatch(setProducts(data)));        
    }
}

export const getAllProducts = () => {
    return dispatch => {        
        return axios.get(`${URL_API}/product`)
            .then(({ data }) => dispatch(setProducts(data)));        
    }
}

export const getCategories = () => {
    return dispatch => {
        return axios.get(`${URL_API}/category`)
            .then( ({data}) => dispatch(setCategories(data)));
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

