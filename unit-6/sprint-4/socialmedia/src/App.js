import "./App.css";
import { Home } from "./components/home/Home";
import { Profile } from "./components/profile/Profile";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
