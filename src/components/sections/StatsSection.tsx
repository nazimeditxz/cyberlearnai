const stats = [
  { value: "500+", label: "Learning Modules" },
  { value: "50+", label: "Practice Labs" },
  { value: "1000+", label: "Students (Coming Soon)" },
  { value: "100%", label: "Free to Start" },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
