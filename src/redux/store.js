import { createStore, combineReducers } from "redux";
import { cakeReducer } from "./cakeReducer";
import { chocReducer } from "./chocReducer";
import { iceCreamReducer } from "./iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  choc: chocReducer,
});

const store = createStore(rootReducer);

export default store;
