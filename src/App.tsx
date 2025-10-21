import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ Add this import

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Default meta head */}
        <Helmet>
          <title>NextGen Leaflets</title>
          <meta
            name="description"
            content="NextGen Leaflets – the modern way to experience and share digital brochures."
          />
          <meta property="og:title" content="NextGen Leaflets" />
          <meta
            property="og:description"
            content="Explore the future of digital leaflets and marketing content."
          />
          <meta property="og:type" content="website" />
          
        </Helmet>

        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add all custom routes above the catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
