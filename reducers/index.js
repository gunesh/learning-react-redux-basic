import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import admin from "./admin";
import about from "./about";


const rootReducer = combineReducers({
  login,
  user,
  admin,
  about
});

export default rootReducer;
