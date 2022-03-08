import { useState } from 'react'

import './App.css'
import { Groceries } from './components/Groceries'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>useeffect session</h1>
       <hr/>
       <Groceries/>
    </div>
  )
}

export default App
