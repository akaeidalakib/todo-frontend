import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
//const user =JSON.parse(userData)
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const accessToken = localStorage.getItem("accessToken")

    const userData = localStorage.getItem("user")
    const user =JSON.parse(userData)
    console.log("console from line 6",accessToken,user);

    if (user?.email && accessToken) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;