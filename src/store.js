import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';


import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware,logger));

const store = createStore(rootReducer, composedEnhancer);

export const persistor = persistStore(store);

export default store;