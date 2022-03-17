import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const ProductsDetailsPage = () => {
  const[product,setProduct]=useState([]);

 const {id}=useParams();
 useEffect(()=>{
   axios.get(`http://localhost:3001/products/${id}`).then((response)=>{
     console.log(response.data)
     setProduct(...[response.data])
   })
 },[])
 console.log("product",product)
    return (
      <>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <img src={product.img} alt="" />
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              {/* Show Product specification here */}
            </div>
          </div>
        </div>
      </>
    );
  };