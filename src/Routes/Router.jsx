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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import ProductDetails from "../Pages/Products/ProductDetails";
import { getProduct } from "../api/product";

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
      {
        path: 'product/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => getProduct(params.id),
      }
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
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
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <ProductReviewQueue></ProductReviewQueue>
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "reported-contents",
        element: (
          <PrivateRoute>
            <ModeratorRoute>
              <ReportedContents></ReportedContents>
            </ModeratorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "statistics-page",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Statistics></Statistics>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCoupons></ManageCoupons>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

export default router;
