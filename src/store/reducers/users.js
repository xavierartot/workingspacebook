import { ADD_USER, RECEIVES_USERS } from '../actions/users'
// import { initStateUsers } from './initState'

// addUser is in actions/auth.js
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVES_USERS:
      return {
        ...state,
        ...action.users,
      }
    default: return state
  }
}
