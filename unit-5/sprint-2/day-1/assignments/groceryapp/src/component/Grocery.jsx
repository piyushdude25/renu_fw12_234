import { useState } from "react";
import { Groceryinput } from "./Groceryinput";
import { Grocerylist } from "./Grocerylist";

export const Grocery =()=>{
    const [todos,setTodos]=useState([]);
    const addtodo=(text)=>{
        setTodos([...todos,text]);
    }
    
    return(
        <div>
        <Groceryinput addtodo={addtodo}/>
        {todos.map((e)=>( <Grocerylist todo={e}/>)
           
        )}

        </div>
    )
}