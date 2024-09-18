<script>
  import { cn } from '$lib/utils';
  import CircleAlert from 'lucide-svelte/icons/circle-alert';
  import { superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import { loginSchema } from '$lib/schemas';

  export let data;

  const { form, errors, enhance } = superForm(data.form, {
    validators: zod(loginSchema)
  });
</script>

<div class="flex min-h-full">
  <div
    class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
  >
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img
          class="h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Connexion à votre compte
        </h2>
      </div>

      <div class="mt-10">
        <div>
          <form method="POST" class="space-y-6" use:enhance>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                Adresse e-mail
              </label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class={cn(
                    'block w-full rounded-md border-0 py-1.5 pr-10  ring-1 ring-inset  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                    $errors.email &&
                      'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  )}
                  aria-invalid={$errors.email ? 'true' : 'false'}
                  aria-describedby={$errors.email ? 'email-error' : undefined}
                  bind:value={$form.email}
                />
                {#if $errors.email}
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                {/if}
              </div>
              {#if $errors.email}
                <p class="mt-2 text-sm text-red-600">{$errors.email}</p>
              {/if}
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="relative hidden w-0 flex-1 lg:block">
    <img
      class="absolute inset-0 h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
      alt=""
    />
  </div>
</div>
