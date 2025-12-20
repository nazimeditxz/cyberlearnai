import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {/* Acceptance */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using Cyber Learn AI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                  </p>
                </div>

                {/* Ethical Use */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-bold">2. Ethical Use Policy</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">IMPORTANT:</strong> Cyber Learn AI teaches cybersecurity skills for educational and defensive purposes only. By using our platform, you agree to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-terminal-green mb-2">
                        <CheckCircle className="h-4 w-4" /> Allowed
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Practice in provided lab environments</li>
                        <li>• Learn defensive security techniques</li>
                        <li>• Participate in authorized CTF challenges</li>
                        <li>• Test systems you own or have permission to test</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold text-accent mb-2">
                        <XCircle className="h-4 w-4" /> Prohibited
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Attack systems without authorization</li>
                        <li>• Use skills for illegal activities</li>
                        <li>• Share exploits for malicious purposes</li>
                        <li>• Compromise other users' accounts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Account Terms */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">3. Account Terms</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>You must be at least 13 years old to use this platform</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>One person or entity per account unless otherwise authorized</li>
                    <li>You must provide accurate registration information</li>
                    <li>Sharing account credentials is prohibited</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, including courses, labs, code, and materials, is owned by Cyber Learn AI or our licensors. You may not reproduce, distribute, or create derivative works without explicit permission. Your personal learning progress and notes remain yours.
                  </p>
                </div>

                {/* Subscriptions */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">5. Subscriptions & Payments</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Paid plans are billed monthly or annually as selected</li>
                    <li>Prices are in Bangladeshi Taka (BDT) unless otherwise stated</li>
                    <li>Refund requests must be made within 7 days of purchase</li>
                    <li>We reserve the right to change pricing with 30 days notice</li>
                  </ul>
                </div>

                {/* Termination */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">6. Termination</h2>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your account at any time for violations of these terms, especially the Ethical Use Policy. Serious violations may be reported to appropriate authorities.
                  </p>
                </div>

                {/* Liability */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">7. Limitation of Liability</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Cyber Learn AI is provided "as is" without warranties. We are not liable for any damages arising from your use of the platform or skills learned. You are solely responsible for how you apply cybersecurity knowledge.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of Bangladesh. Any disputes shall be resolved in the courts of Dhaka, Bangladesh.
                  </p>
                </div>

                {/* Contact */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Questions about these Terms? Contact us at{" "}
                    <span className="text-primary">legal@cyberlearnai.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
