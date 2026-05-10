create table public.translation_cache (
  lang text not null,
  source_hash text not null,
  source_text text not null,
  translated_text text not null,
  created_at timestamptz not null default now(),
  primary key (lang, source_hash)
);

alter table public.translation_cache enable row level security;

create policy "Anyone can read translations"
  on public.translation_cache for select
  to anon, authenticated
  using (true);