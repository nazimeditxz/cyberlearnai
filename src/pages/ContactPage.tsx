import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@cyberlearnai.com",
    subtext: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Dhaka, Bangladesh",
    subtext: "Operating remotely nationwide",
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: "9 AM - 10 PM BST",
    subtext: "Saturday to Thursday",
  },
  {
    icon: MessageSquare,
    title: "Community",
    details: "Discord Server",
    subtext: "Join 5,000+ members",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📬 Get in Touch
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact <span className="gradient-text">Cyber Learn AI</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our platform, courses, or partnership opportunities? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[150px]"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-primary text-sm mb-1">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.subtext}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Prompt */}
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Looking for Quick Answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check our FAQ section for common questions about courses, labs, certifications, and more.
                </p>
                <Button variant="outline" asChild>
                  <a href="/resources">View FAQ →</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest cybersecurity news, tips, and platform updates.
                </p>
                <div className="flex gap-3">
                  {["Facebook", "YouTube", "LinkedIn", "Discord"].map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/80 cursor-pointer transition-all"
                    >
                      {platform}
                    </span>
                  ))}
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
