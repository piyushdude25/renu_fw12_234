import { createStore } from "redux";
import { sortingReducers } from "./reducers";
//import { cityReducers } from "./reducers";
import { combineReducers } from "redux";
const rootReducers = combineReducers({ sortingReducers });

export const store = createStore(
  rootReducers,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
