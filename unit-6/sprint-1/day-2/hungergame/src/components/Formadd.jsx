import { useState } from "react";

export const Formadd = ({ sendformdata }) => {
  const data = {
    name: "",
    category: "",
    price: "",
    payment: "",
    vote: "",
    review: "",
  };
  const [formdata, setFormdata] = useState(data);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleformdata = (e) => {
    e.preventDefault();
    sendformdata(formdata);
  };
  // console.log(formdata);
  return (
    <>
      <form onSubmit={handleformdata}>
        <input
          type="text"
          placeholder="resturant name"
          name="name"
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          onChange={handlechange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handlechange}
        />
        <select name="payment" id="" onChange={handlechange}>
          <option value="card">card</option>
          <option value="cash">cash</option>
          <option value="card & cash">card & cash both</option>
        </select>
        <input
          type="number"
          placeholder="vote"
          name="vote"
          onChange={handlechange}
        />
        <input
          type="number"
          placeholder="reviews"
          name="review"
          onChange={handlechange}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
