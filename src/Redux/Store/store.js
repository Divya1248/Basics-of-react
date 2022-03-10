import reducers from '../Reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { createStore } from 'redux';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;

