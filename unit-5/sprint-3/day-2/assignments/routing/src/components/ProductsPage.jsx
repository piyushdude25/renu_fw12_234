import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const ProductsPage = () => {
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
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {product.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
              justifyContent: "space-evenly",
              width: "500px",
              margin: "auto",
              paddingTop: "10px",
            }}
          key={el.id} >
            <div className="name">{el.name}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      })}
    </>
  );
};