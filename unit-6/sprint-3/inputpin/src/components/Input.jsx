import React from "react";
import { useState } from "react";

export const Input = () => {
  var pin_length = 4;
  var pinarray = [];
  const [pin, setPin] = useState();
  var i = 0;
  var len = pin_length.length - 1;
  const handleinput = (e) => {
    console.log(e.target.value);
    if (e.target.name == i) {
      pinarray[i] = setPin(e.target.value);
      i++;
    }
  };

  return (
    <div>
      <input type="text" onChange={handleinput} name="0" />
      <input type="text" onChange={handleinput} name="1" />
      <input type="text" onChange={handleinput} name="2" />
      <input type="text" onChange={handleinput} name="3" />
    </div>
  );
};
