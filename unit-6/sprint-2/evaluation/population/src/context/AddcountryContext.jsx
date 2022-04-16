import axios from "axios";
import { createContext } from "react";
import { useReducer } from "react";
const init = {
  city: "",
  country: "",
  population: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return { ...state, city: action.payload };
    case "CHANGE_COUNTRY":
      return { ...state, country: action.payload };
    case "CHANGE_POPULATION":
      return { ...state, population: action.payload };
    default:
      return state;
  }
};
export const AddcontryContext = createContext();
export const AddcontryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const { city, country, population } = state;
  const handlesubmit = () => {
    postdata();
  };
  const postdata = () => {
    axios.post("http://localhost:8080/city", state);
  };
  return (
    <AddcontryContext.Provider
      value={{ city, country, population, dispatch, handlesubmit }}
    >
      {children}
    </AddcontryContext.Provider>
  );
};
