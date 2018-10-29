import { ADD_PRODUCT_ERROR, ADD_PRODUCT, RECEIVES_PRODUCTS } from '../actions/product'
import { initStateProducts } from './initState'

export default function product(state = initStateProducts, action) {
  switch (action.type) {
    case RECEIVES_PRODUCTS:
      console.log('receive Products', action.products)
      return {
        ...state,
        ...action.products,
      }
    case ADD_PRODUCT:
      console.log('add Product', action.product)
      return {
        ...state,
        products: action.product,
      }
    case ADD_PRODUCT_ERROR:
      console.log('add product Error', action.error)
      return state
    default: return state
  }
}
