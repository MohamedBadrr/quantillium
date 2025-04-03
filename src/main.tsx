import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.tsx";
import Preloader from "./components/Common/Preloader.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner.tsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Preloader />
      <AppRouter />
    </QueryClientProvider>
  </>
);
