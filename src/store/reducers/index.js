import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import comments from './comments'
import categories from './categories'

export default combineReducers({
  products,
  auth,
  comments,
  categories,
  // loadingBar: loadingBarReducer, // react-redux-loading
})
