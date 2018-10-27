import { addProduct, recieveProducts, addProductError } from './product'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleAddProduct(product) { // middleware thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    dispatch(showLoading()) // show the loading bar
    dispatch.addProduct(product)
    firestore.collection('projects').add({
      ...product,
      // authorFirstName: profile.firstName,
      // authorLastName: profile.lastName,
      authorFirstName: 'Xavier',
      authorLastName: 'Artot',
      // authorId,
      createdAt: new Date(),
    })
      .then(() => {
        dispatch(hideLoading()) // hide the loading bar
        console.log('Yeah, firestore you can dispatch')
      }).catch((error) => {
        console.log(error)
        dispatch(addProductError(error))
      })
  }
}
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
