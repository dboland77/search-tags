import { combineReducers } from 'redux'
import tagsReducer from "./components/TagList/TagListSlice";


const rootReducer = combineReducers({
  tags: tagsReducer,
})

export default rootReducer