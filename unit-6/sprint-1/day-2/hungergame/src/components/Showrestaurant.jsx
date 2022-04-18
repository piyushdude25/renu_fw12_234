import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Showrestaurant = () => {
  const [resturantdata, setResturantdata] = useState([]);
  const [rating, setRating] = useState();
  const [order, setOrder] = useState();
  const [price, setPrice] = useState("price");
  const [page, setPage] = useState();
  const [payment, setPayment] = useState();

  const perPage = 4;
  const getData = async () => {
    await axios
      .get("http://localhost:8080/restaurants", {
        params: {
          _page: page,
          _limit: perPage,
          review_gte: rating,
          payment: payment,
          _order: order,
          _sort: price,
        },
      })
      .then((res) => {
        console.log(res.data);
        setResturantdata(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [rating, payment, order, page]);
  return (
    <>
      <div>
        <button onClick={() => setRating(1)}>1 rating</button>
        <button onClick={() => setRating(2)}>2 rating</button>
        <button onClick={() => setRating(3)}>3 rating</button>
        <button onClick={() => setRating(4)}>4 rating</button>
      </div>
      <div>
        <button onClick={() => setPayment("cash")}>cash</button>
        <button onClick={() => setPayment("card")}>card</button>
        <button onClick={() => setPayment("card & cash")}>cash and card</button>
      </div>
      <div>
        <button onClick={() => setOrder("asc")}>low to high cost</button>
        <button onClick={() => setOrder("desc")}>high to low</button>
      </div>
      <div>
        pagination...
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
      </div>
      <div className="showdata">
        {resturantdata.map((e) => {
          return (
            <div key={e.id} style={{ border: "1px solid black" }}>
              <div className="imgdiv">
                <img src={e.img} alt="" />
              </div>
              <div className="details" style={{ textAlign: "center" }}>
                <h3 style={{ textAlign: "center" }}>
                  <b>{e.name}</b>
                </h3>
                <p>{e.payment}</p>
                <p>{e.category}</p>
                <p>
                  <b>price:{e.price}Rs.</b>
                </p>
                <p>votings:{e.vote}</p>
                <p>
                  <b>{e.review}ratings</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
