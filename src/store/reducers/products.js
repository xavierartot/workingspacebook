import { ADD_PRODUCT, RECEIVES_PRODUCTS } from '../actions/product'
import { initStateProducts } from './initState'

export default function product(state = initStateProducts, action) {
  switch (action.type) {
    case RECEIVES_PRODUCTS:
      return {
        ...state,
        ...action.products,
      }
    case ADD_PRODUCT:
      return {
        ...state,
        ...action.product,
      }
    default: return state
  }
}
