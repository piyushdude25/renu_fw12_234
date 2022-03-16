import { Navigate, useNavigate } from "react-router-dom"

useNavigate
export const Login=()=>{
    return <div><input type="text"  placeholder="enter name"/>
    <input type="text"  placeholder="password"/>
    <button onClick={()=>{
        //auth get take
        //if (success{})
        Navigate("/");
    }}>login</button>
    </div>
}