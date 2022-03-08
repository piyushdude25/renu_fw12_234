import { useEffect, useState } from "react"

export const Todo=()=>{
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(10);
    console.log("before");
    useEffect(()=>{
        console.log("insde1");

    },[])
    useEffect(()=>{
        console.log("insde2");

    },[counter2])
    console.log("after");
    return <div>todos:{counter1}
    <h4>todos:{counter2}</h4>
        <button onClick={()=>{
            setCounter1(counter1+1);
        }}>Add1</button>
         <button onClick={()=>{
            setCounter2(counter1-1);
        }}>sub</button>
    </div>
    
}