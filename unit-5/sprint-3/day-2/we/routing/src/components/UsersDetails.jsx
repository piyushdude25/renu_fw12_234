import {  useParams ,Navigate} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const UsersDetails=()=>{
    const {userid}=useParams();
    const [user,setUsers]=useState();
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${userid}`);


    },[])
    if(true)
    {
        //contextapi
        //take user to login page
        return <Navigate to={"/login"}/>;
    }
    return <div><h1>Products name is :{userid}</h1></div>
}