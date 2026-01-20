export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_chat_history: {
        Row: {
          created_at: string
          id: string
          message: string
          response: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          response: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          response?: string
          user_id?: string
        }
        Relationships: []
      }
      certificates: {
        Row: {
          certificate_number: string
          course_id: string
          id: string
          issued_at: string
          user_id: string
        }
        Insert: {
          certificate_number: string
          course_id: string
          id?: string
          issued_at?: string
          user_id: string
        }
        Update: {
          certificate_number?: string
          course_id?: string
          id?: string
          issued_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          discussion_id: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          discussion_id: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          discussion_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          category: string
          created_at: string
          description: string | null
          difficulty: string
          duration_hours: number | null
          id: string
          is_premium: boolean
          thumbnail_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          difficulty?: string
          duration_hours?: number | null
          id?: string
          is_premium?: boolean
          thumbnail_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          difficulty?: string
          duration_hours?: number | null
          id?: string
          is_premium?: boolean
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      discussions: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
          upvotes: number
          user_id: string
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          id?: string
          title: string
          updated_at?: string
          upvotes?: number
          user_id: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          upvotes?: number
          user_id?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          content: string | null
          course_id: string
          created_at: string
          duration_minutes: number | null
          id: string
          is_premium: boolean
          order_index: number
          title: string
          video_url: string | null
        }
        Insert: {
          content?: string | null
          course_id: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_premium?: boolean
          order_index?: number
          title: string
          video_url?: string | null
        }
        Update: {
          content?: string | null
          course_id?: string
          created_at?: string
          duration_minutes?: number | null
          id?: string
          is_premium?: boolean
          order_index?: number
          title?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quizzes: {
        Row: {
          correct_answer: number
          created_at: string
          explanation: string | null
          id: string
          lesson_id: string
          options: Json
          question: string
        }
        Insert: {
          correct_answer: number
          created_at?: string
          explanation?: string | null
          id?: string
          lesson_id: string
          options?: Json
          question: string
        }
        Update: {
          correct_answer?: number
          created_at?: string
          explanation?: string | null
          id?: string
          lesson_id?: string
          options?: Json
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string
          id: string
          lesson_id: string
          quiz_score: number | null
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id: string
          quiz_score?: number | null
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id?: string
          quiz_score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          active: boolean
          created_at: string
          expires_at: string | null
          id: string
          plan_type: string
          started_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_type?: string
          started_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_type?: string
          started_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      quizzes_public: {
        Row: {
          created_at: string | null
          explanation: string | null
          id: string | null
          lesson_id: string | null
          options: Json | null
          question: string | null
        }
        Insert: {
          created_at?: string | null
          explanation?: string | null
          id?: string | null
          lesson_id?: string | null
          options?: Json | null
          question?: string | null
        }
        Update: {
          created_at?: string | null
          explanation?: string | null
          id?: string | null
          lesson_id?: string | null
          options?: Json | null
          question?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      check_quiz_answer: {
        Args: { p_quiz_id: string; p_selected_answer: number }
        Returns: Json
      }
      get_quiz_questions: {
        Args: { p_lesson_id: string }
        Returns: {
          created_at: string
          id: string
          lesson_id: string
          options: Json
          question: string
        }[]
      }
      has_premium_access: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
