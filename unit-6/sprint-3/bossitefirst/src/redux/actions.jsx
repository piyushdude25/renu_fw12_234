export const SORT_COST = "SORT_COST";
export const SORT_CITY = "SORT_CITY";
export const SORT_RATING = "SORT_RATING";
export const SORT_VERIFIED = "SORT_VERIFIED";
export const FETCH_DATA = "FETCH_DATA";

//action creators
export const sortcost = (data) => {
  return {
    type: SORT_COST,
    payload: data,
  };
};

export const sortcity = (data) => {
  return {
    type: SORT_CITY,
    payload: data,
  };
};

export const sortrating = (data) => {
  return {
    type: SORT_RATING,
    payload: data,
  };
};

export const sortverified = (data) => {
  return {
    type: SORT_VERIFIED,
    payload: data,
  };
};

export const fetchdata = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};
