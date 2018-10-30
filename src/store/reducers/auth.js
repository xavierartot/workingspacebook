import { UNCONNECT, CONNECTED } from '../actions/auth'

export default function comment(state, action) {
  switch (action.type) {
    case UNCONNECT:
      console.log('unconnect', action.unconnect)
      return {
        ...state,
        ...action.unconnect,
      }
    case CONNECTED:
      console.log('connect', action.connect)
      return {
        ...state,
        connect: action.connect,
      }
    default: return state
  }
}
