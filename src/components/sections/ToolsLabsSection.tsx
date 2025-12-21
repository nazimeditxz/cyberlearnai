import { Terminal, Database, Wifi, Shield, Globe, Key, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    name: "Kali Linux",
    category: "Operating System",
    description: "Complete penetration testing distribution with 600+ tools",
    icon: Terminal,
    level: "All Levels",
  },
  {
    name: "Wireshark",
    category: "Network Analysis",
    description: "Capture and analyze network traffic in real-time",
    icon: Wifi,
    level: "Intermediate",
  },
  {
    name: "Burp Suite",
    category: "Web Security",
    description: "Comprehensive web application security testing platform",
    icon: Globe,
    level: "Intermediate",
  },
  {
    name: "Metasploit",
    category: "Exploitation",
    description: "Advanced penetration testing and exploit development framework",
    icon: Shield,
    level: "Advanced",
  },
  {
    name: "SQLMap",
    category: "Database",
    description: "Automated SQL injection detection and exploitation tool",
    icon: Database,
    level: "Intermediate",
  },
  {
    name: "John the Ripper",
    category: "Password Cracking",
    description: "Fast password cracker with support for many hash types",
    icon: Key,
    level: "Intermediate",
  },
];

export function ToolsLabsSection() {
  return (
    <section id="tools-labs" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            PRACTICAL TOOLS & LABS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Industry-Standard <span className="gradient-text">Security Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get hands-on experience with the same tools used by professional penetration testers and security analysts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-background text-muted-foreground">
                  {tool.level}
                </span>
              </div>
              
              <span className="text-xs text-primary font-mono uppercase tracking-wider">
                {tool.category}
              </span>
              
              <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/labs" className="inline-flex items-center gap-2 text-primary hover:underline font-mono">
            Explore All Labs & Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
