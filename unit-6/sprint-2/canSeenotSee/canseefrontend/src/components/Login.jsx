import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {loginloading,loginsuccess,loginfailure} from '../Redux/login/action';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handlesubmit = () => {
    const userdetails = {
      useremail,
      userpassword,
    };
   // console.log(useremail, userpassword);
   dispatch(loginloading);
   axios.post("https://masai-api-mocker.herokuapp.com/auth/login",userdetails).then((res)=>{
     dispatch(loginsuccess(res.data));
     navigate("/");
   }).catch((e)=>{dispatch(loginfailure(true))})

  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter email"
        name="email"
        value={useremail}
        onChange={(e) => {
          setUseremail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="enter password"
        name="password"
        value={userpassword}
        onChange={(e) => {
          setUserpassword(e.target.value);
        }}
      ></input>
      <button onClick={handlesubmit}>login</button>
    </div>
  );
};
