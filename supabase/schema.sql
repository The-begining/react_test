-- Supabase schema for portfolio
-- Tables: contacts, page_views_daily
-- Storage: private buckets media, documents (served via your Netlify Function)
-- Policies: anon insert-only for contacts (no public reads), page view managed via server
-- RPC: increment_page_view(path, is_bot)

-- Extensions (gen_random_uuid)
create extension if not exists pgcrypto;

-- =============================
-- Contacts
-- =============================
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  phone text,
  message text not null,
  source_path text,
  user_agent text,
  ip_hash text,
  is_bot boolean not null default false
);

alter table public.contacts enable row level security;

-- Allow only INSERT for anonymous users (browser). No public SELECT.
-- Your Netlify Function will use the service role key and can bypass RLS as needed.
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'contacts' and policyname = 'contacts_insert_anon'
  ) then
    create policy contacts_insert_anon
    on public.contacts for insert to anon
    with check (true);
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'contacts' and policyname = 'contacts_no_select_anon'
  ) then
    create policy contacts_no_select_anon
    on public.contacts for select to anon
    using (false);
  end if;
end $$;

-- Helpful indexes
create index if not exists contacts_created_at_idx on public.contacts (created_at desc);
create index if not exists contacts_email_idx on public.contacts (email);

-- =============================
-- Page views (daily aggregates + bot split)
-- =============================
create table if not exists public.page_views_daily (
  id uuid primary key default gen_random_uuid(),
  date date not null default (now() at time zone 'utc')::date,
  path text not null,
  total_count integer not null default 0,
  bot_count integer not null default 0,
  unique (path, date)
);

alter table public.page_views_daily enable row level security;

-- By default, do not allow anon to modify or read. Your Netlify Function will update with service role.
-- Uncomment below if you ever want client-side upserts.
-- create policy pvd_upsert_anon on public.page_views_daily for insert to anon
--   with check (char_length(path) between 1 and 255);
-- create policy pvd_update_anon on public.page_views_daily for update to anon
--   using (char_length(path) between 1 and 255) with check (true);
-- create policy pvd_select_public on public.page_views_daily for select to anon
--   using (true);

-- Explicitly deny SELECT for anon to satisfy "RLS enabled, no policy" suggestion
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'page_views_daily' and policyname = 'pvd_no_select_anon'
  ) then
    create policy pvd_no_select_anon
    on public.page_views_daily for select to anon
    using (false);
  end if;
end $$;

create index if not exists pvd_date_idx on public.page_views_daily (date desc);
create index if not exists pvd_path_idx on public.page_views_daily (path);

-- Optional: totals view (handy for charts)
create or replace view public.page_views_totals
  with (security_invoker = on) as
select
  path,
  sum(total_count) as total_count,
  sum(bot_count) as bot_count
from public.page_views_daily
group by path;

-- =============================
-- RPC: increment page view (can be called from server or optionally anon)
-- =============================
create or replace function public.increment_page_view(p_path text, p_is_bot boolean default false)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_path is null or length(p_path) = 0 then
    return;
  end if;

  insert into public.page_views_daily (path, total_count, bot_count)
  values (left(p_path, 255), 1, case when p_is_bot then 1 else 0 end)
  on conflict (path, date)
  do update set
    total_count = public.page_views_daily.total_count + 1,
    bot_count = public.page_views_daily.bot_count + (case when p_is_bot then 1 else 0 end);
end;
$$;

-- Grant to anon only if you plan to call directly from the browser (not recommended):
-- grant execute on function public.increment_page_view(text, boolean) to anon;

-- =============================
-- Storage buckets: private media and documents
-- (Access via your Netlify Function using the service role key.)
-- =============================
insert into storage.buckets (id, name, public)
values ('media', 'media', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

-- No public policies needed since access is proxied via server. Defaults deny anon.
-- If you later want signed URL access, keep buckets private and generate signed URLs
-- from the server. Do NOT enable public read.

-- =============================
-- Optional helper: soft cleanup for very old views (run manually / via cron)
-- =============================
-- delete from public.page_views_daily where date < (now() at time zone 'utc')::date - interval '2 years';


