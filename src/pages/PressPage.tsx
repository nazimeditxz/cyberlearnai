import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newspaper, Download, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const pressReleases = [
  {
    date: "December 2024",
    title: "Cyber Learn AI Launches Bangladesh's First AI-Powered Cybersecurity Learning Platform",
    excerpt: "Revolutionary platform aims to address the critical shortage of cybersecurity professionals in Bangladesh through accessible, AI-guided education.",
  },
  {
    date: "November 2024",
    title: "Partnership Announced with Leading Bangladeshi Universities",
    excerpt: "Cyber Learn AI collaborates with top educational institutions to integrate cybersecurity curriculum into academic programs.",
  },
  {
    date: "October 2024",
    title: "Platform Reaches 5,000 Student Milestone",
    excerpt: "Growing community of ethical hackers and security enthusiasts demonstrates strong demand for cybersecurity education in Bangladesh.",
  },
];

const mediaKit = [
  { name: "Logo Pack (PNG, SVG)", size: "2.4 MB" },
  { name: "Brand Guidelines", size: "1.8 MB" },
  { name: "Product Screenshots", size: "5.2 MB" },
  { name: "Founder Headshots", size: "3.1 MB" },
];

const coverage = [
  { outlet: "The Daily Star", title: "Tech Startups Addressing Skills Gap", date: "Dec 2024" },
  { outlet: "Prothom Alo", title: "Youth in Cybersecurity", date: "Nov 2024" },
  { outlet: "TechCrunch BD", title: "EdTech Innovation in Bangladesh", date: "Oct 2024" },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📰 Press & Media
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Cyber Learn AI</span> in the News
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Media resources, press releases, and contact information for journalists and content creators.
              </p>
              <Button variant="hero" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Contact Press Team
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Press Releases */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Press Releases</h2>
              </div>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    <span className="text-sm text-primary font-medium">{release.date}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">{release.title}</h3>
                    <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Read Full Release →
                    </Button>
                  </div>
                ))}
              </div>

              {/* Media Coverage */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Media Coverage</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {coverage.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                      <h4 className="font-semibold mt-1 mb-2">{item.outlet}</h4>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Media Kit */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Media Kit</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Download our brand assets for use in media coverage.
                </p>
                <div className="space-y-3">
                  {mediaKit.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                    >
                      <span className="text-sm">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{item.size}</span>
                        <Download className="h-4 w-4 text-primary cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Download All Assets
                </Button>
              </div>

              {/* Press Contact */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Press Contact</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">For media inquiries:</p>
                  <p className="text-primary">press@cyberlearnai.com</p>
                  <p className="text-muted-foreground mt-4">Response time: Within 24 hours</p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded</span>
                    <span>2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students</span>
                    <span>5,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Labs</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
