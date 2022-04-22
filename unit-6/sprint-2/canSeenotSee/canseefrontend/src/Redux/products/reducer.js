import {
  GET_PRODUCTS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
} from "./action";
const init = {
  loading: true,
  products: [],
  error: false,
};
const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...store,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...store,
        loading: false,
        products: [...payload],
        error: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
