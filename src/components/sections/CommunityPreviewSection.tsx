import { Trophy, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const topLearners = [
  { 
    name: "Alex Chen", 
    level: "Advanced", 
    points: 2450, 
    progress: 100,
    medal: "🥇"
  },
  { 
    name: "Sarah Kim", 
    level: "Intermediate", 
    points: 2180, 
    progress: 89,
    medal: "🥈"
  },
  { 
    name: "Mike Johnson", 
    level: "Intermediate", 
    points: 1920, 
    progress: 78,
    medal: "🥉"
  },
];

const recentDiscussions = [
  {
    title: "Best resources for OSCP preparation?",
    author: "@SecurityNinja",
    replies: 24,
    time: "2h ago"
  },
  {
    title: "Explained: Buffer overflow basics",
    author: "@CyberMentor",
    replies: 18,
    time: "4h ago"
  },
  {
    title: "Weekly CTF Challenge #12 Solutions",
    author: "@HackTheBox",
    replies: 45,
    time: "1d ago"
  },
];

export function CommunityPreviewSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Learners */}
          <div className="rounded-xl border border-primary/30 bg-card/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                <h3 className="text-lg font-semibold font-mono">Top Learners This Week</h3>
              </div>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {topLearners.map((learner, index) => (
                <div key={learner.name} className="flex items-center gap-4">
                  <span className="text-2xl">{learner.medal}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium font-mono">{learner.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        learner.level === "Advanced" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {learner.level}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                        style={{ width: `${learner.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-primary font-mono text-sm">{learner.points} pts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="rounded-xl border border-primary/30 bg-card/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold font-mono">Recent Discussions</h3>
              </div>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div key={discussion.title} className="py-3 border-b border-border/50 last:border-0">
                  <h4 className="font-medium font-mono mb-2 hover:text-primary cursor-pointer transition-colors">
                    {discussion.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">{discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {discussion.replies} replies
                      </span>
                    </div>
                    <span>{discussion.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
