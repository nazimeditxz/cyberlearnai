import { Bot, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickPrompts = [
  "What is the CIA triad?",
  "Explain SQL injection",
  "Career path for pentesting",
  "Check my password strength",
];

export function AIChatPreviewSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Chat Container */}
          <div className="rounded-xl border border-primary/30 bg-card/50 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-mono">CyberLearn AI</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>Online • Ready to help</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs text-primary font-mono">Prototype</span>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 min-h-[300px]">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 h-fit">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 p-4 rounded-xl bg-secondary border border-border">
                  <p className="mb-4">
                    Hello! I'm your AI Cybersecurity Learning Assistant. I can help you with:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span>🔐</span>
                      <span>Explaining security concepts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>📁</span>
                      <span>Career guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🔑</span>
                      <span>Password security analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>Practice challenges</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground">
                    What would you like to learn about today?
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm font-mono hover:border-primary/50 hover:text-primary transition-all"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              
              {/* Input area */}
              <div className="flex gap-2">
                <div className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-muted-foreground font-mono text-sm">
                  Ask me anything about cybersecurity...
                </div>
                <Link to="/ai-assistant">
                  <Button variant="hero" className="px-6">
                    Try AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
