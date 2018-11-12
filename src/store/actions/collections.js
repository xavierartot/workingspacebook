export const ADD_COLLECTION = 'ADD_COLLECTION'
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION'
export const RECEIVES_COLLECTIONS = 'RECEIVES_COLLECTIONS'
export const LIKE_COLLECTION = 'LIKE_COLLECTION'
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION'
export const ADD_COLLECTION_ERROR = 'ADD_COLLECTION_ERROR'

export function recieveCollections(collections) {
  return {
    type: RECEIVES_COLLECTIONS,
    collections,
  }
}
export function addCollection(collection) {
  return {
    type: ADD_COLLECTION,
    collection,
  }
}
export function removeCollection(collection) {
  return {
    type: REMOVE_COLLECTION,
    collection,
  }
}
export function updateCollection(collection) {
  return {
    type: UPDATE_COLLECTION,
    collection,
  }
}
export function likeCollection(id) {
  return {
    type: LIKE_COLLECTION,
    id,
  }
}
export function addCollectionError(error) {
  return {
    type: ADD_COLLECTION_ERROR,
    error,
  }
}

