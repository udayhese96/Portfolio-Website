
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

// Simple protected route component that checks localStorage
const AdminRoute = ({ children }: { children: ReactNode }) => {
  const isAdmin = localStorage.getItem("isAdminLoggedIn") === "true";
  
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  
  return <>{children}</>;
};

export default AdminRoute;
