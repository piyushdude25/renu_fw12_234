import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
const init = {
  username: "",
  age: "",
  birth: "",
  stateName: "",
  address: "",
  pincode: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, username: action.payload };
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    case "CHANGE_BIRTH":
      return { ...state, birth: action.payload };
    case "CHANGE_STATENAME":
      return { ...state, stateName: action.payload };
    case "CHANGE_ADDRESS":
      return { ...state, address: action.payload };
    case "CHANGE_PINCODE":
      return { ...state, pincode: action.payload };
    default:
      return state;
  }
};
export const RegistrationContext = createContext();
export const RegistrationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  const { username, age, birth, stateName, address, pincode } = state;

  const handleSubmit = () => {
    // console.log("data", username, age, address);
    postData();
  };
  const postData = () => {
    axios.post(" http://localhost:3001/regisration", state);
  };

  return (
    <RegistrationContext.Provider
      value={{
        username,
        age,
        birth,
        stateName,
        address,
        pincode,

        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
