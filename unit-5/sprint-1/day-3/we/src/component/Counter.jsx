import { useState } from "react";
export function Counter() {
  // console.log(props.count);
  const [counter, setCounter] = useState(0);
  const handle = (value) => {
    setCounter(counter + value);
  };
  return (
    <div>
      <h2>counter:{counter}</h2>
      <button
        onClick={() => {
          handle(1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handle(-1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Reset
      </button>
    </div>
  );
}
