import { ShieldCheck, Eye, Mail, Smartphone, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const awarenessTopics = [
  {
    title: "Phishing Prevention",
    description: "Identify and avoid deceptive emails, messages, and websites",
    icon: Mail,
    tips: ["Check sender addresses", "Hover before clicking", "Verify requests"],
  },
  {
    title: "Password Security",
    description: "Create and manage strong, unique passwords for all accounts",
    icon: Lock,
    tips: ["Use password managers", "Enable 2FA", "Avoid common patterns"],
  },
  {
    title: "Social Engineering",
    description: "Recognize manipulation tactics used by attackers",
    icon: Users,
    tips: ["Question urgency", "Verify identities", "Report suspicious calls"],
  },
  {
    title: "Mobile Security",
    description: "Protect your smartphones and tablets from threats",
    icon: Smartphone,
    tips: ["Update regularly", "Use official stores", "Review permissions"],
  },
  {
    title: "Privacy Protection",
    description: "Safeguard your personal information online",
    icon: Eye,
    tips: ["Limit sharing", "Check privacy settings", "Use VPNs"],
  },
  {
    title: "Safe Browsing",
    description: "Navigate the internet securely and responsibly",
    icon: ShieldCheck,
    tips: ["Use HTTPS", "Avoid public WiFi", "Clear cookies"],
  },
];

export function CyberAwarenessSection() {
  return (
    <section id="cyber-awareness" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-4">
            CYBER AWARENESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Stay Safe <span className="text-emerald-400">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential knowledge every student needs to protect themselves in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {awarenessTopics.map((topic, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <topic.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold">{topic.title}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {topic.description}
              </p>
              
              <div className="space-y-2">
                {topic.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/resources">
            <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
              View All Safety Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
