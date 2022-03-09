import { useEffect } from "react";
import { useState } from "react";

export const Stopwatch=()=>{
    const [timer,setTimer]=useState(10);
    useEffect(()=>{
    const id=    setInterval(()=>{
            setTimer((prev)=>{
                return prev-1;
            })
            
        },1000);
        return()=>{
            clearInterval(id);
        };
    
    },[]);
   
    
    return <div>Timer:{timer}</div>

}