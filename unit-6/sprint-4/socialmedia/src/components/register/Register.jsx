import React from "react";
import "./register.css";

export const Register = () => {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Lamasocial</h3>
          <span className="logindesc">Register credentials</span>
        </div>
        <div className="loginright">
          <div className="loginbox">
          <input placeholder="username" className="logininput" />
            <input placeholder="email" className="logininput" />
            <input placeholder="password" className="logininput" />
            <input placeholder="password again" className="logininput" />
            <button className="loginbutton">Sign Up</button>
            <span className="loginforgot">Forgot Password</span>
            <button className="registerbutton"> LogIn to your account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
