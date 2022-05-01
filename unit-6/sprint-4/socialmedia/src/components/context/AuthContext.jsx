import { createContext } from "react";
import { useReducer } from "react";
import {AuthReducer} from './AuthReducer';
const init = {
  user: null,
  isFetching: false,
  error: false,
};
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, init);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
