import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import authContext from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user } = useContext(authContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
