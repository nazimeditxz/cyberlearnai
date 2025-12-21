import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { LearningPathsSection } from "@/components/sections/LearningPathsSection";
import { EthicalHackingSection } from "@/components/sections/EthicalHackingSection";
import { ToolsLabsSection } from "@/components/sections/ToolsLabsSection";
import { CyberAwarenessSection } from "@/components/sections/CyberAwarenessSection";
import { CareerGuidanceSection } from "@/components/sections/CareerGuidanceSection";
import { SkillRoadmapSection } from "@/components/sections/SkillRoadmapSection";
import { CommunityPreviewSection } from "@/components/sections/CommunityPreviewSection";
import { AIChatPreviewSection } from "@/components/sections/AIChatPreviewSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { LearningFlowSection } from "@/components/sections/LearningFlowSection";
import { CTASection } from "@/components/sections/CTASection";
import { PrototypeNotice } from "@/components/sections/PrototypeNotice";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero & Stats at top */}
        <HeroSection />
        <StatsSection />
        
        {/* Learning Options - All visible on scroll */}
        <LearningPathsSection />
        <EthicalHackingSection />
        <ToolsLabsSection />
        <CyberAwarenessSection />
        <CareerGuidanceSection />
        <SkillRoadmapSection />
        
        {/* Community & AI */}
        <CommunityPreviewSection />
        <AIChatPreviewSection />
        
        {/* Features & Flow */}
        <div id="features">
          <FeaturesSection />
        </div>
        <LearningFlowSection />
        
        {/* CTA */}
        <PrototypeNotice />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
