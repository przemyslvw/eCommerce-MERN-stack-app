import { USER_CREATE, USER_ERROR, USER_LOGIN, USER_LOADED, LOG_OUT } from '../actions/constans';


const initialState = {
    token: localStorage.getItem('token'),
    isLoading: true,
    isAuthenticated: false,
    user: null,
    error: {}
}

const auth = (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case USER_CREATE:
        case USER_LOGIN:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                error: {}
            }
        case USER_LOADED:
            localStorage.getItem('token');
            return {
                ...state,
                isLoading: false,
                error: {},
                isAuthenticated: true,
                user: payload
            }
        case USER_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
                error: payload
            }
        default:
            return state;
    }
}

export default auth;