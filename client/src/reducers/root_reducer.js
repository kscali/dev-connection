import { combineReducers } from "redux";
import alertReducer from "./alert_reducer";
import authReducer from "./auth_reducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer
});
