import { combineReducers } from "redux";
import countryReducer from "./country";
import dataReducer from "./data";

export default combineReducers({
  country: countryReducer,
  data: dataReducer,
});
