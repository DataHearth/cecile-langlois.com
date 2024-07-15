<script lang="ts">
  import Image from 'lucide-svelte/icons/image';
  import { aboutPictures } from '$lib/database/schemas';

  export let galleryImages: Array<typeof aboutPictures.$inferSelect> | null;

  let activeImage = galleryImages ? galleryImages[0] : null;
</script>

<div class="relative" id="about">
  <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
    <div
      class="my-10 items-center justify-center lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
    >
      <div class="relative h-80 px-10 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <div class="grid gap-4">
          {#if activeImage}
            <img
              class="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={activeImage.link}
              alt={activeImage.label}
            />
          {:else}
            <div role="status" class="animate-pulse justify-center md:flex md:items-center">
              <div
                class="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700"
              >
                <Image class="h-10 w-10 text-gray-200 dark:text-gray-600" aria-hidden="true" />
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          {/if}

          <div class="grid grid-cols-5 gap-4">
            {#if galleryImages && galleryImages.length > 0}
              {#each galleryImages as i (i.id)}
                <img
                  src={i.link}
                  class="max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt={i.label}
                />
              {/each}
            {:else}
              {#each Array(5) as _}
                <div
                  role="status"
                  class="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
                >
                  <div
                    class="flex h-48 w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700"
                  >
                    <Image class="h-10 w-10 text-gray-200 dark:text-gray-600" aria-hidden="true" />
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:mt-52 lg:contents">
      <div
        class="mx-auto max-w-2xl pb-24 pt-16 text-center sm:pb-32 sm:pt-20 md:text-left lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2"
      >
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          À propos de moi
        </h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
          nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in
          viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
        <p class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
          Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
        </p>
      </div>
    </div>
  </div>
</div>
