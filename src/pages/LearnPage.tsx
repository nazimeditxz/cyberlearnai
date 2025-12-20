import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Code, Shield, Server, Terminal, Lock, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const learningModules = [
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn the core concepts of information security, CIA triad, and security principles.",
    icon: Shield,
    level: "Beginner",
    lessons: 12,
    duration: "4 hours",
  },
  {
    title: "Networking Essentials",
    description: "Master TCP/IP, OSI model, protocols, and network security fundamentals.",
    icon: Globe,
    level: "Beginner",
    lessons: 15,
    duration: "6 hours",
  },
  {
    title: "Linux for Hackers",
    description: "Command line mastery, file systems, permissions, and security tools on Linux.",
    icon: Terminal,
    level: "Beginner",
    lessons: 18,
    duration: "8 hours",
  },
  {
    title: "Programming for Security",
    description: "Python and Bash scripting for automation, exploitation, and security tools.",
    icon: Code,
    level: "Intermediate",
    lessons: 20,
    duration: "10 hours",
  },
  {
    title: "Web Application Security",
    description: "OWASP Top 10, SQL injection, XSS, CSRF, and web vulnerability assessment.",
    icon: Server,
    level: "Intermediate",
    lessons: 16,
    duration: "8 hours",
  },
  {
    title: "Cryptography & Encryption",
    description: "Symmetric, asymmetric encryption, hashing, digital signatures, and PKI.",
    icon: Lock,
    level: "Intermediate",
    lessons: 14,
    duration: "6 hours",
  },
  {
    title: "Database Security",
    description: "SQL injection prevention, database hardening, and secure data management.",
    icon: Database,
    level: "Advanced",
    lessons: 12,
    duration: "5 hours",
  },
  {
    title: "Advanced Penetration Testing",
    description: "Full VAPT methodology, exploit development, and professional reporting.",
    icon: BookOpen,
    level: "Advanced",
    lessons: 24,
    duration: "12 hours",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "text-terminal-green bg-terminal-green/10 border-terminal-green/30";
    case "Intermediate":
      return "text-cyber-blue bg-cyber-blue/10 border-cyber-blue/30";
    case "Advanced":
      return "text-accent bg-accent/10 border-accent/30";
    default:
      return "text-muted-foreground bg-secondary";
  }
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📚 Structured Learning Path
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Learn <span className="gradient-text">Cybersecurity</span> Step by Step
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From absolute beginner to job-ready ethical hacker. Our AI-powered curriculum adapts to your learning pace and guides you through comprehensive cybersecurity education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  Start Learning Free
                </Button>
                <Button variant="outline" size="lg">
                  View Learning Path
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Modules */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive courses designed for Bangladeshi students, covering everything from basics to advanced penetration testing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {learningModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelColor(module.level)}`}>
                      {module.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span>{module.lessons} Lessons</span>
                    <span>{module.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 lg:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Learning Journey</h2>
              <p className="text-muted-foreground">Follow our structured path from beginner to expert</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  { step: 1, title: "Foundation", desc: "Cybersecurity basics, networking, and Linux fundamentals" },
                  { step: 2, title: "Core Skills", desc: "Programming, web security, and cryptography" },
                  { step: 3, title: "Practical Training", desc: "Hands-on labs, CTF challenges, and simulated attacks" },
                  { step: 4, title: "Specialization", desc: "Choose your path: Red Team, Blue Team, or Security Research" },
                  { step: 5, title: "Career Ready", desc: "Portfolio building, certifications, and job preparation" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
