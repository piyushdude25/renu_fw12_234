import { useState } from "react";
export function Counter(props) {
  console.log(props.count);
  const [counter, setCounter] = useState(props.count);
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
        Double
      </button>
    </div>
  );
}
