import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LearnPage from "./pages/LearnPage";
import CoursePage from "./pages/CoursePage";
import PracticePage from "./pages/PracticePage";
import LabsPage from "./pages/LabsPage";
import CommunityPage from "./pages/CommunityPage";
import DiscussionPage from "./pages/DiscussionPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import AuthPage from "./pages/AuthPage";
import NewsPage from "./pages/NewsPage";
import CareersPage from "./pages/CareersPage";
import PressPage from "./pages/PressPage";
import PartnersPage from "./pages/PartnersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SecurityPage from "./pages/SecurityPage";
import CookiesPage from "./pages/CookiesPage";
import DisclaimerPage from "./pages/DisclaimerPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/discussion/:discussionId" element={<DiscussionPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
