import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistartionContext";
export const Two = () => {
  const {
    username,
    age,
    birth,
    stateName,
    address,
    pincode,
    dispatch,
    handleSubmit,
  } = useContext(RegistrationContext);
  const navigate = useNavigate();
  console.log(stateName, address, pincode);
  if (!username && !age && !birth) {
    return <Navigate to="/registration/one"></Navigate>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter your statename"
          value={stateName}
          onChange={(e) => {
            dispatch({ type: "CHANGE_STATENAME", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="enter your address"
          value={address}
          onChange={(e) => {
            dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          placeholder="enter your pin code"
          value={pincode}
          onChange={(e) => {
            dispatch({ type: "CHANGE_PINCODE", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          disabled={!stateName && !address && !pincode}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};
