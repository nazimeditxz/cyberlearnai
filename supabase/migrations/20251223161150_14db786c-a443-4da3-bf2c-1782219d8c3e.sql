-- Drop the existing permissive policy on quizzes
DROP POLICY IF EXISTS "Authenticated can view quizzes" ON public.quizzes;

-- Create a view that excludes the correct_answer field for client-side queries
CREATE OR REPLACE VIEW public.quizzes_public AS
SELECT 
  id,
  lesson_id,
  question,
  options,
  explanation,
  created_at
FROM public.quizzes;

-- Grant access to the view
GRANT SELECT ON public.quizzes_public TO authenticated;
GRANT SELECT ON public.quizzes_public TO anon;

-- Create a secure function to validate quiz answers (server-side only)
CREATE OR REPLACE FUNCTION public.check_quiz_answer(
  p_quiz_id uuid,
  p_selected_answer integer
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_correct_answer integer;
  v_explanation text;
  v_is_correct boolean;
BEGIN
  -- Get the correct answer from the quizzes table
  SELECT correct_answer, explanation
  INTO v_correct_answer, v_explanation
  FROM public.quizzes
  WHERE id = p_quiz_id;
  
  IF v_correct_answer IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Quiz not found'
    );
  END IF;
  
  v_is_correct := (p_selected_answer = v_correct_answer);
  
  RETURN jsonb_build_object(
    'success', true,
    'is_correct', v_is_correct,
    'correct_answer', v_correct_answer,
    'explanation', v_explanation
  );
END;
$$;

-- Create a restrictive RLS policy - only allow admins to see the full quizzes table directly
-- Regular users should use the quizzes_public view
CREATE POLICY "No direct quiz access for regular users" 
ON public.quizzes 
FOR SELECT 
USING (false);