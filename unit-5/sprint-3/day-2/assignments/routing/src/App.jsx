import "./App.css";
import { HomePage } from "./components/HomePage";
import { Routes ,Route} from "react-router-dom";
import {ProductsPage} from './components/ProductsPage';
import {ProductsDetailsPage} from './components/ProductsDetailsPage';
import {NotFoundPage} from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<ProductsDetailsPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
        <Route component={<NotFoundPage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;