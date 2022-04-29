import React, { useContext } from "react";
import { useRef } from "react";
import "./login.css";
import { logincall } from "../Apicalls";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleclick = (e) => {
    e.preventDefault();
    // console.log(email.current.value, password.current.value);
    logincall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Lamasocial</h3>
          <span className="logindesc">login credentials</span>
        </div>
        <div className="loginright">
          <form className="loginbox" onSubmit={handleclick}>
            <input
              placeholder="email"
              className="logininput"
              ref={email}
              required
            />
            <input
              placeholder="password"
              className="logininput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginbutton">Log In</button>
            <span className="loginforgot">Forgot Password</span>
            <button className="registerbutton"> Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
