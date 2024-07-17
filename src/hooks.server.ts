import type { Handle } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.locals.db) event.locals.db = drizzle(event.platform!.env.DB);

  return await resolve(event);
};
