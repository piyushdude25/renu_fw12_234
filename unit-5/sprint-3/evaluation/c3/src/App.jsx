//import { AllRoutes } from './Routes/Routesall';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { BookDetailsPage } from "./components/BookDetailsPage/BookDetailsPage";
import { NotFound } from './components/NotFound/NotFound';



import './App.css'

function App() {
  return (
    <div className="App">
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/books" element={<Home/>}></Route>
        <Route path="/books/:id" element={<BookDetailsPage/>}></Route>
        <Route component={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;