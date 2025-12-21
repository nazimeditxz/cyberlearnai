import { BookOpen, Shield, Code, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const learningPaths = [
  {
    level: "Beginner",
    title: "Cybersecurity Fundamentals",
    description: "Start your journey with core security concepts, threat landscapes, and basic defense mechanisms.",
    modules: 12,
    duration: "4 weeks",
    icon: BookOpen,
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    href: "/learn"
  },
  {
    level: "Intermediate",
    title: "Network Security & Analysis",
    description: "Deep dive into network protocols, traffic analysis, firewall configuration, and intrusion detection.",
    modules: 18,
    duration: "6 weeks",
    icon: Shield,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    href: "/learn"
  },
  {
    level: "Advanced",
    title: "Ethical Hacking & Penetration Testing",
    description: "Master vulnerability assessment, exploitation techniques, and professional penetration testing methodologies.",
    modules: 24,
    duration: "8 weeks",
    icon: Code,
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    href: "/practice"
  },
  {
    level: "Expert",
    title: "Security Architecture & Leadership",
    description: "Design secure systems, lead security teams, and develop organizational security strategies.",
    modules: 16,
    duration: "10 weeks",
    icon: Award,
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    href: "/learn"
  }
];

export function LearningPathsSection() {
  return (
    <section id="learning-paths" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            LEARNING PATHS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Beginner to <span className="gradient-text">Advanced</span> Cybersecurity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to take you from complete beginner to cybersecurity expert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <Link 
              key={index} 
              to={path.href}
              className={`group relative p-6 rounded-xl bg-gradient-to-b ${path.color} border ${path.borderColor} hover:border-primary/50 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 ${path.textColor}`}>
                <path.icon className="h-6 w-6" />
              </div>
              
              <span className={`text-xs font-mono ${path.textColor} uppercase tracking-wider`}>
                {path.level}
              </span>
              
              <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {path.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {path.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                <span>{path.modules} Modules</span>
                <span>{path.duration}</span>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className={`h-5 w-5 ${path.textColor}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
