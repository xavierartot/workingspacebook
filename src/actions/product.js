export const ADD_PRODUCT = 'ADD_PRODUCT'
export const RECEIVES_PRODUCTS = 'RECEIVES_PRODUCTS'

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  }
}
export function recieveProducts(products) {
  return {
    type: RECEIVES_PRODUCTS,
    products,
  }
}
