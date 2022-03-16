import "./App.css";
import { HomePage } from "./components/HomePage";
import { Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;