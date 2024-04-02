import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/home/About";
import Home from "../pages/home/Home";
import OurWorks from "../pages/home/OurWorks";
// import Register from "../pages/Register";
import Login from "../pages/Loging";
import AllDemos from "../pages/dashboard/AllDemos";
import AllUsers from "../pages/dashboard/AllUsers";
import OwnerDashboard from "../pages/dashboard/OwnerDashboard";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/ourWorks",
        element: <OurWorks />,
      },
      {
        path: "owner_dashboard",
        element: <OwnerDashboard />,
        children: [
          {
            path: "allDemos",
            element: <AllDemos />,
          },
          {
            path: "allUsers",
            element: <AllUsers />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);

export default router;
