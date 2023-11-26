import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>TechHaven | Dashboard</title>
      </Helmet>
      <Sidebar></Sidebar>
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
