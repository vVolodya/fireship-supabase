import { execSync } from 'child_process';
import detect from 'detect-port';

export const setupE2eTest = async () => {
  await startSupabase();
  reseedDB();
}

const startSupabase = async () => {
  const port = await detect(64321);

  if (port !== 64321) return;

  console.warn('Supabase noot detected - Starting it now');

  execSync('npx supabase start');
}

const reseedDB = () => {
  execSync(
    'SET PGPASSWORD=postgres&&psql -U postgres -h 127.0.0.1 -p 54322 -f supabase/clear-db-data.sql', 
    { stdio: 'ignore' }
  );
}