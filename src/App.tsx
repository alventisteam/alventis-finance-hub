import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import { lazy, Suspense, useEffect } from "react";

// Lazy load secondary pages to reduce initial bundle size
const Privacy = lazy(() => import("./pages/Privacy"));
const LegalNotice = lazy(() => import("./pages/LegalNotice"));

const queryClient = new QueryClient();

const ScrollToTopOnNavigate = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <ScrollToTopOnNavigate />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/privacy" 
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Privacy />
              </Suspense>
            } 
          />
          <Route 
            path="/impressum" 
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <LegalNotice />
              </Suspense>
            } 
          />
        </Routes>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
