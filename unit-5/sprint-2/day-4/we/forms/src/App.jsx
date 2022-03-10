import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Forms } from './components/Forms'

function App() {
  const [count, setCount] = useState(0)
  const showdouble=()=>{
    console.log("hello double clicked")
  }
  const changecolor=()=>{
    
  }

  return (
    <div className="App">
     <h3>forms in react</h3>
     <hr/>
     <Forms/>
    
    </div>
  )
}

export default App
