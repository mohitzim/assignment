const setCartCountAction = (payload) => {
  console.log('setCartCountAction...', payload);
  return {
    type: "cartCountChange",
    payload
  }
}
export default setCartCountAction;