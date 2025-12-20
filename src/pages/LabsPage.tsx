import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Monitor, Flag, Clock, Users, Star, Play, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const labs = [
  {
    title: "Linux Basics Challenge",
    description: "Learn essential Linux commands and file system navigation in this beginner-friendly lab.",
    difficulty: "Beginner",
    duration: "30 min",
    points: 100,
    participants: 1250,
    category: "Linux",
    isLocked: false,
  },
  {
    title: "Network Reconnaissance",
    description: "Use Nmap to discover hosts, open ports, and running services on a target network.",
    difficulty: "Beginner",
    duration: "45 min",
    points: 150,
    participants: 980,
    category: "Networking",
    isLocked: false,
  },
  {
    title: "SQL Injection Lab",
    description: "Practice identifying and exploiting SQL injection vulnerabilities in a web application.",
    difficulty: "Intermediate",
    duration: "60 min",
    points: 250,
    participants: 756,
    category: "Web Security",
    isLocked: false,
  },
  {
    title: "XSS Attack Vectors",
    description: "Explore different types of Cross-Site Scripting attacks and learn how to prevent them.",
    difficulty: "Intermediate",
    duration: "45 min",
    points: 200,
    participants: 612,
    category: "Web Security",
    isLocked: false,
  },
  {
    title: "Password Cracking",
    description: "Learn password cracking techniques using tools like John the Ripper and Hashcat.",
    difficulty: "Intermediate",
    duration: "60 min",
    points: 300,
    participants: 543,
    category: "Cryptography",
    isLocked: true,
  },
  {
    title: "Privilege Escalation",
    description: "Master Linux and Windows privilege escalation techniques in vulnerable machines.",
    difficulty: "Advanced",
    duration: "90 min",
    points: 400,
    participants: 321,
    category: "Exploitation",
    isLocked: true,
  },
  {
    title: "Active Directory Attack",
    description: "Compromise an Active Directory environment using real-world attack techniques.",
    difficulty: "Advanced",
    duration: "120 min",
    points: 500,
    participants: 189,
    category: "Enterprise",
    isLocked: true,
  },
  {
    title: "Malware Analysis Intro",
    description: "Analyze malware samples in a safe sandbox environment to understand malicious behavior.",
    difficulty: "Advanced",
    duration: "90 min",
    points: 450,
    participants: 234,
    category: "Malware",
    isLocked: true,
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

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                🖥️ Hands-On Labs
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                CTF-Style <span className="gradient-text">Cybersecurity Labs</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Practice in realistic virtual environments. Complete challenges, capture flags, and build real skills through hands-on experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Play className="h-4 w-4 mr-2" />
                  Launch Lab Environment
                </Button>
                <Button variant="outline" size="lg">
                  View All Labs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "50+", label: "Active Labs" },
                { value: "15K+", label: "Completions" },
                { value: "8", label: "Categories" },
                { value: "24/7", label: "Availability" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Categories */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Labs</h2>
              <p className="text-muted-foreground">Choose your challenge level and start hacking</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {labs.map((lab, index) => (
                <div
                  key={index}
                  className={`group bg-card border border-border rounded-xl p-6 transition-all duration-300 ${
                    lab.isLocked ? "opacity-75" : "hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {lab.isLocked ? (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      ) : (
                        <Monitor className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(lab.difficulty)}`}>
                      {lab.difficulty}
                    </span>
                  </div>
                  <span className="text-xs text-primary/80 font-medium">{lab.category}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{lab.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{lab.description}</p>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lab.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {lab.points} pts
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {lab.participants}
                    </span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full" 
                    variant={lab.isLocked ? "outline" : "hero"}
                    disabled={lab.isLocked}
                  >
                    {lab.isLocked ? (
                      <>
                        <Lock className="h-3 w-3 mr-2" />
                        Unlock with Pro
                      </>
                    ) : (
                      <>
                        <Flag className="h-3 w-3 mr-2" />
                        Start Lab
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
