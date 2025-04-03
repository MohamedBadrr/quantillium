import UnlockAnalytics from "@/components/Analytics/UnlockAnalytics";
import ProtectedRoute from "@/context/ProtectedRoute";
import { UserProvider } from "@/context/UserContext";
import Sidebar from "@/shared/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <UserProvider>
      <ProtectedRoute>
        <div className="flex flex-row items-start justify-between w-full">
          <Sidebar />

          {pathname.includes("/analytics-locked") && <UnlockAnalytics />}
          <div className="lg:w-full w-[calc(100vw-53px)] mx-auto lg:px-[46px] px-[16px] max-h-screen overflow-y-auto flex items-start justify-center relative">
            <div className="flex py-[40px] w-[1220px] max-w-full min-h-screen">
              <Outlet />
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </UserProvider>
  );
};

export default MainLayout;
