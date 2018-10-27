import { RECEIVE_CATEGORIES } from '../actions/categories'

export default function auth(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      // console.log(action.categories)
      return {
        ...state,
        ...action.categories,
      }
    default: return state
  }
}
