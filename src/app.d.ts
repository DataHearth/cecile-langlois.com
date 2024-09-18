import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      db: PostgresJsDatabase;
      supabase: SupabaseClient;
      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
      session: Session | null;
      user: User | null;
    }
    interface PageData {
      session: Session | null;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
