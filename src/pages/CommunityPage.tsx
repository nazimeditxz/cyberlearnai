import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, MessageSquare, Clock, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDiscussions, useCreateDiscussion } from "@/hooks/useDiscussions";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: "general", label: "General" },
  { value: "help", label: "Help & Support" },
  { value: "career", label: "Career" },
  { value: "ctf", label: "CTF & Challenges" },
  { value: "tools", label: "Tools & Resources" },
  { value: "certifications", label: "Certifications" },
];

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  return `${diffDays} days ago`;
}

export default function CommunityPage() {
  const { data: discussions, isLoading } = useDiscussions();
  const createDiscussion = useCreateDiscussion();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategory, setNewCategory] = useState("general");

  const handleCreateDiscussion = async () => {
    if (!newTitle.trim() || !newContent.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      await createDiscussion.mutateAsync({
        title: newTitle,
        content: newContent,
        category: newCategory,
      });
      toast({
        title: "Success",
        description: "Discussion created successfully!",
      });
      setIsDialogOpen(false);
      setNewTitle("");
      setNewContent("");
      setNewCategory("general");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create discussion",
        variant: "destructive",
      });
    }
  };

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
                Connect with <span className="gradient-text">Cybersecurity Learners</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join the community of cybersecurity enthusiasts. Share knowledge, ask questions, and grow together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {user ? (
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="hero" size="lg">
                        <Plus className="h-4 w-4 mr-2" />
                        New Discussion
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Create New Discussion</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <Input
                            placeholder="Discussion title..."
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                          />
                        </div>
                        <div>
                          <Select value={newCategory} onValueChange={setNewCategory}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                  {cat.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Textarea
                            placeholder="Write your discussion content..."
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            rows={5}
                          />
                        </div>
                        <Button
                          onClick={handleCreateDiscussion}
                          disabled={createDiscussion.isPending}
                          className="w-full"
                        >
                          {createDiscussion.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          ) : null}
                          Post Discussion
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Link to="/auth">
                    <Button variant="hero" size="lg">
                      Join Community
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-card/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: discussions?.length || 0, label: "Discussions", icon: MessageSquare },
                { value: "5,000+", label: "Members", icon: Users },
                { value: "Daily", label: "New Posts", icon: Clock },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discussions */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
              
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : discussions?.length === 0 ? (
                <div className="text-center py-12 bg-card border border-border rounded-xl">
                  <MessageSquare className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">No discussions yet</p>
                  <p className="text-sm text-muted-foreground">Be the first to start a conversation!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {discussions?.map((discussion) => (
                    <Link
                      key={discussion.id}
                      to={`/discussion/${discussion.id}`}
                      className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all"
                    >
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {discussion.content}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full capitalize">
                          {discussion.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTimeAgo(discussion.created_at)}
                        </span>
                      </div>
                    </Link>
                  ))}
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
