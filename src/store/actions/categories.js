export const ADD_CATEGORIE = 'ADD_CATEGORIE'
export const UPDATE_CATEGORIE = 'UPDATE_CATEGORIE'
export const RECEIVES_CATEGORIES = 'RECEIVES_CATEGORIES'
export const ADD_CATEGORIE_ERROR = 'ADD_CATEGORIE_ERROR'
export const LIKE_CATEGORIE = 'LIKE_CATEGORIE'
export const REMOVE_CATEGORIE = 'REMOVE_CATEGORIE'

export function addCatergorie(catergorie) {
  return {
    type: ADD_CATEGORIE,
    catergorie,
  }
}
export function removeCatergorie(catergorie) {
  return {
    type: REMOVE_CATEGORIE,
    catergorie,
  }
}
export function updateCatergorie(catergorie) {
  return {
    type: UPDATE_CATEGORIE,
    catergorie,
  }
}
export function recieveCatergories(catergories) {
  return {
    type: RECEIVES_CATEGORIES,
    catergories,
  }
}
export function addCatergorieError(error) {
  return {
    type: ADD_CATEGORIE_ERROR,
    error,
  }
}
export function likeCatergorie(id) {
  return {
    type: LIKE_CATEGORIE,
    id,
  }
}
