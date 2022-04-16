import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Addcity } from "./components/Addcity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addcity" element={<Addcity />}></Route>
      </Routes>
    </div>
  );
}

export default App;
