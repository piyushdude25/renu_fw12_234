import { useState } from 'react'
import { Grocery } from './component/Grocery'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Grocerry App</h1>
      <Grocery/>
     
    </div>
  )
}

export default App
