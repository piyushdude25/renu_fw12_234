import { SORT_COST } from "./actions";
import { SORT_CITY } from "./actions";
import { SORT_RATING } from "./actions";
import { SORT_VERIFIED } from "./actions";
import { FETCH_DATA } from "./actions";

const init = {
  cost: "",
  city: "",
  rating: "",
  verified: "",
};

export const sortingReducers = (state = init, action) => {
  switch (action.type) {
    case SORT_COST:
      return {
        ...state,
        cost: action.payload,
      };
    case SORT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SORT_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    case SORT_VERIFIED:
      return {
        ...state,
        verified: action.payload,
      };
    default:
      return state;
  }
};
const citydetails = {
  citywisedetails: [],
};

/*export const cityReducers = (state = citydetails, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        citywisedetails: [...state.citywisedetails, action.payload],
      };
    default:
      return state;
  }
};*/
