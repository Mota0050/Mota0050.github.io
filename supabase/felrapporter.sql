-- Remissnissen: tabell för felrapporter.
-- Kör hela filen en gång i Supabase: Dashboard → SQL Editor → New query → klistra in → Run.
-- Inloggade användare kan skicka rapporter men inte läsa några, inte ens sina egna.
-- Du läser dem själv under Table Editor → reports (där gäller inte radskyddet för dig som ägare).

create table if not exists public.reports (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kind        text not null check (char_length(kind) between 1 and 60),
  place       text check (char_length(place) <= 200),
  url         text check (char_length(url) <= 500),
  description text not null check (char_length(description) between 1 and 3000),
  handled     boolean not null default false
);

alter table public.reports enable row level security;

drop policy if exists "Inloggade kan skicka felrapporter" on public.reports;
create policy "Inloggade kan skicka felrapporter"
  on public.reports for insert
  to authenticated
  with check (user_id = auth.uid());

-- Ingen select-, update- eller delete-policy: rapporterna går bara att läsa i Supabase-panelen.

-- Begränsa mängden: högst 20 rapporter per användare och dygn.
create or replace function public.reports_rate_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.reports
        where user_id = new.user_id and created_at > now() - interval '1 day') >= 20 then
    raise exception 'För många felrapporter. Försök igen i morgon.';
  end if;
  return new;
end $$;

drop trigger if exists reports_rate_limit on public.reports;
create trigger reports_rate_limit before insert on public.reports
  for each row execute function public.reports_rate_limit();

-- Rätt att lägga till rader (klienten skickar bara insert, utan att läsa tillbaka raden).
grant insert on public.reports to authenticated;
