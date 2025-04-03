import PublicRoute from "@/context/PublicRoute";
import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full max-w-full py-10 px-5">
      <UserProvider>
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      </UserProvider>
    </div>
  );
};

export default BlankLayout;
