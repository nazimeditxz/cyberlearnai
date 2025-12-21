import { Users, MessageSquare, Award, TrendingUp } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    value: "2,500+", 
    label: "Active Learners" 
  },
  { 
    icon: MessageSquare, 
    value: "850+", 
    label: "Discussions" 
  },
  { 
    icon: Award, 
    value: "120+", 
    label: "Badges Earned" 
  },
  { 
    icon: TrendingUp, 
    value: "95%", 
    label: "Success Rate" 
  },
];

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="relative p-6 md:p-8 rounded-xl border border-primary/30 bg-card/50 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-foreground font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
