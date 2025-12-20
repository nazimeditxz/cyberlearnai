import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    Cyber Learn AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p><strong className="text-foreground">Personal Information:</strong> Name, email address, and contact details you provide during registration.</p>
                    <p><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including progress, completed labs, and learning patterns.</p>
                    <p><strong className="text-foreground">Device Information:</strong> IP address, browser type, and device identifiers for security and analytics.</p>
                    <p><strong className="text-foreground">Payment Information:</strong> Processed securely through third-party payment providers. We do not store full payment card details.</p>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">How We Use Your Information</h2>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Provide and improve our educational services</li>
                    <li>Personalize your learning experience</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information and updates</li>
                    <li>Respond to inquiries and offer support</li>
                    <li>Monitor usage patterns for platform improvement</li>
                    <li>Protect against fraudulent or unauthorized activity</li>
                  </ul>
                </div>

                {/* Data Protection */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Data Protection</h2>
                  </div>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Your Rights</h2>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">Contact Us</h2>
                  </div>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="text-primary mt-2">privacy@cyberlearnai.com</p>
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
