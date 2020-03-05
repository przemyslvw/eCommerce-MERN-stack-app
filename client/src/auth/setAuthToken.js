import axios from "axios";

const setAutchToken = token => {
  if (token) axios.default.headers.common["authentication-token"] = token;
  else delete axios.defaults.headers.common["authentication-token"];
};

export default setAutchToken;
