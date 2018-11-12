export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS'
export const FB_LOGIN_ERROR = 'FB_LOGIN_ERROR'
export const TWITTER_LOGIN_SUCCESS = 'TWITTER_LOGIN_SUCCESS'
export const TWITTER_LOGIN_ERROR = 'TWITTER_LOGIN_ERROR'

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

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()

  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' })
  })
}

export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase()
  const firestore = getFirestore()

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
    // and add an uid
  ).then(resp => firestore.collection('users')
    // because add() generate an id for us we can't use it
    // We use doc when we specify a reference id
    .doc(resp.user.uid).set({ // set the data in users collection
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: newUser.firstName[0] + newUser.lastName[0],
      pseudoUser: newUser.firstName + newUser.lastName,
      displayName: newUser.firstName + newUser.lastName,
    }))
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
}

export const loginFacebook = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase()
  const firestore = getFirestore()

  // Sign in using a popup.
  const provider = new firebase.auth.FacebookAuthProvider()
  provider.addScope('user_birthday')
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Facebook Access Token.
    const token = result.credential.accessToken
    provider.addScope('user_birthday')
    // The signed-in user info.
    const profile = result.additionalUserInfo.profile
    return result
  })
    .then((resp) => {
      // console.log(resp)
      const profile = resp.additionalUserInfo.profile
      firestore.collection('users') // and add an uid
        .doc(resp.user.uid).set({ // set the data in users collection
          firstName: profile.first_name,
          lastName: profile.last_name,
          initials: profile.first_name[0] + profile.last_name[0],
          pseudoUser: profile.first_name + profile.last_name,
          displayName: profile.first_name + profile.last_name,
        })
    })
    .then(() => {
      dispatch({ type: 'FB_LOGIN_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'FB_LOGIN_ERROR', err })
    })
}
export const loginTwitter = () => (dispatch, getState, { getFirebase, getFirestore }) => {
  // console.log(1)
  const firebase = getFirebase()
  const firestore = getFirestore()
  const provider = new firebase.auth.TwitterAuthProvider()
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const token = result.credential.accessToken
    const secret = result.credential.secret
    // The signed-in user info.
    const user = result.user
    // console.log(result)
    return result
    // ...
  })
    .then((resp) => {
      // console.log(resp)
      const profile = resp.additionalUserInfo.profile
      firestore.collection('users') // and add an uid
        .doc(resp.user.uid).set({ // set the data in users collection
          firstName: profile.name,
          lastName: profile.screen_name,
          initials: profile.screen_name[0] + profile.name[0],
          pseudoUser: profile.screen_name,
          displayName: profile.screen_name,
        })
    })
    .then(() => {
      dispatch({ type: 'TWITTER_LOGIN_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'TWITTER_LOGIN_ERROR', err })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      // ...
    })
}
