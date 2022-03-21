import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((response)=>{
      console.log(response.data)
      setProducts([...response.data]);
    })
  },[])
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {products.map((e)=>{
          return(
          <Link to={`/books/${e.id}`} key={e.id}><div className="card">
            <div className="pic">< img src={e.imageUrl}></img></div>
            <div className="name">{e.title}</div>
          </div>
          </Link>
          )
        })}
      </Main>
    </div>
  );
};