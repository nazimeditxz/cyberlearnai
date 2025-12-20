import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, BookOpen, HelpCircle, Book, Video, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const documentation = [
  { title: "Getting Started Guide", desc: "Begin your cybersecurity journey with this comprehensive guide." },
  { title: "Lab Environment Setup", desc: "Set up your Kali Linux and practice environment." },
  { title: "Tool Documentation", desc: "Complete reference for all security tools covered in the platform." },
  { title: "API Reference", desc: "Developer documentation for platform integrations." },
];

const tutorials = [
  { title: "Nmap for Beginners", category: "Networking", duration: "45 min", level: "Beginner" },
  { title: "SQL Injection Deep Dive", category: "Web Security", duration: "60 min", level: "Intermediate" },
  { title: "Linux Privilege Escalation", category: "Linux", duration: "90 min", level: "Advanced" },
  { title: "Burp Suite Mastery", category: "Web Security", duration: "75 min", level: "Intermediate" },
  { title: "Python for Hackers", category: "Programming", duration: "120 min", level: "Beginner" },
  { title: "OWASP Top 10 Explained", category: "Web Security", duration: "60 min", level: "Beginner" },
];

const faqs = [
  { q: "Is this platform legal to use?", a: "Yes! All our labs and exercises run in isolated, legal environments. We only teach ethical hacking for defensive purposes." },
  { q: "Do I need prior programming experience?", a: "No, we start from basics. However, learning Python and Bash scripting is part of our curriculum." },
  { q: "Can I get a job after completing the courses?", a: "Our curriculum prepares you for entry-level cybersecurity roles. We also provide career guidance and interview preparation." },
  { q: "Are the certifications recognized in Bangladesh?", a: "We prepare you for globally recognized certifications like CEH, Security+, and OSCP which are valued worldwide." },
  { q: "How long does it take to complete the full curriculum?", a: "At 10-15 hours per week, most students complete the full path in 6-12 months depending on prior experience." },
];

const glossary = [
  { term: "Penetration Testing", def: "Authorized simulated cyberattack to evaluate system security." },
  { term: "SQL Injection", def: "Code injection technique that exploits database query vulnerabilities." },
  { term: "XSS (Cross-Site Scripting)", def: "Vulnerability allowing attackers to inject malicious scripts into web pages." },
  { term: "Zero-Day", def: "Previously unknown vulnerability with no available patch." },
  { term: "Phishing", def: "Social engineering attack using fraudulent communications to steal information." },
  { term: "Malware", def: "Malicious software designed to damage or gain unauthorized access to systems." },
  { term: "Firewall", def: "Network security device that monitors and filters incoming/outgoing traffic." },
  { term: "VPN", def: "Virtual Private Network - encrypted connection over the internet." },
];

const studyGuides = [
  { title: "CompTIA Security+ Study Guide", pages: 120, lastUpdated: "Dec 2024" },
  { title: "CEH v12 Preparation Guide", pages: 85, lastUpdated: "Nov 2024" },
  { title: "OSCP Cheat Sheet Collection", pages: 45, lastUpdated: "Dec 2024" },
  { title: "Linux Command Reference", pages: 30, lastUpdated: "Oct 2024" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📚 Learning Resources
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Everything You Need to <span className="gradient-text">Learn Cybersecurity</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Documentation, tutorials, study guides, and more. All resources designed for Bangladeshi students.
              </p>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search resources..." className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Documentation */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Documentation</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {documentation.map((doc, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer group">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tutorials */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Video className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tutorials</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{tutorial.category}</span>
                    <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-terminal-green">{tutorial.level}</span>
                    <Button size="sm" variant="ghost">Start →</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold mb-2 text-primary">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Glossary */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Cybersecurity Glossary</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {glossary.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-terminal-green mb-1">{item.term}</h3>
                  <p className="text-sm text-muted-foreground">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Study Guides */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Study Guides</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {studyGuides.map((guide, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <h3 className="font-semibold mb-3">{guide.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guide.pages} pages</span>
                    <span>Updated {guide.lastUpdated}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-4">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
