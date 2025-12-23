import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Clock, BarChart3, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/contexts/AuthContext";

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "beginner":
      return "text-terminal-green bg-terminal-green/10 border-terminal-green/30";
    case "intermediate":
      return "text-cyber-blue bg-cyber-blue/10 border-cyber-blue/30";
    case "advanced":
      return "text-accent bg-accent/10 border-accent/30";
    default:
      return "text-muted-foreground bg-secondary";
  }
};

export default function LearnPage() {
  const { data: courses, isLoading, error } = useCourses();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📚 Structured Learning Path
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Learn <span className="gradient-text">Cybersecurity</span> Step by Step
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From absolute beginner to job-ready ethical hacker. Our AI-powered curriculum adapts to your learning pace and guides you through comprehensive cybersecurity education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {!user ? (
                  <Link to="/auth">
                    <Button variant="hero" size="lg">
                      Start Learning Free
                    </Button>
                  </Link>
                ) : (
                  <Button variant="hero" size="lg">
                    Continue Learning
                  </Button>
                )}
                <Link to="/ai-assistant">
                  <Button variant="outline" size="lg">
                    Ask AI Tutor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive courses designed for students, covering everything from basics to advanced penetration testing.
              </p>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive">Failed to load courses. Please try again.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses?.map((course) => (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        {course.is_premium && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30">
                            <Lock className="h-3 w-3 inline mr-1" />
                            Premium
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border capitalize ${getDifficultyColor(course.difficulty)}`}>
                          {course.difficulty}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        {course.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration_hours || 0}h
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 lg:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Learning Journey</h2>
              <p className="text-muted-foreground">Follow our structured path from beginner to expert</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  { step: 1, title: "Foundation", desc: "Cybersecurity basics, networking, and Linux fundamentals" },
                  { step: 2, title: "Core Skills", desc: "Programming, web security, and cryptography" },
                  { step: 3, title: "Practical Training", desc: "Hands-on labs, CTF challenges, and simulated attacks" },
                  { step: 4, title: "Specialization", desc: "Choose your path: Red Team, Blue Team, or Security Research" },
                  { step: 5, title: "Career Ready", desc: "Portfolio building, certifications, and job preparation" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
