<script lang="ts">
  import { cn } from '$lib/utils';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { slide } from 'svelte/transition';

  export let images: { label: string; link: any }[];

  let current = 0;
</script>

<div class="relative w-full">
  <div class="relative h-[340px] overflow-hidden rounded-lg md:h-[480px]">
    {#each images as image, i (i)}
      {#if current === i}
        <enhanced:img
          src={image.link}
          class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt={image.label}
          sizes="(min-width: 640px) 100%"
          transition:slide
        />
      {/if}
    {/each}
  </div>

  <button
    type="button"
    class="group absolute left-0 top-0 z-10 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    on:click={() => (current = (current - 1 + images.length) % images.length)}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
    >
      <ChevronLeft class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true" />
      <span class="hidden">Image précédente</span>
    </span>
  </button>
  <button
    type="button"
    class="group absolute right-0 top-0 z-10 flex h-full items-center justify-center px-4 focus:outline-none"
    on:click={() => (current = (current + 1) % images.length)}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-white/50 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60"
    >
      <ChevronRight class="h-4 w-4 text-white dark:text-gray-800" aria-hidden="true" />
      <span class="hidden">Image suivante</span>
    </span>
  </button>
</div>

<div class="mt-4 grid grid-cols-5 gap-4">
  {#each images as image, i}
    <button
      on:click={() => (current = i)}
      class={cn(
        'h-auto w-full rounded-lg md:h-20',
        current === i && 'shadow-xl outline outline-2 outline-blue-400'
      )}
    >
      <enhanced:img
        src={image.link}
        alt={image.label}
        class="h-full w-full rounded-lg object-cover"
        sizes="(min-width: 640px) 100%"
      />
    </button>
  {/each}
</div>
