import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import OurWorks from "../pages/home/OurWorks";
import Login from "../pages/Loging";
// import Register from "../pages/Register";
import OwnerDashboard from "../pages/dashboard/OwnerDashboard";
import AllDemos from "../pages/dashboard/AllDemos";
import AllUsers from "../pages/dashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/aboutUs",
            element: <About/>,
        },
        {
            path: "/ourWorks",
            element: <OurWorks/>
        },
        {
          path:"owner_dashboard",
          element:<OwnerDashboard/>,
          children:[
            {
              path:"allDemos",
              element:<AllDemos/>,
            },
            {
              path:"allUsers",
              element:<AllUsers/>,
            },
          ]
        }
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
]);

export default router;
