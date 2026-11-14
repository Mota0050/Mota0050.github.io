-- Remissnissen: kontrollera säkerheten i databasen. Kör i Supabase SQL Editor; frågorna ändrar ingenting.

-- 1. Radskydd (RLS) ska vara påslaget för alla tre tabellerna (rowsecurity = true).
select tablename, rowsecurity from pg_tables
 where schemaname = 'public' and tablename in ('progress','profiles','reports');

-- 2. Reglerna. För progress ska select, insert och update bara gälla egen rad: qual/with_check ska innehålla auth.uid() = user_id.
select tablename, policyname, cmd, roles, qual, with_check from pg_policies
 where schemaname = 'public' and tablename in ('progress','profiles','reports')
 order by tablename, cmd;

-- 3. Funktionerna som sidan anropar. delete_own_account ska bara kunna ta bort den inloggade (auth.uid()).
select p.proname, p.prosecdef as security_definer, pg_get_functiondef(p.oid) as definition
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public' and p.proname in ('username_available','delete_own_account');
