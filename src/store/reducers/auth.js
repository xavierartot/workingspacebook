import { TWITTER_LOGIN_SUCCESS, TWITTER_LOGIN_ERROR, SIGNOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR, FB_LOGIN_SUCCESS, FB_LOGIN_ERROR } from '../actions/auth'

const initState = { authError: null }

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('login error..., authError: Login failed')
      return {
        ...state,
        authError: 'Login failed',
      }
    case LOGIN_SUCCESS:
      console.log('login success..., authError: null')
      return {
        ...state,
        authError: null,
      }

    case SIGNOUT_SUCCESS:
      console.log('signout success')
      return {
        ...state,
        authError: null,
      }

    case 'SIGNUP_SUCCESS':
      console.log('signup success...')
      return {
        ...state,
        authError: null,
      }

    case 'SIGNUP_ERROR':
      console.log('signup error...')
      return {
        ...state,
        authError: action.err.message,
      }
    case FB_LOGIN_SUCCESS:
      console.log('FB success...')
      return {
        ...state,
        authError: null,
      }
    case FB_LOGIN_ERROR:
      console.log('FB login error...')
      return {
        ...state,
        authError: action.err.message,
      }
    case TWITTER_LOGIN_SUCCESS:
      console.log('Twitter success...')
      return {
        ...state,
        authError: null,
      }
    case TWITTER_LOGIN_ERROR:
      console.log('Twitter login error...')
      return {
        ...state,
        authError: action.err.message,
      }
    default:
      return state
  }
}

export default auth
