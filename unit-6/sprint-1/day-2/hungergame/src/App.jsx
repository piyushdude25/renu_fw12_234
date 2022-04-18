import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Restaurantdetails } from "./components/Restaurantdetails";
import { Allroutes } from "./components/Allroutes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>............HUNGER GAME..............</h2>
      <Allroutes />
    </div>
  );
}

export default App;
