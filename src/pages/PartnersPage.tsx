import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Handshake, Building2, GraduationCap, Globe, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Partner with us to bring cybersecurity education to your students. Get access to our platform, curriculum resources, and lab environments.",
    benefits: [
      "Discounted group access",
      "Custom curriculum integration",
      "Progress tracking for educators",
      "Certificate programs",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    description: "Train your workforce in cybersecurity. Customized programs for enterprise security teams and IT professionals.",
    benefits: [
      "Corporate training packages",
      "Custom lab environments",
      "Security awareness programs",
      "Team progress analytics",
    ],
  },
  {
    icon: Globe,
    title: "Technology Partners",
    description: "Integrate your security tools and platforms with Cyber Learn AI. Reach thousands of learning cybersecurity professionals.",
    benefits: [
      "Product integration",
      "Co-branded content",
      "Access to learner community",
      "Marketing collaboration",
    ],
  },
];

const currentPartners = [
  { name: "University of Dhaka", type: "Academic", status: "Planned" },
  { name: "BUET", type: "Academic", status: "In Discussion" },
  { name: "Bangladesh Bank", type: "Corporate", status: "Planned" },
  { name: "Grameenphone", type: "Corporate", status: "In Discussion" },
  { name: "BDREN", type: "Technology", status: "Planned" },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                🤝 Partnership Programs
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Partner with <span className="gradient-text">Cyber Learn AI</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in building Bangladesh's cybersecurity talent pipeline. We partner with educational institutions, corporations, and technology providers.
              </p>
              <Button variant="hero" size="lg">
                <Handshake className="h-4 w-4 mr-2" />
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-muted-foreground">Different ways to collaborate with us</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-4">
                    <partner.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{partner.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                  <h4 className="text-sm font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-terminal-green flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planned Partners */}
        <section className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partnership Pipeline</h2>
              <p className="text-muted-foreground">Organizations we're working with (Demo/Planned)</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                {currentPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{partner.name}</h4>
                        <span className="text-xs text-muted-foreground">{partner.type}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">
                      {partner.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
              <p className="text-muted-foreground mb-8">
                Contact our partnerships team to discuss how we can work together to advance cybersecurity education in Bangladesh.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  Schedule a Meeting
                </Button>
                <Button variant="outline" size="lg">
                  Download Partnership Deck
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
