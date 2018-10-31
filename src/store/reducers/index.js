import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import comments from './comments'
import categories from './categories'

export default combineReducers({
  auth,
  products,
  comments,
  categories,
  // loadingBar: loadingBarReducer, // react-redux-loading
})
