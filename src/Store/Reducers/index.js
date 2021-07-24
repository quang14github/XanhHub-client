import { combineReducers } from "redux";
import { user } from "./User";
import cart from "./Cart";
import search from "./Search";
export default combineReducers({
  user,
  cart,
  search,
});
