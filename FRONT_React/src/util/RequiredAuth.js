import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.accesstoken);

  return isAuth !== null ? children : <Navigate to="/login" replace />;
};

export default RequiredAuth;
