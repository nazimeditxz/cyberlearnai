import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, TrendingUp, Award, GraduationCap, Target, Users, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const careerPaths = [
  {
    title: "SOC Analyst",
    level: "Entry Level",
    salary: "৳30,000 - ৳60,000/month",
    description: "Monitor security events, analyze alerts, and respond to incidents in real-time.",
    skills: ["SIEM Tools", "Log Analysis", "Incident Response", "Network Monitoring"],
    certifications: ["Security+", "CEH"],
  },
  {
    title: "Penetration Tester",
    level: "Mid Level",
    salary: "৳60,000 - ৳120,000/month",
    description: "Test systems for vulnerabilities by simulating real-world attacks.",
    skills: ["Kali Linux", "Burp Suite", "Metasploit", "Web App Testing"],
    certifications: ["OSCP", "CEH", "GPEN"],
  },
  {
    title: "Security Engineer",
    level: "Mid Level",
    salary: "৳80,000 - ৳150,000/month",
    description: "Design and implement security solutions to protect organizational assets.",
    skills: ["Firewall Config", "Cloud Security", "IDS/IPS", "Automation"],
    certifications: ["Security+", "CCNA Security", "AWS Security"],
  },
  {
    title: "Red Team Operator",
    level: "Senior Level",
    salary: "৳120,000 - ৳250,000/month",
    description: "Lead advanced attack simulations to test organization's detection capabilities.",
    skills: ["Advanced Exploitation", "Evasion Techniques", "Custom Tools", "Social Engineering"],
    certifications: ["OSCP", "CRTO", "OSEP"],
  },
];

const certifications = [
  { name: "CompTIA Security+", difficulty: "Beginner", cost: "$392", validity: "3 years" },
  { name: "CEH (Certified Ethical Hacker)", difficulty: "Intermediate", cost: "$1,199", validity: "3 years" },
  { name: "OSCP (Offensive Security)", difficulty: "Advanced", cost: "$1,599", validity: "Lifetime" },
  { name: "CISSP", difficulty: "Expert", cost: "$749", validity: "3 years" },
];

const jobOpenings = [
  { title: "Junior Security Analyst", company: "Tech Company BD", location: "Dhaka", type: "Full-time" },
  { title: "Cybersecurity Intern", company: "Bank of Bangladesh", location: "Dhaka", type: "Internship" },
  { title: "Network Security Engineer", company: "Telecom Corp", location: "Chittagong", type: "Full-time" },
  { title: "Security Consultant", company: "Consulting Firm", location: "Remote", type: "Contract" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                💼 Career Guidance
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Build Your <span className="gradient-text">Cybersecurity Career</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore career paths, certification guidance, and job opportunities in cybersecurity. Your roadmap from student to professional.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  Explore Career Paths
                </Button>
                <Button variant="outline" size="lg">
                  View Job Board
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
                { icon: Briefcase, value: "10,000+", label: "Open Positions Globally" },
                { icon: TrendingUp, value: "35%", label: "Annual Growth Rate" },
                { icon: DollarSign, value: "$100K+", label: "Avg Senior Salary (USD)" },
                { icon: Award, value: "0%", label: "Unemployment Rate" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-6 w-6 text-primary mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Paths</h2>
              <p className="text-muted-foreground">Choose your specialization in cybersecurity</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{career.title}</h3>
                      <span className="text-sm text-primary">{career.level}</span>
                    </div>
                    <span className="text-sm text-terminal-green font-medium">{career.salary}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">REQUIRED SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">CERTIFICATIONS</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Certifications</h2>
              <p className="text-muted-foreground">Globally recognized credentials to boost your career</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 transition-all"
                >
                  <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Difficulty: <span className="text-foreground">{cert.difficulty}</span></p>
                    <p>Cost: <span className="text-foreground">{cert.cost}</span></p>
                    <p>Valid: <span className="text-foreground">{cert.validity}</span></p>
                  </div>
                  <Button size="sm" variant="outline" className="mt-4 w-full">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Board Preview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sample Job Openings</h2>
              <p className="text-muted-foreground">Cybersecurity opportunities in Bangladesh (Demo Data)</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-primary/50 transition-all"
                >
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span>{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-secondary text-xs rounded-full">{job.type}</span>
                    <Button size="sm" variant="ghost" className="text-primary">
                      Apply →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">View All Openings</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
