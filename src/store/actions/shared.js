import { likeCollection, updateCollection, removeCollection, addCollectionError, recieveCollections, addCollection } from './collections'
import { likeProduct, updateProduct, removeProduct, addProduct, recieveProduct, recieveProducts, addProductError } from './product'

import { likeComment, updateComment, removeComment, addComment, recieveComments, addCommentError } from './comments'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { generateUID } from '../../utils/helpers'

export function handleAddCollection(collection) { // middleware thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const collections = {
      id: generateUID(),
      name: collection, // name of collection
      path: collection,
      deleted: false,
      createdAt: new Date(),
    }
    console.log(collections)
    dispatch(addCollection(collections))

    // firebase
    const firestore = getFirestore()
    firestore.collection('collections').add({
      ...collections,
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

export function handleInitialData() { // middleware thunk
  // return (dispatch, getState) => { // thunk pattern with redux-thunk
  return (dispatch, getState, { getFirebase, getFirestore }) => { // thunk pattern with redux-thunk
    const firestore = getFirestore()
    // dispatch(showLoading()) // show the loading bar
    // firestore.collection('projects').add({
    // // authorFirstName: profile.firstName,
    // authorFirstName: 'ddddddddddddd',
    // authorLastName: 'Artot',
    // // authorLastName: profile.lastName,
    // // authorId,
    // createdAt: new Date(),
    // })
    // .then(() => {
    // console.log('Yeah, firestore you can dispatch')

    // dispatch(hideLoading()) // hide the loading bar
    // })
    // .catch(err => console.log(err))
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
