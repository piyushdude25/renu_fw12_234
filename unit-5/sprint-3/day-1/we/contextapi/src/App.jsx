import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Cart } from './components/navbar/Cart';
import { Button } from './components/body/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cart/>
      <Button/>
      
    </div>
  )
}

export default App
