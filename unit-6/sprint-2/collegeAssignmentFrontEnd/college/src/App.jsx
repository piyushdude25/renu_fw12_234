import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Allroutes } from "./components/Allroutes/Allroutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <hr />
      <Allroutes />
    </div>
  );
}

export default App;
