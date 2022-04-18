import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Formadd } from "./Formadd";

export const Restaurantdetails = () => {
  const sendformdata = async (data) => {
    //console.log(data);

    await axios
      .post("http://localhost:8080/restaurants", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="showdata">
      <Formadd sendformdata={sendformdata} />
    </div>
  );
};
