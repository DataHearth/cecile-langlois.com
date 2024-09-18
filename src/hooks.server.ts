import { DB_URL } from '$env/static/private';
import { PUBLIC_SUPABASE_ANON, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const dbHandler: Handle = async ({ event, resolve }) => {
  if (!event.locals.db) event.locals.db = drizzle(postgres(DB_URL));

  return await resolve(event);
};

const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON, {
    cookies: {
      getAll: () => event.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          event.cookies.set(name, value, { ...options, path: '/' });
        });
      }
    }
  });

  event.locals.safeGetSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    if (!session) return { session: null, user: null };

    const {
      data: { user },
      error
    } = await event.locals.supabase.auth.getUser();
    if (error) return { session: null, user: null };

    return { session, user };
  };

  return resolve(event, {
    filterSerializedResponseHeaders: (name) =>
      name === 'content-range' || name === 'x-supabase-api-version'
  });
};

const authGuard: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession();
  event.locals.session = session;
  event.locals.user = user;

  if (!event.locals.session && event.url.pathname.startsWith('/admin')) redirect(303, '/sign-in');
  if (event.locals.session && event.url.pathname.startsWith('/sign-in')) redirect(303, '/');

  return resolve(event);
};

export const handle: Handle = sequence(dbHandler, supabase, authGuard);
