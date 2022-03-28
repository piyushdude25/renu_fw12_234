import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const ProductDetails = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/meetups/${id}`).then((data) => {
      setProducts(...[data.data]);
      console.log(data.data);
    });
  }, []);
  console.log("products", products);

  return (
    <div>
      <div>
        <img src={products.image} />
      </div>
      <div>
        <h3>{products.title}</h3>
      </div>
      <div>
        <h3>{products.theme}</h3>
      </div>
    </div>
  );
};
