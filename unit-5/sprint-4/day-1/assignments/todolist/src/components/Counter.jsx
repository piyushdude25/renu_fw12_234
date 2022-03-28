import { useReducer } from "react";
const initialstate = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD") {
    return state + 1;
  }
  if (action.type === "SUB") {
    return state - 1;
  }
  return state;
};

function App() {
  // const [count, setCount] = useState(20);
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <h4>Counter:{state}</h4>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        SUB
      </button>
    </div>
  );
}
