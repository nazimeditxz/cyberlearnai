import { 
  BookOpen, 
  Target, 
  FlaskConical, 
  Shield, 
  Trophy, 
  Briefcase, 
  FolderOpen, 
  Users, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "AI Study Assistant",
    description: "Learn cybersecurity fundamentals to advanced topics with personalized AI explanations, quizzes, and exercises.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Practice Mode",
    description: "Safe simulation of ethical hacking workflows: Reconnaissance → Scanning → Exploitation → Securing.",
    color: "accent",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Labs",
    description: "Structured CTF-style challenges from beginner to advanced. Practice web security in sandbox environments.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Security Awareness",
    description: "Learn to detect phishing, scams common in Bangladesh (bKash, Facebook), and social engineering attacks.",
    color: "accent",
  },
  {
    icon: Trophy,
    title: "Skill Challenges",
    description: "Weekly challenges, quizzes, badges, and leaderboards. Gamified learning to keep you motivated.",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Career paths (SOC Analyst, Pentester, Red Team), certifications (CEH, OSCP), and interview prep.",
    color: "accent",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Builder",
    description: "Organize your projects, lab completions, and reports. Build a job-ready cybersecurity portfolio.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with mentors, join study groups, and participate in moderated discussions.",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Resources",
    description: "Access tutorials, blogs, FAQs, cybersecurity news, and comprehensive study references.",
    color: "primary",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">// FEATURES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive platform designed to take you from beginner to job-ready cybersecurity specialist.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.15)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                feature.color === "primary" 
                  ? "bg-primary/10 text-primary group-hover:bg-primary/20" 
                  : "bg-accent/10 text-accent group-hover:bg-accent/20"
              }`}>
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                feature.color === "primary" ? "bg-primary" : "bg-accent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
