import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "../utils/PrivateRoute";
import Signup from "../pages/signup/Signup";
import ErrorBoundary from "../pages/ErrorBoundary/ErrorBoundary";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorBoundary />
      
    },
    {
      path: "/signup",
      element: <Signup/>,
      errorElement: <ErrorBoundary />
      
    },
    {
      path: "/dashboard",
      errorElement: <ErrorBoundary />,
      element:(
        <PrivateRoute> 
          <Dashboard/>
          </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]);