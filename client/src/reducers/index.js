import { combineReducers } from "redux";
import auth from "./auth";
import booktables from "./booktables";
import basketItems from "./basketItems"

export default combineReducers({
  auth,
  basketItems,
  booktables

});
