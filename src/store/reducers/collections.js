import { ADD_COLLECTION, RECEIVES_COLLECTIONS } from '../actions/collections'
import { initStateCollections } from './initState'

export default function collection(state = initStateCollections, action) {
  switch (action.type) {
    case RECEIVES_COLLECTIONS:
      return {
        ...state,
        ...action.collections,
      }
    case ADD_COLLECTION:
      return {
        ...state,
        ...action.collection,
      }
    default: return state
  }
}
