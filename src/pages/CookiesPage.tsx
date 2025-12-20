import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const cookieTypes = [
  {
    icon: Shield,
    name: "Essential Cookies",
    description: "Required for the platform to function. These cannot be disabled.",
    examples: ["Session management", "Authentication", "Security tokens"],
    canDisable: false,
  },
  {
    icon: BarChart,
    name: "Analytics Cookies",
    description: "Help us understand how users interact with the platform to improve our services.",
    examples: ["Page views", "Feature usage", "Learning progress patterns"],
    canDisable: true,
  },
  {
    icon: Settings,
    name: "Preference Cookies",
    description: "Remember your settings and preferences for a better experience.",
    examples: ["Theme preference", "Language settings", "Layout preferences"],
    canDisable: true,
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Cookie className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
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
                {/* What are Cookies */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                  </p>
                </div>

                {/* Cookie Types */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    {cookieTypes.map((cookie, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <cookie.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">{cookie.name}</h3>
                          </div>
                          {cookie.canDisable ? (
                            <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                              Optional
                            </span>
                          ) : (
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {cookie.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cookie.examples.map((example, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Managing Cookies */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-muted-foreground mb-4">
                    You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">Accept All</Button>
                    <Button variant="outline" size="sm">Essential Only</Button>
                    <Button variant="ghost" size="sm">Cookie Settings</Button>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Third-Party Cookies</h2>
                  <p className="text-muted-foreground">
                    We may use third-party services that set their own cookies, including:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
                    <li>• Analytics providers to understand platform usage</li>
                    <li>• Payment processors for secure transactions</li>
                    <li>• Authentication services for login functionality</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Questions about our cookie policy? Contact us at{" "}
                    <span className="text-primary">privacy@cyberlearnai.com</span>
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
