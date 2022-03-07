//passing value to parent to child ,between siblings...
import { useState } from 'react';
import { Todo } from './component/Todo';
import './App.css';

function App() {
 // const [counter,setCounter]=useState(0);
  return (
    <div className="App">
    <Todo/>
    </div>
  );
}


export default App;
