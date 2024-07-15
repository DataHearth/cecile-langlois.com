<script lang="ts">
  import Image from 'lucide-svelte/icons/image';
  import ImageOff from 'lucide-svelte/icons/image-off';
  import { activities as activitiesSchema } from '$lib/database/schemas';

  export let activities: Promise<Array<typeof activitiesSchema.$inferSelect>>;
</script>

<section class="mt-10 flex flex-col items-center justify-center" id="activities">
  <h2 class="text-5xl font-bold">Mes sorties</h2>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      {#await activities}
        {#each Array(8) as _}
          <div
            role="status"
            class="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 dark:border-gray-700"
          >
            <div
              class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700"
            >
              <Image class="h-10 w-10 text-gray-200 dark:text-gray-600" aria-hidden="true" />
            </div>
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span class="sr-only">Chargement...</span>
          </div>
        {/each}
      {:then acts}
        {#if acts.length === 0}
          <div class="col-span-12 self-center text-center text-lg">
            <ImageOff class="mx-auto h-20 w-20 text-gray-400" aria-hidden="true" />
            <h3 class="mt-2 font-semibold text-gray-900">
              Aucune activités n'est disponible actuellement.
            </h3>
            <p class="mt-1 line-clamp-2 text-gray-500">
              Vous pouvez me contacter pour avoir <br />plus d'informations sur mes prochaines
              sorties.
            </p>
          </div>
        {/if}
        {#each acts as s}
          <a href="/" class="group">
            <div
              class="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{s.label}</h3>
          </a>
        {/each}
      {:catch _}
        <div class="col-span-12 self-center text-center">
          <ImageOff class="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
          <h3 class="mt-2 text-sm font-semibold text-gray-900">
            Aucune activités n'est disponible due à une erreur interne.
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Vous pouvez me contacter pour avoir plus d'informations sur mes prochaines sorties.
          </p>
        </div>
      {/await}
    </div>
  </div>
</section>
