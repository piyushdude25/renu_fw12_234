import { useEffect, useState } from "react"
import axios from "axios";

export const Groceries=()=>{
    const [t1,setT1]=useState("");
    const [groceries,setGroceries]=useState([]);
    const [page,setPage]=useState(1);
  /* useEffect(()=>{
      axios.get("http://localhost:3001/groceries").then((res)=>{
          setGroceries(res.data);
      })

    })*/
    useEffect(()=>{
        getData();
    },[page])
    const getData=()=>{
        axios.get(`http://localhost:3003/groceries?_limit=3 &_page=${page}`).then((res)=>{
            setGroceries(res.data);
        })
    }
    console.log(groceries);
    return <div><input type="text" onChange={(e)=>{setT1(e.target.value)}}></input>
    <button onClick={()=>{
        fetch("http://localhost:3003/groceries",{method:"POST",
        body:JSON.stringify({title:t1,purchased:false}),
        headers:{"content-type":"application/json",}
    }).then(()=>{
        getData();
    });
    }}> save grocery</button>
  <div>  <button onClick={()=>{
      setPage(page-1);
  }}>prev</button>
    <button onClick={()=>{
      setPage(page+1);
  }}>next</button></div>
     {groceries.map((g)=>(<div key={g.id}>{g.title}</div>)
       
   )} 
    
    </div>
  


}