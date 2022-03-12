import { useState } from 'react'
import { Timer } from './components/Timer';
import './App.css'

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(50);

  return (
    <div className="App">
     <h4>timer using useEffect2</h4>
     <hr/>
     <Timer start={start} end={end}/>
    </div>
  )
}

export default App
