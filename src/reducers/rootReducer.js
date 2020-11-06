const rootReducer = (state, action) => {
  switch (action.type) {
    case "bgChange":
      return {
        ...state,
        bgColor: action.payload
      };
    case "colorChange":
      return {
        ...state,
        activeColor: action.payload
      };
    case "cartCountChange":
      return {
        ...state,
        cartCount: action.payload
      };
    case "cartProductAdd":
      return {
        ...state,
        cartProducts: action.payload
      };    
    default:
      return state;
  }
}
export default rootReducer;
/*
export default (state, action) => {
  switch (action.type) {
    case "bgChange":
      return {
        ...state,
        bgColor: action.payload
      };
    case "colorChange":
      return {
        ...state,
        activeColor: action.payload
      };
    default:
      return state;
  }
};*/