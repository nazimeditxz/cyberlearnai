import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { LearningFlowSection } from "@/components/sections/LearningFlowSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import { PrototypeNotice } from "@/components/sections/PrototypeNotice";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <LearningFlowSection />
        <FeaturesSection />
        <PrototypeNotice />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
