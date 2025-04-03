import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { ReactElement } from "react";

const ProtectedRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return null;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
