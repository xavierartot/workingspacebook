import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import comments from './comments'
import collections from './collections'

export default combineReducers({
  products,
  auth,
  comments,
  collections,
  // loadingBar: loadingBarReducer, // react-redux-loading
})
