<script lang="ts">
  import Menu from 'lucide-svelte/icons/menu';
  import LogOut from 'lucide-svelte/icons/log-out';
  import MailCheck from 'lucide-svelte/icons/mail-check';
  import Mail from 'lucide-svelte/icons/mail';
  import Send from 'lucide-svelte/icons/send';
  import X from 'lucide-svelte/icons/x';
  import { cn } from '$lib/utils';
  import { page } from '$app/stores';
  import { signIn, signOut } from '@auth/sveltekit/client';

  let openMenu = false;
  let openAuth = false;
  let email: string;

  const links = [
    { link: '/', label: 'Accueil' },
    { link: '#about', label: 'À propos' },
    { link: '#activities', label: 'Mes sorties' },
    { link: '#contact', label: 'Contact' }
  ];
</script>

<header class="fixed inset-x-0 top-0 z-20 rounded-b-md bg-white px-10 py-3 shadow-md lg:mx-14">
  <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <h1 class="text-lg font-semibold lg:text-2xl">Cécile Langlois</h1>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        on:click={() => {
          openMenu = true;
        }}
      >
        <span class="sr-only">Ouvrir le menu</span>
        <Menu class="h-6 w-6" stroke-width="1.5" aria-hidden="true" />
      </button>
    </div>
    <div class="hidden items-center lg:flex lg:gap-x-12">
      {#each links as l}
        <a
          href={l.link}
          class="text-md leading-6 text-gray-900 hover:text-blue-800 hover:underline hover:underline-offset-8"
          >{l.label}</a
        >
      {/each}
      {#if $page.data.session}
        <button
          class="text-md inline-flex items-center gap-x-2 rounded-md border border-slate-200 px-3.5 py-2.5 shadow-md hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
          on:click={() => signOut()}
        >
          Déconnexion
          <LogOut class="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      {:else}
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:ring-blue-300"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              on:click={() => (openAuth = !openAuth)}
            >
              Connexion
              <MailCheck
                class="-mr-1 h-5 w-5 text-gray-400 group-hover:text-blue-400"
                aria-hidden="true"
              />
            </button>
          </div>

          <div
            class={cn(
              'absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              !openAuth && 'hidden'
            )}
          >
            <div class="flex rounded-md shadow-sm">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email-desktop"
                  required
                  bind:value={email}
                  aria-required="true"
                  class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="john@gmail.com"
                />
              </div>
              <button
                class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-green-200"
                on:click={() => signIn('sendgrid', { email })}
              >
                <Send class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </nav>

  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class={cn('lg:hidden', !openMenu && 'hidden')} role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-50"></div>
    <div
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
          on:click={() => {
            openMenu = false;
          }}
        >
          <span class="sr-only">Fermer le menu</span>
          <X class="h-6 w-6" stroke-width="1.5" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            {#each links as l}
              <a
                href={l.link}
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {l.label}
              </a>
            {/each}
            {#if $page.data.session}
              <button
                class="text-md inline-flex items-center gap-x-2 rounded-md border border-slate-200 px-3.5 py-2.5 shadow-md hover:border-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
                on:click={() => signOut()}
              >
                Déconnexion
                <LogOut class="-mr-0.5 h-5 w-5" aria-hidden="true" />
              </button>
            {:else}
              <div class="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:ring-blue-300"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    on:click={() => (openAuth = !openAuth)}
                  >
                    Connexion
                    <MailCheck class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </button>
                </div>

                <div
                  class={cn(
                    'absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                    !openAuth && 'hidden'
                  )}
                >
                  <div class="flex rounded-md shadow-sm">
                    <div class="relative flex flex-grow items-stretch focus-within:z-10">
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                        <Mail class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email-mobile"
                        bind:value={email}
                        required
                        class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="john@gmail.com"
                      />
                    </div>
                    <button
                      class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-green-200"
                      on:click={() => signIn('sendgrid', { email })}
                    >
                      <Send class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
