import { combineReducers } from "redux";
import reducers from './reducer';

let postreducers = combineReducers(reducers);
export default postreducers;