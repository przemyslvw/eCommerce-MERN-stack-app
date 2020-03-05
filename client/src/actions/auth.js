import { USER_LOGIN, USER_ERROR } from "./constans";
import axios from "axios";

export const login = (password, email) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ password, email });
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      body,
      config
    );
    dispatch({
      type: USER_LOGIN,
      payload: response.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error });
  }
};
