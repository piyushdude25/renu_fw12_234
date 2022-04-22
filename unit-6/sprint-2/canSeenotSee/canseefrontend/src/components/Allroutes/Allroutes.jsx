import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "../Login";
import { Signup } from "../Signup";
export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};
