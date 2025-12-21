import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating dots */}
      <div className="absolute top-32 left-20 w-2 h-2 rounded-full bg-primary animate-pulse" />
      <div className="absolute top-48 right-32 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-32 w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-60 right-20 w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/30 mb-10 animate-fade-in">
            <span className="text-primary font-mono text-sm">&gt;_</span>
            <span className="text-sm text-muted-foreground font-mono">Initializing AI-Powered Learning_</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-slide-up font-mono">
            Master{" "}
            <span className="gradient-text">Cybersecurity</span>
            <br />
            with{" "}
            <span className="text-foreground">AI Guidance</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your intelligent companion for ethical hacking, security awareness, and
            career development. Learn, practice, and explore in a safe environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/learn">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                <Sparkles className="h-4 w-4" />
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#features">
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">9+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-mono">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">AI</div>
              <div className="text-xs md:text-sm text-muted-foreground font-mono">Powered Assistant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground font-mono">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
