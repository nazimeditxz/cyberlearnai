-- Drop the view and recreate without security definer issues
DROP VIEW IF EXISTS public.quizzes_public;

-- Create a simple view (not security definer) that excludes correct_answer
-- Views inherit the RLS of the underlying table by default
CREATE VIEW public.quizzes_public AS
SELECT 
  id,
  lesson_id,
  question,
  options,
  explanation,
  created_at
FROM public.quizzes;

-- Set the view to use the invoker's permissions (not definer)
ALTER VIEW public.quizzes_public SET (security_invoker = on);

-- Grant access to the view
GRANT SELECT ON public.quizzes_public TO authenticated;
GRANT SELECT ON public.quizzes_public TO anon;

-- Update the RLS policy on the base quizzes table to allow access for the view to work
DROP POLICY IF EXISTS "No direct quiz access for regular users" ON public.quizzes;

-- Allow authenticated users to access the base table (view will filter columns)
CREATE POLICY "Authenticated can access quizzes" 
ON public.quizzes 
FOR SELECT 
TO authenticated
USING (true);