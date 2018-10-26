import { ADD_COMMENT, RECEIVES_COMMENTS } from '../actions/comments'
import { initStateComments } from './initState'

export default function comment(state = initStateComments, action) {
  switch (action.type) {
    case RECEIVES_COMMENTS:
      return {
        ...state,
        ...action.comments,
      }
    case ADD_COMMENT:
      return {
        ...state,
        ...action.comment,
      }
    default: return state
  }
}
