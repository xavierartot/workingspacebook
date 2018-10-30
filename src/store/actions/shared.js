import { addProduct, recieveProducts, addProductError } from './product'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData() { // middleware thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => { // thunk pattern with redux-thunk
    const firestore = getFirestore()
    dispatch(showLoading()) // show the loading bar
    firestore.collection('projects').add({
      // authorFirstName: profile.firstName,
      authorFirstName: 'ddddddddddddd',
      authorLastName: 'Artot',
      // authorLastName: profile.lastName,
      // authorId,
      createdAt: new Date(),
    })
      .then(() => {
        console.log('Yeah, firestore you can dispatch')

        dispatch(hideLoading()) // hide the loading bar
      })
      .catch(err => console.log(err))
  }
}

export function handleAddProduct(product) { // middleware thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    dispatch(addProduct(product))
    firestore.collection('projects').add({
      ...product,
      createdAt: new Date(),
    })
      .then(() => {
        console.log('Yeah, firestore you can dispatch this action')
      }).catch((error) => {
        console.log(error)
        dispatch(addProductError(error))
      })
  }
}
