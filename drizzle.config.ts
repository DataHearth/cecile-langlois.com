import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/database/schemas.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: { url: process.env.SUPABASE_DB_URL! }
});
