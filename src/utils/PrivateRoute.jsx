import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../useHook/UserContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const accessToken = localStorage.getItem("accessToken")
    const {userData}=useContext(UserContext)
    console.log("console from line 6",accessToken,userData,userData);

    if (userData?.email && accessToken) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;