import { useState } from 'react'
import { Todo } from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h3>todo list using useeffect</h3>
     <hr/>
     <Todo/>
    </div>
  )
}

export default App
