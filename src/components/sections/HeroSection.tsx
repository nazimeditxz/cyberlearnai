import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Shield, Lock } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Prototype Version — Built for Bangladesh</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Master{" "}
            <span className="gradient-text">Cybersecurity</span>
            <br />
            From Zero to Hero
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your AI-powered learning companion for ethical hacking. Structured courses, hands-on labs, 
            and career guidance designed specifically for students in Bangladesh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="terminal" size="xl" className="w-full sm:w-auto">
              <Terminal className="h-5 w-5" />
              Try Demo Lab
            </Button>
          </div>

          {/* Terminal Preview */}
          <div className="relative max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-warning/70" />
                  <div className="w-3 h-3 rounded-full bg-accent/70" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">learning-perfus ~ terminal</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent">$</span>
                  <span className="text-foreground">./start-learning --module="ethical-hacking"</span>
                </div>
                <div className="text-muted-foreground mb-3">
                  <span className="text-primary">[✓]</span> Initializing AI Study Assistant...
                </div>
                <div className="text-muted-foreground mb-3">
                  <span className="text-primary">[✓]</span> Loading practice environments...
                </div>
                <div className="text-muted-foreground mb-3">
                  <span className="text-accent">[✓]</span> Sandbox labs ready
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">$</span>
                  <span className="text-foreground">Ready to begin your journey</span>
                  <span className="w-2 h-5 bg-primary terminal-cursor" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-3 bg-card rounded-xl border border-primary/30 box-glow animate-float hidden lg:block">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-card rounded-xl border border-accent/30 box-glow-accent animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
              <Lock className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
