import type { ServerLoad } from '@sveltejs/kit';
import { activity, activityImage, carouselImage } from '$lib/database/schemas';
import { eq, ne } from 'drizzle-orm';

export const load: ServerLoad = async ({ locals: { db } }) => {
  const activities = db
    .select()
    .from(activity)
    .where(ne(activity.retired, false))
    .innerJoin(activityImage, eq(activity.id, activityImage.id));
  const carouselImgs = db.select().from(carouselImage);

  return {
    carouselImgs: carouselImgs as unknown as Promise<typeof carouselImgs._.result>,
    activities: activities as unknown as Promise<typeof activities._.result>
  };
};
