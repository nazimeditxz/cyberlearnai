import { Briefcase, TrendingUp, GraduationCap, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const careerPaths = [
  {
    title: "Security Analyst",
    salary: "৳50K - ৳120K/month",
    growth: "33% Job Growth",
    skills: ["SIEM", "Threat Detection", "Log Analysis", "Incident Response"],
    description: "Monitor and protect organizational systems from cyber threats",
  },
  {
    title: "Penetration Tester",
    salary: "৳70K - ৳180K/month",
    growth: "28% Job Growth",
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Reporting", "Python"],
    description: "Test system security by simulating real-world attacks",
  },
  {
    title: "Security Engineer",
    salary: "৳80K - ৳200K/month",
    growth: "35% Job Growth",
    skills: ["Network Security", "Firewalls", "Cloud Security", "Automation"],
    description: "Design and implement security solutions for organizations",
  },
  {
    title: "SOC Analyst",
    salary: "৳45K - ৳100K/month",
    growth: "31% Job Growth",
    skills: ["Monitoring", "Alert Triage", "Forensics", "Communication"],
    description: "Work in Security Operations Centers to detect and respond to threats",
  },
];

const certifications = [
  { name: "CompTIA Security+", level: "Entry" },
  { name: "CEH", level: "Intermediate" },
  { name: "OSCP", level: "Advanced" },
  { name: "CISSP", level: "Expert" },
];

export function CareerGuidanceSection() {
  return (
    <section id="career-guidance" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-mono mb-4">
            CAREER GUIDANCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Your Path to a <span className="text-amber-400">Cyber Career</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore high-demand cybersecurity roles and build a roadmap for your future in Bangladesh's growing tech sector
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {careerPaths.map((career, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary/50 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{career.title}</h3>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </div>
                <Briefcase className="h-6 w-6 text-amber-400" />
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>{career.growth}</span>
                </div>
                <div className="text-muted-foreground">
                  {career.salary}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Roadmap */}
        <div className="bg-background rounded-xl border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Certification Roadmap</h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-center p-4 rounded-lg bg-secondary border border-primary/20 min-w-[120px]">
                  <div className="text-xs text-primary font-mono mb-1">{cert.level}</div>
                  <div className="font-semibold">{cert.name}</div>
                </div>
                {index < certifications.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary hidden sm:block" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/careers" className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm">
              View Complete Career Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
