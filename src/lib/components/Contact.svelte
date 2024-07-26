<script lang="ts">
  import Send from 'lucide-svelte/icons/send';
</script>

<div class="flex flex-col items-center justify-center gap-y-8 pt-10 shadow-xl" id="contact">
  <h2 class="text-5xl font-bold">Contact</h2>

  <div class="flex w-full flex-col items-center gap-y-3">
    <p>
      Email:
      <a
        class="underline underline-offset-4 hover:text-blue-600"
        href="mailto:langlois.cecile73@gmail.com"
      >
        langlois.cecile73@gmail.com
      </a>
    </p>
    <p>
      Téléphone:
      <a class="underline underline-offset-4 hover:text-blue-600" href="tel:+33622363266">
        +33.6.22.36.32.66
      </a>
    </p>
  </div>

  <form class="flex w-full flex-col items-center justify-center px-4 py-6 sm:p-8" method="post">
    <div class="flex w-2/3 max-w-2xl flex-col gap-x-6 gap-y-8">
      <div class="flex w-full flex-col gap-y-6 md:flex-row md:gap-x-6">
        <div class="w-full md:w-1/2">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
            Prénom
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              placeholder="John"
              class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="w-full md:w-1/2">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
            Nom de famille
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              placeholder="Smith"
              class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="w-2/3">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
          Adresse e-mail
        </label>
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="john@gmail.com"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="">
        <label for="message" class="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <div class="mt-2">
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Votre message"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="mt-6 inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <Send class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Envoyer !
    </button>
  </form>
</div>
