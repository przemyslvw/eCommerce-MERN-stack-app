import { CREATE_USER } from "../actions/constans";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: false,
  user: null
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default auth;
