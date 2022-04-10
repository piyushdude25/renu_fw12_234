import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Onne } from "./components/Forms1";
import { Two } from "./components/Form2";
import { Allusers } from "./components/Allusers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/registration/one" element={<Onne />}></Route>
        <Route path="/registration/two" element={<Two />}></Route>
        <Route path="/users" element={<Allusers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
