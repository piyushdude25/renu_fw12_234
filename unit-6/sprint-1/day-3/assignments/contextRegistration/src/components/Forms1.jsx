import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RegistrationContext } from "../context/RegistartionContext";
export const Onne = () => {
  const navigate = useNavigate();
  const { username, age, birth, dispatch } = useContext(RegistrationContext);
  console.log(username, age, birth);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={username}
          onChange={(e) => {
            dispatch({ type: "CHANGE_NAME", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          placeholder="enter your age"
          value={age}
          onChange={(e) => {
            dispatch({ type: "CHANGE_AGE", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="date"
          placeholder="enter your date of birth"
          value={birth}
          onChange={(e) => {
            dispatch({ type: "CHANGE_BIRTH", payload: e.target.value });
          }}
        />
        <br />
        <button
          disabled={!username && !age && !birth}
          onClick={() => navigate("/registration/two")}
        >
          NEXT
        </button>
      </div>
      <div></div>
    </div>
  );
};
