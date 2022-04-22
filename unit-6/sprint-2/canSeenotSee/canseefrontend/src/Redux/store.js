import { combinedReducers } from "redux";
import createStore from "redux";
import { loginReducer } from "./login/reducer";
import { productReducers } from "./products/reducer";
const rootReducer = combinedReducers({
  login: loginReducer,
  product: productReducer,
});
export const store = createStore(rootReducer);
