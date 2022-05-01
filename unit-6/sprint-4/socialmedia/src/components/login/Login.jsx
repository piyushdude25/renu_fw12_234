import React, { useContext } from "react";
import { useRef } from "react";
import "./login.css";
import { logincall } from "../Apicalls";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleclick = (e) => {
    e.preventDefault();
    // console.log(email.current.value, password.current.value);
    console.log("email", email);
    console.log("pass", password);
    logincall({ email, password }, dispatch);
  };
  console.log("user", user);
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
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            <input
              placeholder="password"
              className="logininput"
              value={password}
              minLength="6"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
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
