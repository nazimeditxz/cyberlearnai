import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeft, MessageSquare, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useDiscussion, useComments, useCreateComment } from "@/hooks/useDiscussions";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

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

export default function DiscussionPage() {
  const { discussionId } = useParams<{ discussionId: string }>();
  const { data: discussion, isLoading: discussionLoading } = useDiscussion(discussionId || "");
  const { data: comments, isLoading: commentsLoading } = useComments(discussionId || "");
  const createComment = useCreateComment();
  const { user } = useAuth();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;

    try {
      await createComment.mutateAsync({
        discussionId: discussionId || "",
        content: newComment,
      });
      setNewComment("");
      toast({
        title: "Success",
        description: "Comment posted!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to post comment",
        variant: "destructive",
      });
    }
  };

  if (discussionLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!discussion) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Discussion Not Found</h1>
          <Link to="/community">
            <Button>Back to Community</Button>
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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link to="/community" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Community
            </Link>

            {/* Discussion */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full capitalize">
                  {discussion.category}
                </span>
              </div>
              <h1 className="text-2xl font-bold mb-4">{discussion.title}</h1>
              <div className="prose prose-sm prose-invert max-w-none mb-4">
                <p className="text-muted-foreground whitespace-pre-wrap">{discussion.content}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {formatTimeAgo(discussion.created_at)}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {comments?.length || 0} comments
                </span>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              
              {commentsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : comments?.length === 0 ? (
                <div className="text-center py-8 bg-card border border-border rounded-xl">
                  <MessageSquare className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">No comments yet. Be the first to reply!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments?.map((comment) => (
                    <div key={comment.id} className="bg-card border border-border rounded-xl p-4">
                      <p className="text-sm mb-3 whitespace-pre-wrap">{comment.content}</p>
                      <div className="text-xs text-muted-foreground">
                        {formatTimeAgo(comment.created_at)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add Comment */}
            {user ? (
              <div className="bg-card border border-border rounded-xl p-4">
                <Textarea
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                  className="mb-3"
                />
                <Button
                  onClick={handleSubmitComment}
                  disabled={createComment.isPending || !newComment.trim()}
                >
                  {createComment.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  Post Comment
                </Button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <p className="text-muted-foreground mb-3">Login to join the discussion</p>
                <Link to="/auth">
                  <Button>Login / Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
