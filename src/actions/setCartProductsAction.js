const setCartProductsAction = (payload) => {
  console.log('setCartProductsAction...', payload);
  return {
    type: "cartProductAdd",
    payload
  }
}
export default setCartProductsAction;