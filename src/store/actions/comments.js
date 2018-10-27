export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVES_COMMENTS = 'RECEIVES_COMMENTS'

export function recieveComment(comments) {
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
