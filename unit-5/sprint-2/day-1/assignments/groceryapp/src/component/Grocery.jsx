import { useState } from "react";
import { Groceryinput } from "./Groceryinput";
import { Grocerylist } from "./Grocerylist";
import { nanoid } from "nanoid";

export const Grocery =()=>{
    const [todos,setTodos]=useState([]);
    const[temp,setTemp]=useState([]);
    const addtodo=(text)=>{
        const t={
            id:nanoid(),
            title:text,
            status:"false"
        };
        setTodos([...todos,t]);
    }
    const deleteitem=(id)=>{
        console.log(id)
       
     
        setTodos((todos)=>{
            return todos.filter((arrele,index)=>{
                return index!==id;
            })
        })
          
          
       
    }
       
    
    
    return(
        <div>
        <Groceryinput addtodo={addtodo}/>
        {todos.map((e,i)=>( <Grocerylist todo={e} key={i} id={i}  onSelect={deleteitem} />)
           
        )}

        </div>
    )
}