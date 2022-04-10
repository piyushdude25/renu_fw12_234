import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [toggleAuth, settoggleAuth] = useState(false);
  return <AuthContext.provider>{children}</AuthContext.provider>;
};
