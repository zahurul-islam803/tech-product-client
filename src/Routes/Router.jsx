import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ProductReviewQueue from "../Pages/Dashboard/ProductReviewQueue";
import ReportedContents from "../Pages/Dashboard/ReportedContents";
import Statistics from "../Pages/Dashboard/Statistics";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons";
import AddProducts from "../Pages/Dashboard/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "product-review-queue",
        element: <ProductReviewQueue></ProductReviewQueue>,
      },
      {
        path: "reported-contents",
        element: <ReportedContents></ReportedContents>,
      },
      {
        path: "statistics-page",
        element: <Statistics></Statistics>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-coupons",
        element: <ManageCoupons></ManageCoupons>,
      },
      {
        path: "add-product",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

export default router;
