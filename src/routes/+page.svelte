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

<Navbar user={data.user} supabase={data.supabase} />

<div class="min-h-screen w-full">
  <Hero />

  <About />

  <Activities activities={data.activities} />

  <Contact />

  <Footer />
</div>
