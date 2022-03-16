import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import {Users} from './components/Users';
import { UsersDetails } from './components/UsersDetails';
import { Login } from './components/Login';
function App() {


  return (
    <div className="App">
      <h2>routing</h2>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/users/:userid" element={<UsersDetails/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
