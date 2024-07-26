import type { Handle } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authHandler } from './auth';
import { env } from '$env/dynamic/private';

const dbHandler: Handle = async ({ event, resolve }) => {
  if (!event.locals.db) event.locals.db = drizzle(event.platform!.env.DB);

  return await resolve(event);
};

export const handle: Handle = sequence(dbHandler, authHandler);
