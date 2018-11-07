import { SIGNOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/auth'

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
      console.log('signup success')
      return {
        ...state,
        authError: null,
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message,
      }

    default:
      return state
  }
}

export default auth
