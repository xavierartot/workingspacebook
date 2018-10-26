export const ADD_COLLECTION = 'ADD_COLLECTION'
export const RECEIVES_COLLECTIONS = 'RECEIVES_COLLECTIONS'

export function recieveCollection(collections) {
  return {
    type: RECEIVES_COLLECTIONS,
    collections,
  }
}

export function addcollection(collection) {
  return {
    type: ADD_COLLECTION,
    collection,
  }
}
