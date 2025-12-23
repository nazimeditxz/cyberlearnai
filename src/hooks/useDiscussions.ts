import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Discussion {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  upvotes: number;
  created_at: string;
  author_name?: string;
}

export interface Comment {
  id: string;
  discussion_id: string;
  user_id: string;
  content: string;
  created_at: string;
  author_name?: string;
}

export function useDiscussions() {
  return useQuery({
    queryKey: ["discussions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("discussions")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Discussion[];
    },
  });
}

export function useDiscussion(discussionId: string) {
  return useQuery({
    queryKey: ["discussion", discussionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("discussions")
        .select("*")
        .eq("id", discussionId)
        .maybeSingle();
      
      if (error) throw error;
      return data as Discussion | null;
    },
    enabled: !!discussionId,
  });
}

export function useComments(discussionId: string) {
  return useQuery({
    queryKey: ["comments", discussionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("discussion_id", discussionId)
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as Comment[];
    },
    enabled: !!discussionId,
  });
}

export function useCreateDiscussion() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ title, content, category }: { title: string; content: string; category: string }) => {
      if (!user) throw new Error("Must be logged in");
      
      const { data, error } = await supabase
        .from("discussions")
        .insert({
          user_id: user.id,
          title,
          content,
          category,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
    },
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ discussionId, content }: { discussionId: string; content: string }) => {
      if (!user) throw new Error("Must be logged in");
      
      const { data, error } = await supabase
        .from("comments")
        .insert({
          discussion_id: discussionId,
          user_id: user.id,
          content,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.discussionId] });
    },
  });
}
