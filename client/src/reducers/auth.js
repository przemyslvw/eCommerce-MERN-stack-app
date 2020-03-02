import { USER_CREATE, USER_ERROR, USER_LOGIN } from "../actions/constans";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null
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
        isAuthenticated: true
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
