import "./App.css";
import { Counter } from "./component/Counter";

function App() {
  const count = 0;
  return (
    <div className="App">
      <Counter count={count} />
    </div>
  );
}

export default App;
