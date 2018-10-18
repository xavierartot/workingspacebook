import { combineReducers } from 'redux'
import categories from './categories'

export default combineReducers({
  categories,
  // loadingBar: loadingBarReducer, // react-redux-loading
})
