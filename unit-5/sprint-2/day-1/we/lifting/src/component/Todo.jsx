import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./Todoitem";

export const Todo =()=>{
    const [todos,setTodos]=useState([]);
    const addtodo=(text)=>{
        setTodos([...todos,text]);
    }
    
    return(
        <div>
        <Todoinput  addtodo={addtodo}/>
        {todos.map((e)=>( <Todoitem todo={e}/>)
           
        )}

        </div>
    )
}