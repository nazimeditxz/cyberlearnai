import { ArrowRight, BookOpen, Target, FlaskConical, Shield, Briefcase, FolderOpen, Users } from "lucide-react";

const steps = [
  { icon: BookOpen, label: "Learn", description: "Master fundamentals" },
  { icon: Target, label: "Practice", description: "Apply knowledge" },
  { icon: FlaskConical, label: "Labs", description: "Hands-on challenges" },
  { icon: Shield, label: "Awareness", description: "Stay secure" },
  { icon: Briefcase, label: "Career", description: "Get job-ready" },
  { icon: FolderOpen, label: "Portfolio", description: "Showcase skills" },
  { icon: Users, label: "Community", description: "Grow together" },
];

export function LearningFlowSection() {
  return (
    <section id="learn" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">// LEARNING PATH</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Journey to{" "}
            <span className="gradient-text">Mastery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow our structured learning flow designed to build your skills progressively and prepare you for a successful career.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4 lg:gap-6">
              {/* Step Card */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(175_80%_50%/0.2)] transition-all duration-300">
                    <step.icon className="h-7 w-7 lg:h-8 lg:w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <span className="font-semibold text-foreground text-sm lg:text-base">{step.label}</span>
                <span className="text-xs text-muted-foreground hidden lg:block">{step.description}</span>
              </div>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to begin your cybersecurity journey?</p>
          <a 
            href="#features" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            Explore all features
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
