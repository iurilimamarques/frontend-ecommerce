import { SET_TOKEN,
         FETCH_LOGIN_PENDING,
         FETCH_LOGIN_ERROR,
         MODIFY_EMAIL,
         MODIFY_PASSWORD } from '../constants';

const INITIAL_STATE = {
    email: '',
    password: '',
    token_user: '',
    pending_login: false,
    error_login: ''
}

const UserReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return { 
                ...state, 
                token_user: action.payload,
                pending_login: false,
                error_login: ''
            }
            break;
        case FETCH_LOGIN_PENDING:
            return {
                ...state,
                pending_login: true
            }
            break;
        case FETCH_LOGIN_ERROR:
            return {
                ...state,
                error_login: action.payload
            }
            break;
        case MODIFY_EMAIL:
            return {
                ...state,
                email: action.payload
            }
            break;
        case MODIFY_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
            break;
        default:
            return state;
    }
}

export default UserReducers;
