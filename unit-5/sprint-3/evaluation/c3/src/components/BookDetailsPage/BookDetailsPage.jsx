import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NotFound } from "../NotFound/NotFound";
export const BookDetailsPage = () => {
    // Get book details based on ID whenever user lands on the page
    // ID will come from route
    const[book,setBook]=useState([]);
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8080/books/${id}`).then((response)=>{
          console.log("responese:",response.data)
          setBook(...[response.data]);
        })
      },[])
      
      console.log(id)
    return (
      <>
      {id==book.id?
        <div className="bookContainer">
          <h2 className="title">{book.title}</h2>
          <img className="image" src={book.imageUrl} alt="#" />
          <div className="author">{book.author}</div>
          <div className="description">{book.description}</div>
          <div className="price">{book.price}</div>
          <div className="section">{book.section}</div>
          <div className="isbnNumber">{book.isbnNumber}</div>
          <ul className="reviews">
            {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
            {book.reviews
            }
          </ul>
        </div>:<NotFound/>}
      </>
    );
  };