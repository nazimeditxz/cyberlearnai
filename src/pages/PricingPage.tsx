import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "৳0",
    period: "forever",
    description: "Perfect for getting started with cybersecurity basics",
    features: [
      { name: "5 Beginner Learning Modules", included: true },
      { name: "3 Basic Labs", included: true },
      { name: "Community Forum Access", included: true },
      { name: "AI Study Assistant (Limited)", included: true },
      { name: "Progress Tracking", included: true },
      { name: "Intermediate & Advanced Labs", included: false },
      { name: "Certificate of Completion", included: false },
      { name: "Mentorship Access", included: false },
      { name: "Career Guidance", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Student",
    price: "৳499",
    period: "/month",
    description: "Ideal for diploma and college students serious about learning",
    features: [
      { name: "All Learning Modules", included: true },
      { name: "20+ Intermediate Labs", included: true },
      { name: "Community Forum Access", included: true },
      { name: "AI Study Assistant (Unlimited)", included: true },
      { name: "Progress Tracking & Analytics", included: true },
      { name: "Certificate of Completion", included: true },
      { name: "Study Group Access", included: true },
      { name: "Mentorship Access", included: false },
      { name: "1-on-1 Career Guidance", included: false },
    ],
    cta: "Start Student Plan",
    popular: true,
  },
  {
    name: "Pro",
    price: "৳1,499",
    period: "/month",
    description: "For aspiring professionals pursuing certifications and careers",
    features: [
      { name: "Everything in Student", included: true },
      { name: "50+ Advanced Labs", included: true },
      { name: "Real-world Simulations", included: true },
      { name: "OSCP/CEH Prep Materials", included: true },
      { name: "Portfolio Builder", included: true },
      { name: "Verified Certificates", included: true },
      { name: "Mentorship Access", included: true },
      { name: "1-on-1 Career Guidance", included: true },
      { name: "Priority Support", included: true },
    ],
    cta: "Go Pro",
    popular: false,
  },
];

const comparison = [
  { feature: "Learning Modules", free: "5 Basic", student: "All Modules", pro: "All + Advanced" },
  { feature: "Labs Access", free: "3 Labs", student: "20+ Labs", pro: "50+ Labs" },
  { feature: "AI Assistant", free: "Limited", student: "Unlimited", pro: "Unlimited + Priority" },
  { feature: "Certificates", free: "❌", student: "✓", pro: "Verified" },
  { feature: "Mentorship", free: "❌", student: "❌", pro: "✓" },
  { feature: "Career Guidance", free: "❌", student: "Basic", pro: "1-on-1" },
  { feature: "Support", free: "Community", student: "Email", pro: "Priority" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                💰 Simple Pricing
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Affordable Plans for <span className="gradient-text">Every Student</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Start free and upgrade when you're ready. All plans include access to our community and AI-powered learning tools.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded-2xl p-6 ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-terminal-green flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground/50"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Plan Comparison</h2>
              <p className="text-muted-foreground">See what's included in each plan</p>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary">Student</th>
                    <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 text-sm">{row.feature}</td>
                      <td className="py-4 px-4 text-sm text-center text-muted-foreground">{row.free}</td>
                      <td className="py-4 px-4 text-sm text-center">{row.student}</td>
                      <td className="py-4 px-4 text-sm text-center text-terminal-green">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { q: "Can I switch plans anytime?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
                { q: "Is there a student discount?", a: "The Student plan is already discounted for Bangladeshi students. Verify your student status for additional benefits." },
                { q: "What payment methods do you accept?", a: "We accept bKash, Nagad, bank transfer, and international cards for your convenience." },
                { q: "Can I get a refund?", a: "We offer a 7-day money-back guarantee on all paid plans if you're not satisfied." },
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
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
