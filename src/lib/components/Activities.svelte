<script lang="ts">
  import ClipboardList from 'lucide-svelte/icons/clipboard-list';

  export let activities;
</script>

<section
  class="flex min-h-fit flex-col items-center justify-center gap-y-20 border border-y-gray-200 py-20"
  id="activities"
>
  <h2 class="text-5xl font-bold">Mes sorties</h2>
  <div class="px-4 sm:px-6 lg:px-8">
    <ul
      role="list"
      class="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
        <li
          class="col-span-1 flex w-full flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div class="mb-8 flex w-full flex-col">
            <img
              class="mx-auto h-[300px] w-[300px] flex-shrink-0 rounded-t-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=300&h=300&q=60"
              alt=""
            />
            <h3 class="mt-6 text-sm font-medium text-gray-900">Titre</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
              <dt class="sr-only">Title</dt>
              <dd class="text-sm text-gray-500">Rapide description</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-3">
                <span
                  class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >
                  Localisation
                </span>
              </dd>
            </dl>
          </div>
          <div class="-mt-px flex rounded-b-lg hover:bg-gray-100 hover:shadow-md">
            <a
              href="/activity/id"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <ClipboardList class="h-5 w-5 text-blue-400" aria-hidden="true" />
              Détails
            </a>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
