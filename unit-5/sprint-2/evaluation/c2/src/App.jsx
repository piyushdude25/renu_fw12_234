import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddHouse } from './components/AddHouse';
import { Rentals } from './components/Rentals';
import axios from 'axios';

function App() {
  const [data,setData]=useState([]);
  const handleformdata=async(d)=>{
    console.log(d);
    //setData([...data,d]);
    await axios.post('http://localhost:8080/houses',d);
    getdata();


  }
  const getdata=async()=>{
    const res=await axios.get('http://localhost:8080/houses');
    setData(res.data);

  }

  return (
    <div className="App">
     <AddHouse handleformdata={handleformdata}/>
     {data.map((e)=>{
        <Rentals key={e.id} house={e}/>

     })}
    
    </div>
  )
}

export default App
