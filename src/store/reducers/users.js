import { ADD_USER, RECEIVES_USERS } from '../actions/users'
import { initStateUsers } from './initState'

export default function users(state = initStateUsers, action) {
  switch (action.type) {
    case RECEIVES_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_USER:
      return {
        ...state,
        ...action.user,
      }
    default: return state
  }
}
