import { receiveCategories } from './categories'

export function handleInitialData() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
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
