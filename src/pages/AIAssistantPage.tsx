import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bot, Send, Sparkles, BookOpen, Shield, Code, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sampleConversations = [
  {
    user: "What is SQL injection and how can I prevent it?",
    ai: "SQL Injection is a code injection technique that exploits vulnerabilities in database queries. Attackers insert malicious SQL code through user inputs.\n\n**Prevention methods:**\n1. Use parameterized queries (prepared statements)\n2. Validate and sanitize all user inputs\n3. Use ORM frameworks\n4. Implement least privilege for database accounts\n5. Use Web Application Firewalls (WAF)\n\nWould you like me to show you a practical example in our SQL Injection lab?",
  },
  {
    user: "How do I start learning ethical hacking?",
    ai: "Great question! Here's a recommended learning path:\n\n**Phase 1: Foundation (1-2 months)**\n- Networking basics (TCP/IP, OSI Model)\n- Linux command line\n- Basic programming (Python)\n\n**Phase 2: Core Skills (2-3 months)**\n- Web application security (OWASP Top 10)\n- Cryptography basics\n- Security tools (Nmap, Burp Suite)\n\n**Phase 3: Hands-on (Ongoing)**\n- Practice in our CTF labs\n- Join the community\n- Build your portfolio\n\nI recommend starting with our 'Cybersecurity Fundamentals' module. Shall I guide you there?",
  },
];

const capabilities = [
  {
    icon: BookOpen,
    title: "Study Assistance",
    description: "Get explanations for any cybersecurity concept from beginner to advanced",
  },
  {
    icon: Code,
    title: "Code Help",
    description: "Understand security scripts, exploit code, and defensive programming",
  },
  {
    icon: Shield,
    title: "Lab Guidance",
    description: "Receive hints and guidance while completing labs without spoilers",
  },
  {
    icon: HelpCircle,
    title: "Career Advice",
    description: "Get personalized career path recommendations and certification guidance",
  },
];

const suggestedQuestions = [
  "What is the difference between Red Team and Blue Team?",
  "How do I prepare for the CEH certification?",
  "Explain buffer overflow in simple terms",
  "What tools should I learn for penetration testing?",
  "How do I set up a safe hacking lab at home?",
  "What is OWASP Top 10?",
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                <Sparkles className="h-3 w-3" />
                AI-Powered Learning
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Your Personal <span className="gradient-text">Cybersecurity Tutor</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant help with any cybersecurity topic. Our AI assistant explains concepts, guides you through labs, and helps you learn at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Chat */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Try the AI Assistant</h2>
                <p className="text-muted-foreground">See how the AI can help you learn</p>
              </div>

              {/* Chat Window */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-secondary/50 border-b border-border p-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Cyber Learn AI Assistant</h3>
                    <p className="text-xs text-terminal-green">● Online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-6 max-h-[500px] overflow-y-auto">
                  {sampleConversations.map((conv, index) => (
                    <div key={index} className="space-y-4">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                          <p className="text-sm">{conv.user}</p>
                        </div>
                      </div>
                      {/* AI Response */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 p-2 bg-secondary rounded-lg h-fit">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                          <p className="text-sm whitespace-pre-line">{conv.ai}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask me anything about cybersecurity..." 
                      className="flex-1"
                    />
                    <Button variant="hero">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Suggested Questions */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold mb-4 text-center">Try asking:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="px-3 py-2 bg-secondary rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-card/50 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn with AI?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Sign up now and get unlimited access to our AI assistant. Learn faster, practice smarter.
            </p>
            <Button variant="hero" size="lg">
              Get Started Free
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
