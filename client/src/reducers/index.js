import { combineReducers } from "redux";
import auth from "./auth";
import booktables from "./booktables";

export default combineReducers({
  auth,booktables
});
