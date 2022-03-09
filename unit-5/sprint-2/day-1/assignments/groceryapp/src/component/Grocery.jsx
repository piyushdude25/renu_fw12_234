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
    const deleteitem=(item,i)=>{
       
        {todos.map((e,i)=>{
            console.log(e)
            if(e.id===item.id)
        {
           
         
          
          
        }
        else{()=>{
            setTemp(e);
        }
        }

        })}
        console.log(temp.length);

    }
    
    return(
        <div>
        <Groceryinput addtodo={addtodo}/>
        {todos.map((e,i)=>( <Grocerylist todo={e} key={e.id}  deleteitem={deleteitem} index={i}/>)
           
        )}

        </div>
    )
}