import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, MessageSquare, Trophy, BookOpen, Star, Clock, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const discussions = [
  {
    title: "How to start with Bug Bounty in Bangladesh?",
    author: "Rahim_Hacker",
    replies: 24,
    views: 456,
    time: "2 hours ago",
    tags: ["Bug Bounty", "Career"],
  },
  {
    title: "Best resources for OSCP preparation",
    author: "SecurityNinja",
    replies: 18,
    views: 312,
    time: "5 hours ago",
    tags: ["OSCP", "Certification"],
  },
  {
    title: "XSS challenge walkthrough - need help!",
    author: "NewbieHacker",
    replies: 32,
    views: 521,
    time: "1 day ago",
    tags: ["XSS", "Help"],
  },
  {
    title: "CTF team formation for upcoming competition",
    author: "CTFMaster",
    replies: 45,
    views: 678,
    time: "2 days ago",
    tags: ["CTF", "Team"],
  },
];

const leaderboard = [
  { rank: 1, name: "CyberWarrior_BD", points: 15420, badges: 28, level: "Elite" },
  { rank: 2, name: "HackTheBox_Pro", points: 14250, badges: 25, level: "Elite" },
  { rank: 3, name: "SecurityMaster", points: 13800, badges: 24, level: "Expert" },
  { rank: 4, name: "PentestKing", points: 12100, badges: 21, level: "Expert" },
  { rank: 5, name: "BugHunter_01", points: 11500, badges: 19, level: "Expert" },
  { rank: 6, name: "DhakaCyber", points: 10200, badges: 17, level: "Advanced" },
  { rank: 7, name: "EthicalHacker_BD", points: 9800, badges: 16, level: "Advanced" },
  { rank: 8, name: "RedTeamer", points: 9200, badges: 15, level: "Advanced" },
];

const studyGroups = [
  {
    name: "OSCP Study Group Bangladesh",
    members: 156,
    level: "Advanced",
    meetingTime: "Every Saturday 8PM",
    topics: ["Penetration Testing", "Buffer Overflow", "Privilege Escalation"],
  },
  {
    name: "Web Security Beginners",
    members: 324,
    level: "Beginner",
    meetingTime: "Every Wednesday 7PM",
    topics: ["OWASP Top 10", "SQL Injection", "XSS"],
  },
  {
    name: "CTF Practice Team",
    members: 89,
    level: "Intermediate",
    meetingTime: "Every Friday 9PM",
    topics: ["Cryptography", "Reverse Engineering", "Forensics"],
  },
];

const getRankColor = (rank: number) => {
  if (rank === 1) return "text-yellow-500";
  if (rank === 2) return "text-gray-400";
  if (rank === 3) return "text-amber-600";
  return "text-muted-foreground";
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                👥 Join the Community
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Connect with <span className="gradient-text">Bangladeshi Hackers</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of cybersecurity enthusiasts. Share knowledge, compete in challenges, and grow together in Bangladesh's largest ethical hacking community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg">
                  Join Community
                </Button>
                <Button variant="outline" size="lg">
                  Browse Discussions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "5,000+", label: "Active Members", icon: Users },
                { value: "1,200+", label: "Discussions", icon: MessageSquare },
                { value: "50+", label: "Study Groups", icon: BookOpen },
                { value: "Weekly", label: "Challenges", icon: Trophy },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-6 w-6 text-primary mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Discussions */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Discussions</h2>
                <Button variant="ghost" size="sm">View All →</Button>
              </div>
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      {discussion.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {discussion.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {discussion.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Leaderboard</h2>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                  >
                    <span className={`font-bold text-lg w-6 ${getRankColor(user.rank)}`}>
                      #{user.rank}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {user.points.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          {user.badges}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {user.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Study Groups */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Study Groups</h2>
              <Button variant="ghost" size="sm">Create Group →</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {studyGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{group.name}</h3>
                    <span className="text-xs px-2 py-1 bg-terminal-green/10 text-terminal-green rounded-full">
                      {group.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {group.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {group.meetingTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Join Group
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
