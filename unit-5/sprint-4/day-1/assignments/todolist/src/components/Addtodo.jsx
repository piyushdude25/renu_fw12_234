import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../actions/action";

export const Addtodo = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter name"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addtodo(data));
          }}
        >
          ADDTODO
        </button>
      </div>
    </>
  );
};
