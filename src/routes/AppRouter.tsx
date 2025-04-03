import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Error from "@/shared/Error";
import Home from "@/pages/Home";
import BlankLayout from "@/layouts/BlankLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import APiKeys from "@/pages/ApiKeys";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import HomeLocked from "@/pages/HomeLocked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home-locked",
        element: <HomeLocked />,
      },
      {
        path: "/keys",
        element: <APiKeys />,
      },
      {
        path: "/analytics-locked",
        element: <Analytics />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
