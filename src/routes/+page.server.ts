import type { ServerLoad } from '@sveltejs/kit';
import { db } from '$lib/database/client';
import { aboutPictures, activities } from '$lib/database/schemas';
import { ne } from 'drizzle-orm';

export const load: ServerLoad = () => {
  return {
    activities: db.select().from(activities).where(ne(activities.retired, false)),
    aboutPictures: db.select().from(aboutPictures)
  };
};
