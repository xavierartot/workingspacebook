import { REMOVE_COLLECTION, UPDATE_COLLECTION, LIKE_COLLECTION, ADD_COLLECTION_ERROR, ADD_COLLECTION, RECEIVES_COLLECTIONS } from '../actions/collections'
// import { initStateCollections } from './initState'

// import reject from 'lodash/reject'

export default function collections(state = {}, action) {
  // const { id } = action// declaration to increment and decrement
  switch (action.type) {
    case ADD_COLLECTION:
      // const size = Object.keys(state).length
      return {
        ...state,
        // [size]: { ...action.collection },
      }
    case RECEIVES_COLLECTIONS:
      console.log('receive collections', action)
      return {
        ...state,
        ...action.collections,
      }
    case UPDATE_COLLECTION:
      console.log('update collection', action.collection)
      return {
        ...state,
      }
    case REMOVE_COLLECTION:
      console.log('remove collection - turn to true delete field', action.collection)
      return {
        ...state,
      }
    case ADD_COLLECTION_ERROR:
      console.log('add Error', action.error)
      return state
    case LIKE_COLLECTION:
      console.log('like collection', action.id)
      return state
    default: return state
  }
}
