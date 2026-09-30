-- Remove overly permissive SELECT policies.
-- contact_submissions: visitors only INSERT; nobody reads via the Data API,
-- so the authenticated SELECT policy is dropped entirely.
DROP POLICY IF EXISTS "Authenticated users can read submissions" ON public.contact_submissions;

-- translation_cache: reads and writes happen in the translate-batch edge
-- function with the service role (which bypasses RLS), so public SELECT
-- access is not needed.
DROP POLICY IF EXISTS "Anyone can read translations" ON public.translation_cache;

-- Tighten grants to match: no table reads for anon/authenticated.
REVOKE SELECT ON public.contact_submissions FROM authenticated;
REVOKE SELECT ON public.translation_cache FROM anon, authenticated;