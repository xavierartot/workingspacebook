import { UNCONNECT, CONNECT } from '../actions/auth'

export default function auth(state = true, action) {
  switch (action.type) {
    case UNCONNECT:
      console.log('unconnect', action.unconnect)
      return {
        ...state,
        ...action.unconnect,
      }
    case CONNECT:
      console.log('connect', action.connect)
      return {
        ...state,
        connect: action.connect,
      }
    default: return state
  }
}
