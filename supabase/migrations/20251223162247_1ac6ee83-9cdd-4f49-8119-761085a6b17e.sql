-- 1. Fix profiles table: require authentication to view profiles
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
CREATE POLICY "Authenticated users can view profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (true);

-- 2. Create user_subscriptions table for premium content verification
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  plan_type TEXT NOT NULL DEFAULT 'free',
  active BOOLEAN NOT NULL DEFAULT false,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS on user_subscriptions
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can view their own subscription
CREATE POLICY "Users can view own subscription" 
ON public.user_subscriptions 
FOR SELECT 
USING (auth.uid() = user_id);

-- Users can insert their own subscription (for signup)
CREATE POLICY "Users can insert own subscription" 
ON public.user_subscriptions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 3. Create security definer function to check premium access
CREATE OR REPLACE FUNCTION public.has_premium_access(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_subscriptions
    WHERE user_id = _user_id
      AND active = true
      AND (expires_at IS NULL OR expires_at > now())
  )
$$;

-- 4. Fix lessons table: update premium policy to check subscription
DROP POLICY IF EXISTS "Authenticated can view premium lessons" ON public.lessons;
CREATE POLICY "Premium subscribers can view premium lessons" 
ON public.lessons 
FOR SELECT 
TO authenticated
USING (
  is_premium = false 
  OR public.has_premium_access(auth.uid())
);

-- 5. Fix quizzes_public view - drop and recreate with proper security
DROP VIEW IF EXISTS public.quizzes_public;
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

-- Grant access to the view for authenticated users
GRANT SELECT ON public.quizzes_public TO authenticated;

-- 6. Update quizzes table policy to be more restrictive (only allow via function)
DROP POLICY IF EXISTS "Authenticated can access quizzes" ON public.quizzes;
CREATE POLICY "No direct quiz access" 
ON public.quizzes 
FOR SELECT 
TO authenticated
USING (false);

-- Add trigger for updated_at on user_subscriptions
CREATE TRIGGER update_user_subscriptions_updated_at
BEFORE UPDATE ON public.user_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();