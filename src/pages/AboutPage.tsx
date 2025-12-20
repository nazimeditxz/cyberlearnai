import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Target, Heart, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Ethical First",
    description: "We teach only legal, ethical hacking techniques for defensive purposes. Security knowledge should protect, not harm.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description: "Theory is not enough. Our hands-on labs and real-world simulations build actual skills employers want.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Designed specifically for Bangladeshi students, addressing local challenges and opportunities in cybersecurity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Learn together, grow together. Our community of learners and mentors supports each other's journey.",
  },
];

const milestones = [
  { year: "2024", event: "Platform launched as a prototype for Bangladeshi students" },
  { year: "2024", event: "First 1,000 students joined the platform" },
  { year: "2025", event: "Partnership with local universities planned" },
  { year: "2025", event: "Advanced certification preparation tracks launching" },
];

const team = [
  { name: "Project Lead", role: "Vision & Strategy", focus: "AI-powered cybersecurity education" },
  { name: "Technical Team", role: "Platform Development", focus: "Labs, simulations, and AI integration" },
  { name: "Content Team", role: "Curriculum Design", focus: "Bangladesh-focused learning materials" },
  { name: "Community Team", role: "Student Support", focus: "Mentorship and career guidance" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                🇧🇩 Made for Bangladesh
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Empowering Bangladesh's <span className="gradient-text">Cybersecurity Future</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Cyber Learn AI is Bangladesh's first AI-powered cybersecurity learning platform, designed to transform students into job-ready ethical hackers through structured education and hands-on practice.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Bangladesh faces a critical shortage of skilled cybersecurity professionals. Our education system, while strong in many areas, lacks practical cybersecurity training and safe practice environments.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Cyber Learn AI</strong> was created to bridge this gap. We provide:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Structured curriculum from absolute beginner to advanced
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Safe, legal practice environments with simulated attacks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    AI-powered personalized learning assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Career guidance tailored to Bangladesh job market
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Community of learners and mentors
                  </li>
                </ul>
                <Button variant="hero">Join Our Mission</Button>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text">5,000+</div>
                    <div className="text-sm text-muted-foreground">Students Enrolled</div>
                  </div>
                  <div className="text-center p-4">
                    <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-sm text-muted-foreground">Labs Available</div>
                  </div>
                  <div className="text-center p-4">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text">100+</div>
                    <div className="text-sm text-muted-foreground">Community Mentors</div>
                  </div>
                  <div className="text-center p-4">
                    <Target className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">What drives everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">Building Bangladesh's cybersecurity future</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="w-px bg-primary/30 relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Team</h2>
              <p className="text-muted-foreground">Passionate about cybersecurity education</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.focus}</p>
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
