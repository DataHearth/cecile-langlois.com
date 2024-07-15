import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { SUPABASE_DB_URL } from '$env/static/private';

export const client = postgres(SUPABASE_DB_URL, { prepare: false });
export const db = drizzle(client);
