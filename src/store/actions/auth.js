export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()

  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' })
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR' })
  })
}
