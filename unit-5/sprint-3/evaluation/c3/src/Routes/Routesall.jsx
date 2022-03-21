import { Routes, Route } from "react-router";
//import { Home } from "../Components/Home/Home";
//import { Section } from "../Components/Section/Section";
//import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
//import { NotFound } from "../Components/NotFound/NotFound";

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { BookDetailsPage } from "./components/BookDetailsPage/BookDetailsPage";



export const AllRoutes = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/books" element={<Home/>}></Route>
        <Route path="/books/:id" element={<BookDetailsPage/>}></Route>
      </Routes>
    </>
  );
};