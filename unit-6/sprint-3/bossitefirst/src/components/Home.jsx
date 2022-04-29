import React from "react";
import { sortcost } from "../redux/actions";
import { sortcity } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { fetchdata } from "../redux/actions";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { useState } from "react";
import { sortverified } from "../redux/actions";
import { sortrating } from "../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.sortingReducers);
  //console.log("storedata", storedata);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/city")
      .then((res) => {
        console.log("res", res.data);
        setData(res.data);
        dispatch(fetchdata(res.data));
      })
      .then((e) => {
        console.log(e);
      });
  }, []);
  dispatch(sortcost(1000));

  // dispatch(sortcity("hazaribagh"));
  return (
    <div>
      <div>Details</div>
      <div className="spandiv">
        <span>
          sort By cost
          <select
            name="cost"
            onChange={(e) => {
              //setVerified(e.target.value);
              console.log(e.target.value);
              dispatch(sortcost(e.target.value));
            }}
          >
            <option value="">NA</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </span>
        <span>
          veried
          <select
            name="verified"
            onChange={(e) => {
              // setCost(e.target.value);
              console.log(e.target.value);
              dispatch(sortverified(e.target.value));
            }}
          >
            <option value="">NA</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
        </span>
        <span>
          Ratings
          <select
            name="rating"
            onChange={(e) => {
              // setCost(e.target.value);
              console.log(e.target.value);
              dispatch(sortrating(e.target.value));
            }}
          >
            <option value="">NA</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </span>
        <span>
          <input
            type="text"
            placeholder="search by city"
            name="name"
            onChange={(e) => {
              //setName(e.target.value);
              console.log(e.target.value);
              dispatch(sortcity(e.target.value));
            }}
          ></input>
        </span>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>city</td>
              <td>Address</td>
              <td>capacity</td>
              <td>cost per Day</td>
              <td>verified</td>
              <td>Ratings</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.city}</td>
                  <td>{e.address}</td>
                  <td>{e.capacity}</td>
                  <td>{e.costperday}</td>
                  <td>{e.verified}</td>
                  <td>{e.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
