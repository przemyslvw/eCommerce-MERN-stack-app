import {
  USER_CREATE,
  USER_ERROR,
  USER_LOGIN,
  USER_LOADED
} from "../actions/constans";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: {}
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_CREATE:
    case USER_LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true,
        error: {}
      };
    case USER_LOADED:
      localStorage.getItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload,
        error: {}
      };
    case USER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        error: payload
      };
    default:
      return state;
  }
};

export default auth;
