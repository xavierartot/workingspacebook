export const RECEIVES_COMMENTS = 'RECEIVES_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const LIKE_COMMENT = 'LIKE_COMMENT'
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR'

export function recieveComments(comments) {
  return {
    type: RECEIVES_COMMENTS,
    comments,
  }
}
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}
export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  }
}
export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}
export function addCommentError(error) {
  return {
    type: ADD_COMMENT_ERROR,
    error,
  }
}
export function likeComment(id) {
  return {
    type: LIKE_COMMENT,
    id,
  }
}
