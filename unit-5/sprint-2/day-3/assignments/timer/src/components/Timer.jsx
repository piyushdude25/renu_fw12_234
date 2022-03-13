import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Timer=(props)=>{
   const ref=useRef(null);
    console.log(props.start)
    const[start,setStart]=useState(+props.start);
    const[end,setEnd]=useState(+props.end);
    console.log("current",ref.current)
    useEffect(()=>{
    ref.current=    setInterval(()=>{
            setStart((p)=>{
                
              return  (p==end?clearInterval(ref.current):p+1);
            })
        },1000)

    },[])
   
   
   
   
    return <div><h4>Timer:{start}</h4>

    </div>
    
}