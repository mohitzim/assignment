import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

function configureStore(state = { bgColor: "black", activeColor: "info", cartCount: 0, cartProducts: []}) {
  return createStore(rootReducer,state);
}
export default configureStore;