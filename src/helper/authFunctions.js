import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ redirectPath = "/", children }) => {
  const token = localStorage.getItem("accessToken");

  if (token) return <Navigate to={redirectPath} />;

  return children;
}

const ProtectedRoute = ({ redirectPath = "/login", children}) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />;
}

export { PublicRoute, ProtectedRoute }