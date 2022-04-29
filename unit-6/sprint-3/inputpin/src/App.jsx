import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PinInput from "react-pin-input";
import useRef from "react";

function App() {
  const [state, setState] = useState();

  const onChange = (value) => {
    setState(value);
  };

  const onClear = () => {
    setState("");
    pin.clear();
  };
  return (
    <div className="App">
      <div className="app">
        <PinInput
          length={5}
          focus
          // disabled
          secret
          ref={(p) => (pin = p)}
          type="numeric"
          onChange={onChange}
        />
        <div>{state}</div>
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
