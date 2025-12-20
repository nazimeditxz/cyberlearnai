import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Server, Eye, Bug, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform runs on secure cloud infrastructure with regular security audits and monitoring.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access control and multi-factor authentication protect user accounts.",
  },
  {
    icon: Bug,
    title: "Bug Bounty Program",
    description: "We invite security researchers to responsibly disclose vulnerabilities.",
  },
];

const practices = [
  "Regular penetration testing by third-party security firms",
  "Continuous security monitoring and incident response",
  "Employee security training and awareness programs",
  "Secure development lifecycle (SDLC) practices",
  "Regular security updates and patch management",
  "Data backup and disaster recovery procedures",
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Security at Cyber Learn AI</h1>
              <p className="text-muted-foreground">
                As a cybersecurity education platform, we take security seriously. Learn about how we protect your data and our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security Features</h2>
              <p className="text-muted-foreground">How we keep your data safe</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all"
                >
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-16 lg:py-24 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Security Practices</h2>
                <p className="text-muted-foreground">Our commitment to security excellence</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <ul className="space-y-4">
                  {practices.map((practice, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-terminal-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Security */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Lab Environment Security</h2>
                <p className="text-muted-foreground">Safe practice environments</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-muted-foreground mb-4">
                  Our practice labs run in fully isolated environments, ensuring that:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Labs cannot access external networks or real systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Each student gets a dedicated, sandboxed environment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Environments are automatically reset after each session
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    All lab activities are monitored for educational purposes only
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Bounty */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Bug className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Bug Bounty Program</h2>
              <p className="text-muted-foreground mb-8">
                As a platform teaching ethical hacking, we value responsible security research. If you discover a vulnerability, please report it to us responsibly.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 text-left mb-6">
                <h3 className="font-semibold mb-2">Scope</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All *.cyberlearnai.com domains are in scope. Please do not test against production user data.
                </p>
                <h3 className="font-semibold mb-2">Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Valid reports are eligible for rewards ranging from platform credits to monetary compensation based on severity.
                </p>
              </div>
              <Button variant="hero" size="lg">
                Report a Vulnerability
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Contact: security@cyberlearnai.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
