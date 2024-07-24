<script lang="ts">
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';

  export let images: Array<{ link: string; label: string }> = [];

  let currentIndex = 0;

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };
  const showPreviousImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };
</script>

<div class="relative h-full w-full">
  <enhanced:img
    src={images[currentIndex].link}
    alt={images[currentIndex].label}
    sizes="(min-width: 640px) 100%"
    class="h-full w-full rounded-lg object-contain object-center lg:max-h-[620px]"
  />
  <button
    class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
    on:click={showPreviousImage}
    aria-label="Image précédente"
  >
    <span class="sr-only">Image précédente</span>
    <ChevronLeft />
  </button>
  <button
    class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
    on:click={showNextImage}
    aria-label="Image suivante"
  >
    <span class="sr-only">Image suivante</span>
    <ChevronRight />
  </button>
</div>
<div class="mt-4 grid grid-cols-5 gap-4">
  {#each images as image, index}
    <button on:click={() => (currentIndex = index)}>
      <enhanced:img src={image.link} alt={image.label} class="rounded-lg object-cover" />
    </button>
  {/each}
</div>
