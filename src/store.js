import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger';
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware,logger));

const store = createStore(rootReducer, composedEnhancer);

export default store;