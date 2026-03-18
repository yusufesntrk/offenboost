import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const Termin = lazy(() => import("./pages/Termin"));
const Leistungen = lazy(() => import("./pages/Leistungen"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load toasters - they are only needed when a toast is triggered
const Toaster = lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster }))
);
const Sonner = lazy(() =>
  import("@/components/ui/sonner").then((m) => ({ default: m.Toaster }))
);

// Suspense wrapper to avoid repetition in route config
const SuspensePage = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-screen bg-background" />}>
    {children}
  </Suspense>
);

const router = createBrowserRouter(
  [
    { path: "/", element: <SuspensePage><Index /></SuspensePage> },
    { path: "/termin", element: <SuspensePage><Termin /></SuspensePage> },
    { path: "/leistungen", element: <SuspensePage><Leistungen /></SuspensePage> },
    { path: "/ueber-uns", element: <SuspensePage><UeberUns /></SuspensePage> },
    { path: "/casestudies", element: <SuspensePage><CaseStudies /></SuspensePage> },
    { path: "/impressum", element: <SuspensePage><Impressum /></SuspensePage> },
    { path: "/datenschutz", element: <SuspensePage><Datenschutz /></SuspensePage> },
    { path: "/agb", element: <SuspensePage><AGB /></SuspensePage> },
    { path: "*", element: <SuspensePage><NotFound /></SuspensePage> },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => (
  <HelmetProvider>
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </HelmetProvider>
);

export default App;
