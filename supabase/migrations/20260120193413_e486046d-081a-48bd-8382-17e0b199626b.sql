-- Fix 1: Profiles table - restrict SELECT to only own profile
DROP POLICY IF EXISTS "Authenticated users can view profiles" ON public.profiles;
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Fix 2: Enable RLS on quizzes_public view by recreating it with proper security
-- Drop existing view
DROP VIEW IF EXISTS public.quizzes_public;

-- Recreate view with security_invoker to enforce caller's permissions
CREATE VIEW public.quizzes_public 
WITH (security_invoker = true)
AS 
SELECT 
  id,
  lesson_id,
  question,
  options,
  explanation,
  created_at
FROM public.quizzes;

-- Grant SELECT only to authenticated users
REVOKE ALL ON public.quizzes_public FROM anon;
GRANT SELECT ON public.quizzes_public TO authenticated;

-- Create RPC function to get quiz questions for a lesson (authenticated users only)
CREATE OR REPLACE FUNCTION public.get_quiz_questions(p_lesson_id uuid)
RETURNS TABLE (
  id uuid,
  lesson_id uuid,
  question text,
  options jsonb,
  created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT q.id, q.lesson_id, q.question, q.options, q.created_at
  FROM public.quizzes q
  WHERE q.lesson_id = p_lesson_id;
$$;