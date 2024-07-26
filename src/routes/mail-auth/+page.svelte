<script lang="ts">
  import House from 'lucide-svelte/icons/house';
  import Send from 'lucide-svelte/icons/send';
</script>

<main class="flex h-screen items-center justify-center bg-gray-100">
  <div class="flex flex-col items-center gap-y-4 rounded-lg bg-white p-10 text-center shadow-lg">
    <Send class="mx-auto mb-4 h-16 w-16 text-blue-500" />
    <h1 class="mb-2 text-2xl font-semibold">Email de connexion envoyé!</h1>
    <p class="text-gray-700">
      Un e-mail contenant un lien de connexion <br />a été envoyé à votre adresse e-mail.
    </p>
    <a
      href="/"
      class="inline-flex w-fit items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <House class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Accueil
    </a>
  </div>
</main>
