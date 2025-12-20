import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Terminal, Search, Target, Shield, AlertTriangle, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceModules = [
  {
    title: "Reconnaissance",
    description: "Learn information gathering techniques using OSINT, DNS enumeration, and subdomain discovery.",
    icon: Search,
    difficulty: "Beginner",
    exercises: 8,
    tools: ["Nmap", "theHarvester", "Shodan"],
  },
  {
    title: "Scanning & Enumeration",
    description: "Master port scanning, service detection, and vulnerability identification techniques.",
    icon: Target,
    difficulty: "Beginner",
    exercises: 10,
    tools: ["Nmap", "Nikto", "Dirb"],
  },
  {
    title: "Exploitation",
    description: "Practice safe exploitation techniques in controlled environments.",
    icon: AlertTriangle,
    difficulty: "Intermediate",
    exercises: 12,
    tools: ["Metasploit", "Burp Suite", "SQLMap"],
  },
  {
    title: "Post-Exploitation",
    description: "Learn privilege escalation, persistence, and lateral movement.",
    icon: Terminal,
    difficulty: "Advanced",
    exercises: 8,
    tools: ["Mimikatz", "PowerShell", "LinPEAS"],
  },
  {
    title: "Defense & Hardening",
    description: "Practice securing systems and implementing defensive measures.",
    icon: Shield,
    difficulty: "Intermediate",
    exercises: 10,
    tools: ["Firewall", "IDS/IPS", "SIEM"],
  },
  {
    title: "Reporting",
    description: "Create professional vulnerability assessment and penetration testing reports.",
    icon: CheckCircle,
    difficulty: "Beginner",
    exercises: 5,
    tools: ["Dradis", "Serpico", "Templates"],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
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

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-terminal-green/10 text-terminal-green rounded-full border border-terminal-green/20">
                🎯 Safe Practice Environment
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Practice <span className="gradient-text">Ethical Hacking</span> Safely
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Master the complete penetration testing workflow: Recon → Scan → Exploit → Secure. All exercises run in safe, simulated environments with AI-powered guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Play className="h-4 w-4 mr-2" />
                  Start Practice
                </Button>
                <Button variant="outline" size="lg">
                  View All Exercises
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Hacking Workflow */}
        <section className="py-16 lg:py-24 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ethical Hacking Workflow</h2>
              <p className="text-muted-foreground">Learn the complete penetration testing methodology</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Reconnaissance", desc: "Gather information about the target", color: "text-cyber-blue" },
                { step: "02", title: "Scanning", desc: "Identify open ports and services", color: "text-terminal-green" },
                { step: "03", title: "Exploitation", desc: "Safely exploit vulnerabilities", color: "text-accent" },
                { step: "04", title: "Reporting", desc: "Document and remediate issues", color: "text-primary" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                    <span className={`text-4xl font-bold ${item.color} opacity-50`}>{item.step}</span>
                    <h3 className="font-semibold mt-2 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Modules */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hands-on exercises simulating real-world scenarios. Practice safely with Kali Linux tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {module.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{module.exercises} Exercises</span>
                    <Button size="sm" variant="ghost" className="text-primary">
                      Start →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 bg-accent/5 border-y border-accent/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <Shield className="h-8 w-8 text-accent flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-accent">Important:</strong> All practice exercises run in isolated, simulated environments. 
                Never attempt these techniques on real systems without proper authorization.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
