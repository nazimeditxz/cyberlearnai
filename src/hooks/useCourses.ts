import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Course {
  id: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  difficulty: string;
  category: string;
  is_premium: boolean;
  duration_hours: number | null;
  created_at: string;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  content: string | null;
  video_url: string | null;
  order_index: number;
  is_premium: boolean;
  duration_minutes: number | null;
}

export interface UserProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
  quiz_score: number | null;
}

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as Course[];
    },
  });
}

export function useCourse(courseId: string) {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .maybeSingle();
      
      if (error) throw error;
      return data as Course | null;
    },
    enabled: !!courseId,
  });
}

export function useLessons(courseId: string) {
  return useQuery({
    queryKey: ["lessons", courseId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index", { ascending: true });
      
      if (error) throw error;
      return data as Lesson[];
    },
    enabled: !!courseId,
  });
}

export function useUserProgress() {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ["user-progress", user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id);
      
      if (error) throw error;
      return data as UserProgress[];
    },
    enabled: !!user,
  });
}

export function useMarkLessonComplete() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (lessonId: string) => {
      if (!user) throw new Error("Must be logged in");
      
      const { error } = await supabase
        .from("user_progress")
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString(),
        }, {
          onConflict: "user_id,lesson_id"
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-progress"] });
    },
  });
}
