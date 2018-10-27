export const ADD_USER = 'ADD_USER'
export const RECEIVES_USERS = 'RECEIVES_USERS'

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  }
}
export function recieveUser(users) {
  return {
    type: RECEIVES_USERS,
    users,
  }
}
