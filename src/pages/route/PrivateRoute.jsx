import { Navigate, Outlet } from "react-router-dom";
import { getValidUser } from "../../services/auth.service";

export const PrivateRoute = ({ email, password }) => {

    if(!email || !password) return <Navigate to="/login" />;

    const isAuthenticated = getValidUser(email, password);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
