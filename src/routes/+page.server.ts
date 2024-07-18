import type { ServerLoad } from '@sveltejs/kit';
import { activities } from '$lib/database/schemas';
import { ne } from 'drizzle-orm';

export const load: ServerLoad = ({ locals: { db } }) => {
  return {
    activities: db.select().from(activities).where(ne(activities.retired, false))
  };
};
