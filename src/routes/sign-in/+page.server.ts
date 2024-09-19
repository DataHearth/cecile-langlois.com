import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { supabase } from '$lib/supabase';
import { login } from '$lib/schemas';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
  const form = await superValidate(zod(login));

  return { form };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(login));

    if (!form.valid) return fail(400, { form });

    const { error } = await supabase.auth.signInWithOtp({
      email: form.data.email,
      options: {
        shouldCreateUser: false
      }
    });

    if (error) return fail(500, { form });

    return redirect(303, '/sign-in/confirmation');
  }
};
