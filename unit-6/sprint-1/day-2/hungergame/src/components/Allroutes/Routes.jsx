import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Formadd } from "../Formadd";
import { Showrestaurant } from "../Showrestaurant";
export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Formadd />}></Route>
        <Route path="/get-restaurants" element={<Showrestaurant />}></Route>
      </Routes>
    </>
  );
};
