/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loader from "../Shared/Loader";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loader></Loader>;
  if (role === "admin") return children;
  return <Navigate to={"/dashboard"}></Navigate>;
};

export default AdminRoute;
