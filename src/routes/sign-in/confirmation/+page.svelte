<script>
  import Send from 'lucide-svelte/icons/send';
</script>

<div
  class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]"
>
  <main
    class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8"
  >
    <div class="max-w-lg">
      <Send class="mb-10 h-16 w-16 text-blue-500" />
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        E-mail de connexion envoyé !
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        L'e-mail de connexion a été envoyé dans votre boîte e-mail. Cliquez sur le bouton de
        connexion et vous serez connecté.
      </p>
      <div class="mt-10">
        <a href="/" class="text-sm font-semibold leading-7 text-blue-600">
          <span aria-hidden="true">&larr;</span> Accueil
        </a>
      </div>
    </div>
  </main>
  <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
    <img
      src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>
