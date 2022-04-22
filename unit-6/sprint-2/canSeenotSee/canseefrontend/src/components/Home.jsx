import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { token, isAuthenticate } = useSelector((state) => {
    state.login;
  });
  if (!isAuthenticate) {
    return <Navigate to="/login"></Navigate>;
  }
  return (
    <div>
      <Navigate to="/">home</Navigate>
    </div>
  );
};
