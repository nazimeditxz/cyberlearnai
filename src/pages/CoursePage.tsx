import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCourse, useLessons, useUserProgress, useMarkLessonComplete } from "@/hooks/useCourses";
import { useAuth } from "@/contexts/AuthContext";
import { 
  BookOpen, Clock, BarChart3, Play, CheckCircle2, 
  Lock, ChevronLeft, Loader2 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

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

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { data: course, isLoading: courseLoading } = useCourse(courseId || "");
  const { data: lessons, isLoading: lessonsLoading } = useLessons(courseId || "");
  const { data: progress } = useUserProgress();
  const markComplete = useMarkLessonComplete();
  const { user } = useAuth();

  const completedLessons = lessons?.filter(
    (lesson) => progress?.some((p) => p.lesson_id === lesson.id && p.completed)
  ).length || 0;

  const progressPercent = lessons?.length ? (completedLessons / lessons.length) * 100 : 0;

  if (courseLoading || lessonsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/learn">
            <Button>Back to Courses</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Course Header */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <Link to="/learn" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border capitalize ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  {course.is_premium && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30">
                      Premium
                    </span>
                  )}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-muted-foreground mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {lessons?.length || 0} Lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {course.duration_hours || 0} Hours
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    {course.category}
                  </div>
                </div>
              </div>

              {user && (
                <div className="lg:w-80">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Your Progress</h3>
                    <Progress value={progressPercent} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {completedLessons} of {lessons?.length || 0} lessons completed
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="space-y-3">
              {lessons?.map((lesson, index) => {
                const isCompleted = progress?.some(
                  (p) => p.lesson_id === lesson.id && p.completed
                );
                const isLocked = lesson.is_premium && !user;

                return (
                  <div
                    key={lesson.id}
                    className={`bg-card border border-border rounded-xl p-5 transition-all ${
                      isLocked ? "opacity-60" : "hover:border-primary/50 cursor-pointer"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? "bg-terminal-green/20 text-terminal-green" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : isLocked ? (
                          <Lock className="h-5 w-5" />
                        ) : (
                          <span className="font-semibold">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {lesson.duration_minutes || 10} min
                        </p>
                      </div>
                      {!isLocked && user && !isCompleted && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markComplete.mutate(lesson.id)}
                          disabled={markComplete.isPending}
                        >
                          {markComplete.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-1" />
                              Start
                            </>
                          )}
                        </Button>
                      )}
                      {isLocked && (
                        <Link to="/auth">
                          <Button size="sm" variant="outline">
                            <Lock className="h-4 w-4 mr-1" />
                            Login
                          </Button>
                        </Link>
                      )}
                    </div>
                    
                    {lesson.content && !isLocked && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="prose prose-sm prose-invert max-w-none text-muted-foreground">
                          {lesson.content.slice(0, 200)}...
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
