import { useEffect, useState } from "react"
import axios from "axios";
export const Todo=()=>{
    const[text,setText]=useState("");
    const[todo,setTodo]=useState([]);
    console.log(text)
   useEffect(()=>{
        getData();
    },[])
    const getData=()=>{
        axios.get(`http://localhost:3004/todolist`).then((res)=>{
            setTodo(res.data);
        })

    }
    const deleteitem=(i,itemid)=>{
        console.log(i,itemid)

    }
    console.log(todo)
    return(<div>
        <input type={text} onChange={(e)=>{
        setText (e.target.value)   }}></input>
       <button onClick={()=>{
        fetch("http://localhost:3004/todolist",{method:"POST",
        body:JSON.stringify({title:text,purchased:false}),
        headers:{"content-type":"application/json",}
    }).then(()=>{
        getData();
    });
    }}> save button</button>
    {todo.map((e,i)=>(
        <div> "title"-{e.title} "id":-{e.id} <button onClick={()=>{
            deleteitem(i,e.id);
        }}>Delete</button></div>

    ))}
    </div>)
}