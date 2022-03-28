import "./App.css";
//import { Routers } from "./components/Routes/Routes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ProductDetails } from "./components/AddMeetup/ProductDetails";
import { LoginSignUp } from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>

        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
