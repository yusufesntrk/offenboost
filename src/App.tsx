import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Termin from "./pages/Termin";
import Leistungen from "./pages/Leistungen";
import UeberUns from "./pages/UeberUns";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "/termin", element: <Termin /> },
    { path: "/leistungen", element: <Leistungen /> },
    { path: "/ueber-uns", element: <UeberUns /> },
    { path: "/casestudies", element: <CaseStudies /> },
    { path: "/impressum", element: <Impressum /> },
    { path: "/datenschutz", element: <Datenschutz /> },
    { path: "/agb", element: <AGB /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
