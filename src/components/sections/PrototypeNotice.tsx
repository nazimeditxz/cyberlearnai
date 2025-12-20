import { AlertTriangle } from "lucide-react";

export function PrototypeNotice() {
  return (
    <section className="py-12 bg-warning/5 border-y border-warning/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-warning" />
            <span className="font-semibold text-warning">Prototype Version</span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            This platform is currently a prototype demonstrating the full potential of an AI-powered Cybersecurity Learning Platform for Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
}
