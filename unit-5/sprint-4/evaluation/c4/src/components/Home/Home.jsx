import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState("");
  const [products, setProducts] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("http://localhost:8080/meetups").then((data) => {
      setProducts([...data.data]);
      console.log(data.data);
    });
  }, []);
  console.log("products", products);

  return (
    <div className="homeContainer">
      <h3>Meetup place......</h3>
      {products
        .filter((el) => {
          el.theme === data;
          console.log("el", el.theme);
          console.log("el", data);
        }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
              <div>
                <img src={el.image}></img>
              </div>
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={data} // add value here
            onChange={(e) => {
              setData(e.target.value);
            }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {products.map((el) => {
            return (
              <div className="productdiv">
                <Link
                  to={`/productdetails/${el.id}`}
                  className="events"
                  key={el.id}
                >
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                  <div>
                    <div>
                      <img src={el.image}></img>
                    </div>
                    <div>{el.theme}</div>
                    <div>{el.title}</div>
                    <div>{el.location}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
