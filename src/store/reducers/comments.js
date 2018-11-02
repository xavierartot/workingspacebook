import { REMOVE_COMMENT, UPDATE_COMMENT, LIKE_COMMENT, ADD_COMMENT_ERROR, ADD_COMMENT, RECEIVES_COMMENTS } from '../actions/comments'
// import { initStateComments } from './initState'

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVES_COMMENTS:
      console.log('receive comments', action.comments)
      return {
        ...state,
        ...action.comments,
      }
    case ADD_COMMENT:
      console.log('add comment', action.comment)
      return {
        ...state,
        comments: action.comment,
      }
    case UPDATE_COMMENT:
      console.log('update comment', action.comment)
      return {
        ...state,
      }
    case REMOVE_COMMENT:
      console.log('remove comment - turn to true delete field', action.comment)
      return {
        ...state,
      }
    case ADD_COMMENT_ERROR:
      console.log('add Error', action.error)
      return state
    case LIKE_COMMENT:
      console.log('like comment', action.id)
      return state
    default: return state
  }
}
