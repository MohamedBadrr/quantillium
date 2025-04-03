import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { ReactElement } from "react";

const PublicRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return null;
  }

  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
