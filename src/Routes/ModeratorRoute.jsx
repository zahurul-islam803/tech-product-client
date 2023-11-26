/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loader from "../Shared/Loader";

const ModeratorRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loader></Loader>;
  if (role === "moderator") return children;
  return <Navigate to={"/dashboard"}></Navigate>;
};

export default ModeratorRoute;
