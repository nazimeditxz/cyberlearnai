import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle, Shield, BookOpen, Scale } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
              <p className="text-muted-foreground">
                Important information about using Cyber Learn AI
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {/* Educational Purpose */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-bold">Educational Purpose Only</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Cyber Learn AI provides cybersecurity education for <strong className="text-foreground">legitimate, defensive, and educational purposes only</strong>. The skills, techniques, and tools taught on this platform are intended to help individuals understand security concepts and protect systems—not to attack them.
                  </p>
                </div>

                {/* Legal Responsibility */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Legal Responsibility</h2>
                  </div>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      <strong className="text-foreground">You are solely responsible</strong> for how you use the knowledge gained from this platform. Unauthorized access to computer systems is illegal in Bangladesh and most countries worldwide.
                    </p>
                    <p>
                      Before testing any system, you must have explicit written authorization from the system owner. "I was learning" is not a legal defense.
                    </p>
                  </div>
                </div>

                {/* No Warranty */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">No Warranty</h2>
                  <p className="text-muted-foreground">
                    The platform and its content are provided "as is" without warranties of any kind. We do not guarantee that:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Content is error-free or complete</li>
                    <li>Platform will be uninterrupted or secure</li>
                    <li>Skills learned will result in employment</li>
                    <li>Certifications will be achieved</li>
                  </ul>
                </div>

                {/* Limitation of Liability */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Cyber Learn AI, its team, partners, and affiliates are not liable for:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Any illegal activities conducted by users</li>
                    <li>Damages resulting from the use or misuse of platform content</li>
                    <li>Loss of data, profits, or reputation</li>
                    <li>Third-party actions or content</li>
                  </ul>
                </div>

                {/* Lab Environments */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Practice Lab Disclaimer</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our practice labs are simulated environments. While we strive to make them realistic, they may not perfectly replicate real-world systems. Techniques that work in labs may behave differently in production environments.
                  </p>
                </div>

                {/* Bangladesh Law */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Applicable Laws</h2>
                  <p className="text-muted-foreground">
                    Users in Bangladesh are subject to the <strong className="text-foreground">ICT Act 2006</strong> and <strong className="text-foreground">Digital Security Act 2018</strong>. Unauthorized computer access, hacking, and related offenses carry serious penalties including imprisonment.
                  </p>
                </div>

                {/* Updates */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Changes to This Disclaimer</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify this disclaimer at any time. Continued use of the platform constitutes acceptance of any changes.
                  </p>
                </div>

                {/* Contact */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Questions about this disclaimer? Contact us at{" "}
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
