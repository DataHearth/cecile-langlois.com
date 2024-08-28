<script lang="ts">
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
</script>

<div class="flex min-h-screen w-screen flex-col items-center gap-y-5 bg-gray-100">
  <h1>Page d'administration</h1>

  <div class="flex w-full flex-col items-center justify-center px-5">
    <h2>Activitées enregistrées</h2>
    <ul
      role="list"
      class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <li class="relative rounded-lg bg-white p-6 shadow">
        <div class="relative">
          <div
            class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              alt=""
              class="object-cover"
            />
          </div>
          <button
            type="button"
            class="group absolute left-0 top-0 z-10 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            on:click={() => {}}
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
            on:click={() => {}}
          >
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-30"
            >
              <ChevronRight class="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <span class="sr-only">Image suivante</span>
          </button>
        </div>

        <p class="mt-2 truncate text-sm font-medium text-gray-900">
          <span class="text-black underline">Titre de l'activité :</span> XXXXXXXX
        </p>
        <span class="text-sm font-medium text-gray-900 underline">Description de l'activité :</span>
        <p class="block h-32 overflow-y-auto text-sm font-medium text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dignissim ligula.
          Ut in nisi ut lorem scelerisque rhoncus convallis non ipsum. Cras eget aliquam est, in
          lacinia tortor. Curabitur et magna nisl. Vivamus ante risus, placerat eget egestas quis,
          ullamcorper vel ligula. Quisque molestie at dui non elementum. Phasellus congue egestas
          velit, sit amet consectetur felis sollicitudin a. Mauris at felis cursus mi pretium
          consectetur. Praesent pulvinar vehicula dui, id laoreet quam efficitur et. Fusce ut
          dapibus dolor, vel auctor sapien. Aenean ultricies est ut vehicula finibus. Morbi
          fermentum magna at leo laoreet, et egestas est bibendum. Aliquam sed vestibulum urna.
        </p>
        <p class="text-sm font-medium text-gray-900">
          <span class="text-black underline">Prix :</span> XXX
        </p>
      </li>
    </ul>
  </div>
</div>
