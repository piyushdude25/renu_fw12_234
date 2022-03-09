import { useState } from 'react'
import { Stopwatch } from './components/Stopwatch'
import './App.css'

function App() {
  const [show,setshow]=useState(true);
  

  return (
    <div className="App">
 {show?<Stopwatch/>:null} 
 <button onClick={()=>{
   setshow(show?false:true);
 }}>{show?"hide timer":"show"} </button>
    </div>
  )
}

export default App
