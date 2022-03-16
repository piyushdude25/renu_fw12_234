import {  useParams } from "react-router-dom"
export const ProductDetails=()=>{
    const {id}=useParams();
    return <div><h1>Products name is :{id}</h1></div>
}