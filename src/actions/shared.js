import { addProduct, recieveProducts } from './product'

export function handleProduct() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    dispatch.addProduct()
  }
}
export function handleInitialData() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    //dispatch.recieveProducts()
    // getInitialData() // return a promise
    // .then(({ categories }) => {
    // // dispatch(showLoading()) // show the loading bar
    // // let's add users, questions to the redux store
    // dispatch(receiveCategories(categories))
    // // dispatch(setAuthedUser(null)) // null by default
    // // dispatch(hideLoading()) // hide the loading bar
    // })
  }
}
