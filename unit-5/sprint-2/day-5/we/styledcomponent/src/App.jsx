import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [theme,setTheme]=useState("red");

 

  return (
    <div className="App">
      <h4>styled components</h4>
      <hr/>
      <Button theme={theme} onClick={()=>{
        console.log("one")
      }}>ONE</Button>
      <Button  onClick={()=>{
        console.log("two")
      }}>TWO</Button>
      <Button  onClick={()=>{
        console.log("three")
      }}>THREE</Button>
   </div>
  )
}

export default App
