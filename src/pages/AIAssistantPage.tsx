import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bot, Send, Sparkles, BookOpen, Shield, Code, HelpCircle, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAIChat } from "@/hooks/useAIChat";
import { useToast } from "@/hooks/use-toast";

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
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage, clearMessages } = useAIChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const message = input;
    setInput("");
    await sendMessage(message);
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 lg:py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                <Sparkles className="h-3 w-3" />
                AI-Powered Learning
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Your Personal <span className="gradient-text">Cybersecurity Tutor</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Get instant help with any cybersecurity topic. Ask questions, get explanations, and learn at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-8 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto mb-2">
                    <cap.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Chat Window */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-secondary/50 border-b border-border p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Cyber Learn AI Tutor</h3>
                      <p className="text-xs text-terminal-green">● Online</p>
                    </div>
                  </div>
                  {messages.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearMessages}>
                      <Trash2 className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
                  {messages.length === 0 ? (
                    <div className="text-center py-12">
                      <Bot className="h-12 w-12 text-primary/30 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">No messages yet</p>
                      <p className="text-sm text-muted-foreground">
                        Ask me anything about cybersecurity!
                      </p>
                    </div>
                  ) : (
                    messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "gap-3"}`}>
                        {msg.role === "assistant" && (
                          <div className="flex-shrink-0 p-2 bg-secondary rounded-lg h-fit">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-sm"
                            : "bg-secondary rounded-tl-sm"
                        }`}>
                          <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && messages[messages.length - 1]?.role === "user" && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 p-2 bg-secondary rounded-lg h-fit">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="border-t border-border p-4">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input 
                      placeholder="Ask me anything about cybersecurity..." 
                      className="flex-1"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                    />
                    <Button type="submit" variant="hero" disabled={isLoading || !input.trim()}>
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Suggested Questions */}
              {messages.length === 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-3 text-center">Try asking:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(question)}
                        className="px-3 py-2 bg-secondary rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
