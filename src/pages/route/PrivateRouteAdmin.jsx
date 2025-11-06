import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteAdmin = ({ role }) => {
    const isAdmin = role === 'admin';
    return isAdmin ? <Outlet /> : <Navigate to="/products" />;
};