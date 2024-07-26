<script lang="ts">
  import About from '$lib/components/About.svelte';
  import Activities from '$lib/components/Activities.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import type { PageData } from './$types';
  import X from 'lucide-svelte/icons/x';
  import { cn } from '$lib/utils';
  import { notification, notificationType } from '$lib/stores';
  import { onDestroy } from 'svelte';

  export let data: PageData;

  let showNotification = false;

  const unsubscribe = notification.subscribe((v) => {
    if (!v) return;

    showNotification = true;
    setTimeout(() => (showNotification = false), 3000);
  });

  onDestroy(unsubscribe);
</script>

<Navbar />

<div class="min-h-screen w-full">
  <Hero />

  <About />

  <Activities activities={data.activities} />

  <Contact />

  <Footer />
</div>

{#if $notification}
  <div
    aria-live="assertive"
    class={cn(
      'pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6',
      !showNotification && 'hidden'
    )}
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!--
      Notification panel, dynamically insert this into the live region when it needs to be displayed

      Entering: "transform ease-out duration-300 transition"
        From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        To: "translate-y-0 opacity-100 sm:translate-x-0"
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svelte:component
                this={$notification.displayIcon}
                class={cn(
                  'h-6 w-6',
                  $notification.type === notificationType.success
                    ? 'text-green-400'
                    : $notification.type === notificationType.error
                      ? 'text-red-400'
                      : 'text-blue-400'
                )}
                aria-hidden="true"
              />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">{$notification.title}</p>
              <p class="mt-1 text-sm text-gray-500">{$notification.description}</p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <button
                type="button"
                class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="sr-only">Fermer la notification</span>
                <button on:click={() => (showNotification = !showNotification)}>
                  <X class="h-5 w-5" aria-hidden="true" />
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
