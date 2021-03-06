export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const RECEIVES_PRODUCTS = 'RECEIVES_PRODUCTS'
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR'
export const LIKE_PRODUCT = 'LIKE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  }
}
export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    product,
  }
}
export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}
export function recieveProducts(products) {
  return {
    type: RECEIVES_PRODUCTS,
    products,
  }
}
export function addProductError(error) {
  return {
    type: ADD_PRODUCT_ERROR,
    error,
  }
}
export function likeProduct(id) {
  return {
    type: LIKE_PRODUCT,
    id,
  }
}
