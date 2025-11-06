import { Navigate, Outlet } from "react-router-dom";
import { validateUserSession } from "../../services/auth.service";

export const PrivateRoute = ({ email, password }) => {
    const isAuthenticated = validateUserSession(email, password);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
