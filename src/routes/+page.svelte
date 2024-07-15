<script lang="ts">
  import About from '$lib/components/About.svelte';
  import Activities from '$lib/components/Activities.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Navbar />

<div class="min-h-screen w-full">
  <Hero />

  {#await data.aboutPictures}
    <About galleryImages={null} />
  {:then pics}
    <About galleryImages={pics} />
  {/await}

  <Activities activities={data.activities} />

  <Contact />

  <Footer />
</div>
