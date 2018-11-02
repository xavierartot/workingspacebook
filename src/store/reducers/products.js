import { REMOVE_PRODUCT, UPDATE_PRODUCT, LIKE_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT, RECEIVES_PRODUCTS } from '../actions/product'
// import { initStateProducts } from './initState'

export default function products(state = {}, action) {
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
    case UPDATE_PRODUCT:
      console.log('update Product', action.product)
      return {
        ...state,
      }
    case REMOVE_PRODUCT:
      console.log('remove Product - turn to true delete field', action.product)
      return {
        ...state,
      }
    case ADD_PRODUCT_ERROR:
      console.log('add Error', action.error)
      return state
    case LIKE_PRODUCT:
      console.log('like product', action.id)
      return state
    default: return state
  }
}
