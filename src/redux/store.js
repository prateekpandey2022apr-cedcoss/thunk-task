import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer } from "./cakeReducer";
import { chocReducer } from "./chocReducer";
import { iceCreamReducer } from "./iceCreamReducer";
import userReducer from "./userReducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  choc: chocReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
