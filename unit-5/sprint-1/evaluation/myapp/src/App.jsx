


import './App.css';
import { useState } from 'react';

function App() {
  const [book,setBook]=useState(13);
  const [inkpen,setInkpen]=useState(78);
  const [notebook,setNotebook]=useState(44);
  const [pen,setPen]=useState(10);
  const [total,setTotal]=useState();
  const handlepositive=(item)=>{
if(item==="book"){
  setBook(book+1);
}
if(item==="inkpen"){
  setInkpen(inkpen+1);
}
if(item==="notebook"){
  setNotebook(notebook+1);
}
if(item==="pen"){
  setPen(pen+1);
}
  }
  const handlenegative=(item)=>{
    if(item==="book"){
      setBook(book-1);
    }
    if(item==="inkpen"){
      setInkpen(inkpen-1);
    }
    if(item==="notebook"){
      setNotebook(notebook-1);
    }
    if(item==="pen"){
      setPen(pen-1);
    }
      }
  return (
    <div className="App">
      <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={()=>{handlepositive("book")}}>
        +
    </button>
    <button className="remBook" onClick={()=>{handlenegative("book")}}>
        -
    </button>
    <span className="totalBooks">{book}</span>
</div>

<div className="items">
    <span>Inkpens:</span>
    <button className="addInkpen" onClick={()=>{handlepositive("inkpen")}}>
        +
    </button>
    <button className="remInkpen" onClick={()=>{handlenegative("inkpen")}}>
        -
    </button>
    <span className="totalInkpens">{inkpen}</span>
</div>
<div className="items">
    <span>Notebooks:</span>
    <button className="addNotebook" onClick={()=>{handlepositive("notebook")}}>
        +
    </button>
    <button className="remNotebook" onClick={()=>{handlenegative("notebook")}}>
        -
    </button>
    <span className="totalNotebook">{notebook}</span>
</div>
<div className="items">
    <span>Pens:</span>
    <button className="addPen" onClick={()=>{handlepositive("pen")}}>
        +
    </button>
    <button className="remPen" onClick={()=>{handlenegative("pen")}}>
        -
    </button>
    <span className="totalPens">{pen}</span>
</div>
<div className='total'>total:{book+inkpen+notebook+pen}</div>
     
    </div>
  );
}

export default App;
