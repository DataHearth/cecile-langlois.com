import { fail, message, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { activity } from '$lib/schemas';

export const load: PageServerLoad = async () => {
  const addActivityForm = await superValidate(zod(activity.add));

  return { addActivityForm };
};

export const actions: Actions = {
  addActivity: async ({ request }) => {
    const activityForm = await superValidate(request, zod(activity.add));

    if (!activityForm.valid) return fail(400, { activityForm });

    return message(activityForm, "L'activité a été ajoutée avec succès !");
  }
};
