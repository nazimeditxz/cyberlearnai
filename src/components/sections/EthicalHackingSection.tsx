import { Terminal, Search, Bug, FileCheck, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const hackingSteps = [
  {
    step: 1,
    title: "Reconnaissance",
    description: "Gather information about the target system using OSINT techniques",
    icon: Search,
  },
  {
    step: 2,
    title: "Scanning & Enumeration",
    description: "Identify open ports, services, and potential vulnerabilities",
    icon: Terminal,
  },
  {
    step: 3,
    title: "Vulnerability Analysis",
    description: "Analyze discovered vulnerabilities and assess their severity",
    icon: Bug,
  },
  {
    step: 4,
    title: "Exploitation",
    description: "Safely exploit vulnerabilities in controlled environments",
    icon: AlertTriangle,
  },
  {
    step: 5,
    title: "Post-Exploitation",
    description: "Maintain access and explore the compromised system",
    icon: Lock,
  },
  {
    step: 6,
    title: "Reporting",
    description: "Document findings and provide remediation recommendations",
    icon: FileCheck,
  },
];

export function EthicalHackingSection() {
  return (
    <section id="ethical-hacking" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-mono mb-4">
              ETHICAL HACKING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              Learn the <span className="text-accent">Hacker Mindset</span> Ethically
            </h2>
            <p className="text-muted-foreground mb-8">
              Master penetration testing methodologies used by security professionals worldwide. 
              Practice in safe, legal environments and learn to think like an attacker to better defend systems.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Industry-standard methodologies (OWASP, PTES, OSSTMM)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Hands-on labs with real-world scenarios</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Legal and ethical guidelines for testing</span>
              </div>
            </div>

            <Link to="/practice">
              <Button variant="hero" className="gap-2">
                <Terminal className="h-4 w-4" />
                Start Ethical Hacking Course
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hackingSteps.map((item) => (
              <div
                key={item.step}
                className="group p-4 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-accent">0{item.step}</span>
                  <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
