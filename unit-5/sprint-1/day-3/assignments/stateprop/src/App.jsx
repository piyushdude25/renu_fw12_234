import "./App.css";
import { Counter } from "./component/Counter";
import {Add} from "./component/Add";

function App() {
  const count = 0;
  return (
    <div className="App">
      <Counter count={count} />
      <Add/>
    </div>
  );
}

export default App;
