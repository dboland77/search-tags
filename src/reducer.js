import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import tagsReducer from "./components/TagList/TagListSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tags']
}


const rootReducer = combineReducers({
  tags: tagsReducer,
})

export default persistReducer(persistConfig, rootReducer);