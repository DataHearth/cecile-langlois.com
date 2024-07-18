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

<div class="relative">
  <div class="relative h-full w-full">
    <enhanced:img
      src={images[currentIndex].link}
      alt={images[currentIndex].label}
      class="h-full w-full rounded-lg object-cover object-center md:h-[480px]"
    />
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
      on:click={showPreviousImage}
    >
      <ChevronLeft />
    </button>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-white"
      on:click={showNextImage}
    >
      <ChevronRight />
    </button>
  </div>
  <div class="mt-4 grid grid-cols-5 gap-4">
    {#each images as image, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <enhanced:img
        src={image.link}
        alt={image.label}
        class="cursor-pointer rounded-lg object-cover"
        on:click={() => (currentIndex = index)}
        role="button"
        tabindex="-1"
      />
    {/each}
  </div>
</div>
