<script lang="ts">
  import { cn } from '$lib/utils';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { slide } from 'svelte/transition';

  export let images: any[];

  let current = 0;
</script>

<div class="relative w-full">
  <div class="relative h-[340px] overflow-hidden rounded-lg md:h-[480px]">
    {#each images as [_, module], i (i)}
      {#if current === i}
        <enhanced:img
          src={module.default}
          class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="Carousel active"
          sizes="(min-width: 1024px) 100%, (min-width: 768px): 100%, (min-width: 640px) 100%, (min-width: 360px) 100%"
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
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-30"
    >
      <ChevronLeft class="h-4 w-4 text-white" aria-hidden="true" />
    </span>
    <span class="sr-only">Image précédente</span>
  </button>
  <button
    type="button"
    class="group absolute right-0 top-0 z-10 flex h-full items-center justify-center px-4 focus:outline-none"
    on:click={() => (current = (current + 1) % images.length)}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-30"
    >
      <ChevronRight class="h-4 w-4 text-white" aria-hidden="true" />
    </span>
    <span class="sr-only">Image suivante</span>
  </button>
</div>

<div class="mt-4 grid grid-cols-5 gap-4">
  {#each images as [_, module], i (i)}
    <button
      on:click={() => (current = i)}
      class={cn(
        'h-auto w-full rounded-lg md:h-20',
        current === i && 'shadow-xl outline outline-2 outline-blue-400'
      )}
    >
      <enhanced:img
        src={module.default}
        alt={`Carousel n°${i}`}
        class="h-full w-full rounded-lg object-cover"
        sizes="(min-width: 1024px) 100%, (min-width: 768px): 100%, (min-width: 640px) 100%, (min-width: 360px) 100%"
      />
    </button>
  {/each}
</div>
