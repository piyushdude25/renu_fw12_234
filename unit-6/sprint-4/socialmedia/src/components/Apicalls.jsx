import axios from "axios";
export const logincall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/user/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
