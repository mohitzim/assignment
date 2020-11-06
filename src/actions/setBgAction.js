const setBgAction = (payload) => {
  console.log('setBgAction...', payload);
  return {
    type: "bgChange",
    payload
  }
}
export default setBgAction;