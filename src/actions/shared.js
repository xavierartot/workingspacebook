import { addProduct, recieveProducts } from './product'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleProduct() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    dispatch.addProduct()
  }
}
export function handleInitialData() { // middleware thunk
  // this object come from the middleware/index.js - getFirebase, getFirestore
  return (dispatch, getState, { getFirebase, getFirestore }) => { // thunk pattern with redux-thunk
    const firestore = getFirestore
    firestore.collection('products')
    dispatch.recieveProducts().add({
      id: 'xxxxx',
      createdAt: new Date(),
    })
      .then(() => console.log('Yeah, firestore you can dispatch'))
      .catch(err => console.log(err))
    // getInitialData() // return a promise
    // .then(({ categories }) => {
    // // dispatch(showLoading()) // show the loading bar
    // // let's add users, questions to the redux store
    // dispatch(receiveCategories(categories))
    // // dispatch(setAuthedUser(null)) // null by default
    // // dispatch(hideLoading()) // hide the loading bar
    //
    // })
  }
}
