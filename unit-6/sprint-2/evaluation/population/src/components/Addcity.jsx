import { useContext } from "react";
import { AddcontryContext } from "../context/AddcountryContext";
export const Addcity = () => {
  const { city, country, population, dispatch, handlesubmit } =
    useContext(AddcontryContext);
  return (
    <div>
      <div>
        <h1>.............ADD CITY................</h1>
        <hr />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="enter city"
          onChange={(e) => {
            dispatch({ type: "CHANGE_CITY", payload: e.target.value });
          }}
        />
        <input
          type="text"
          name="country"
          value={country}
          placeholder="enter country"
          onChange={(e) => {
            dispatch({ type: "CHANGE_COUNTRY", payload: e.target.value });
          }}
        />
        <input
          type="text"
          name="population"
          value={population}
          placeholder="enter population"
          onChange={(e) => {
            dispatch({ type: "CHANGE_POPULATION", payload: e.target.value });
          }}
        />
        <button onClick={handlesubmit}>submit</button>
      </div>
    </div>
  );
};
