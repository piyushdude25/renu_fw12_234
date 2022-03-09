import { useEffect, useState } from "react"
import axios from "axios";
export const Todo=()=>{
    const[text,setText]=useState("");
    const[todo,setTodo]=useState([]);
    const [page,setPage]=useState(1);
    console.log(text)
   useEffect(()=>{
        getData();
    },[page])
    const getData=()=>{
        axios.get(`http://localhost:3004/todolist?_limit=3 &_page=${page}`).then((res)=>{
            setTodo(res.data);
        })

    }
    const deleteitem=(index)=>{
        //console.log(i,itemid)
        setTodo((todo)=>{
          return  todo.filter((ele,i)=>{
                return index!=i;
            })

        })

    }
    console.log(todo)
    return(<div className="main">
      <div className="inputcolor">  <input type={text} onChange={(e)=>{
        setText (e.target.value)   }}></input>
       <button onClick={()=>{
        fetch("http://localhost:3004/todolist",{method:"POST",
        body:JSON.stringify({title:text,purchased:false}),
        headers:{"content-type":"application/json",}
    }).then(()=>{
        getData();
    });
    }}> save button</button></div>
    {todo.map((e,i)=>(
        <div className="listclass"> "title"-{e.title} key={i} id={i} <button onClick={()=>{
            deleteitem(i);
        }}>Delete</button></div>

    ))}
    <button onClick={()=>{setPage(page-1)}}>PREV</button>
    <button onClick={()=>{setPage(page+1)}}>NEXT</button>
    </div>)
}