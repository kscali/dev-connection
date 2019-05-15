import { combineReducers } from "redux";
import alertReducer from "./alert_reducer";

export default combineReducers({
  alert: alertReducer
});
