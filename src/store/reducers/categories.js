import { REMOVE_CATEGORIE, UPDATE_CATEGORIE, LIKE_CATEGORIE, ADD_CATEGORIE_ERROR, ADD_CATEGORIE, RECEIVES_CATEGORIES } from '../actions/categories'
import { initStateCategories } from './initState'

export default function categorie(state = initStateCategories, action) {
  switch (action.type) {
    case RECEIVES_CATEGORIES:
      console.log('receive categories', action.categories)
      return {
        ...state,
        ...action.categories,
      }
    case ADD_CATEGORIE:
      console.log('add categorie', action.categorie)
      return {
        ...state,
        categories: action.categorie,
      }
    case UPDATE_CATEGORIE:
      console.log('update categorie', action.categorie)
      return {
        ...state,
      }
    case REMOVE_CATEGORIE:
      console.log('remove categorie - turn to true delete field', action.categorie)
      return {
        ...state,
      }
    case ADD_CATEGORIE_ERROR:
      console.log('add Error', action.error)
      return state
    case LIKE_CATEGORIE:
      console.log('like categorie', action.id)
      return state
    default: return state
  }
}
