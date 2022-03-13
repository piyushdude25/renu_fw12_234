import { useState } from 'react'
import { Timer } from './components/Timer';
import './App.css'


function App() {
  
  

  return (
    <div className="App">
     <h4>timer using useEffect2</h4>
     <hr/>
     <Timer start="0" end="6"/>
    </div>
  )
}

export default App
