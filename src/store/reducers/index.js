import { combineReducers } from 'redux'
import auth from './auth'
import products from './products'
import comments from './comments'
import collections from './collections'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'// sync authentification

export default combineReducers({
  auth,
  comments,
  products,
  collections,
  firestore: firestoreReducer, // connect firestore and the reducer
  firebase: firebaseReducer, // firebase including authentification
  // loadingBar: loadingBarReducer, // react-redux-loading
})
