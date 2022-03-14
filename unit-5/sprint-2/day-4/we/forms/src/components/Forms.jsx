import { useState } from "react"
import axios from "axios";

export const Forms=()=>{
    const [formdata,setFormdata]=useState({name:"",age:""});
    const handledata=(e)=>{
        const {id,value}=e.target;
        setFormdata({...formdata,[id]:value});
     
    }
    const  handlesubmit=(e)=>{
        e.preventDefault();
        //console.log(formdata)
        axios.post("http://localhost:3001/users",formdata).then(()=>{
            alert("user created successfully");
            setFormdata({name:"",
        age:""})
        })
    }
    
    return <form onSubmit={handlesubmit}>
        <input type="text" id="name" value={formdata.name} onChange={handledata} placeholder="enter username"/>
        <input type="text" id="age" value={formdata.age} onChange={handledata} placeholder="enter age"/>
        <input type="submit" value ="send data"/>
    </form>
}