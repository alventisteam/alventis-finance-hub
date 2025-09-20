import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import { useEffect } from "react";

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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/impressum" element={<LegalNotice />} />
        </Routes>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
