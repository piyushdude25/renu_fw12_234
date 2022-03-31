import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Addtodo } from "./components/Addtodo";

function App() {
  // const [count, setCount] = useState(20);

  return (
    <div className="App">
      <h1>TODO LIST </h1>
      <Addtodo />
    </div>
  );
}

export default App;
