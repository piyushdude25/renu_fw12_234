import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const HomePage = () => {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    axios.get(" http://localhost:3001/products").then((response)=>{
      console.log("response",response.data);
      setProduct([...response.data]);

    })
    console.log("product",product)

  },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {product.map((el) => {
          return <Link to={`/products/${el.id}`} key={el.id}><div className="showdata"><div><img src={el.img}></img></div><div>{el.name}</div></div></Link>;
        })}
      </div>
    </>
  );
};