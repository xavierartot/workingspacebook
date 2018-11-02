import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import comments from './comments'
import collections from './collections'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  auth,
  comments,
  products,
  collections,
  firestore: firestoreReducer, // connect firestore and the reducer
  // loadingBar: loadingBarReducer, // react-redux-loading
})
