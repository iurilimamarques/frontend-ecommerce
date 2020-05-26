import axios from 'axios';
import { browserHistory } from 'react-router-dom';


import { URL_API } from '../../service/api';

import { SET_TOKEN,
         FETCH_LOGIN_PENDING,
         FETCH_LOGIN_ERROR,
         MODIFY_EMAIL,
         MODIFY_PASSWORD } from '../constants';

export const handleLogin = (email, password) => {
    return dispatch => {
        dispatch({type: FETCH_LOGIN_PENDING});
        
        return axios.post(`${URL_API}/user/login`, { email: email, senha: password })
            .then(({ data }) => {
                dispatch(setTokenUser(data.token))
                localStorage.setItem('token_user', data.token);
                console.log(this.props);
                
            })
            .catch(erro => erroLogin(erro, dispatch));        
    }
}

export const setTokenUser = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const modifyEmail = (text) => {
    return  {
        type: MODIFY_EMAIL,
        payload: text
    }
}

export const modifyPassword = (text) => {
    return  {
        type: MODIFY_PASSWORD,
        payload: text
    }
}

const erroLogin = (erro, dispatch) => {
    let erroMessage = '';
    
    if (erro.response.data.response==='usuario_inexistente') {
        erroMessage = 'Usuário não encontrado';
    }else if(erro.response.data.response==='credenciais_incorreta') {
        erroMessage = 'E-mail ou Senha incorretos';
    }
    dispatch ({ type: FETCH_LOGIN_ERROR, payload: erroMessage });
}
