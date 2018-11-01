export const ADD_CATEGORIE = 'ADD_CATEGORIE'
export const UPDATE_CATEGORIE = 'UPDATE_CATEGORIE'
export const RECEIVES_CATEGORIES = 'RECEIVES_CATEGORIES'
export const ADD_CATEGORIE_ERROR = 'ADD_CATEGORIE_ERROR'
export const LIKE_CATEGORIE = 'LIKE_CATEGORIE'
export const REMOVE_CATEGORIE = 'REMOVE_CATEGORIE'

export function recieveCategories(categories) {
  return {
    type: RECEIVES_CATEGORIES,
    categories,
  }
}
export function addCategorieError(error) {
  return {
    type: ADD_CATEGORIE_ERROR,
    error,
  }
}
export function addCategorie(categorie) {
  return {
    type: ADD_CATEGORIE,
    categorie,
  }
}
export function removeCategorie(categorie) {
  return {
    type: REMOVE_CATEGORIE,
    categorie,
  }
}
export function updateCategorie(categorie) {
  return {
    type: UPDATE_CATEGORIE,
    categorie,
  }
}
export function likeCategorie(id) {
  return {
    type: LIKE_CATEGORIE,
    id,
  }
}
