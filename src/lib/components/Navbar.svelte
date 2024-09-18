<script lang="ts">
  import { page } from '$app/stores';
  import type { SupabaseClient, User } from '@supabase/supabase-js';
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider
  } from 'flowbite-svelte';
  import Mail from 'lucide-svelte/icons/mail';

  export let user: User | null;
  export let supabase: SupabaseClient;

  $: activeUrl = $page.url.pathname;
  $: logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
    dropdownOpen = false;
  };
  let dropdownOpen = false;
</script>

<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Cécile Langlois
    </span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    {#if user}
      <Avatar id="avatar-menu" src={user.user_metadata.profile_picture} class="cursor-pointer" />
    {:else}
      <a
        href="/sign-in"
        class="inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <Mail class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Connexion
      </a>
    {/if}
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu" bind:open={dropdownOpen}>
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownItem href="/settings">Paramètre</DropdownItem>
    <DropdownItem href="/reviews">Avis</DropdownItem>
    <DropdownDivider />
    <DropdownItem on:click={logout}>Déconnection</DropdownItem>
  </Dropdown>
  <NavUl
    {activeUrl}
    activeClass="text-white bg-blue-600 md:bg-transparent md:text-blue-600 md:dark:text-white"
    nonActiveClass="text-gray-600 hover:bg-gray-100 hover:underline hover:underline-offset-4 md:hover:bg-transparent md:border-0 md:hover:text-blue-600"
  >
    <NavLi href="/" class="text-lg">Accueil</NavLi>
    <NavLi href="/#about" class="text-lg">À propos</NavLi>
    <NavLi href="/#activities" class="text-lg">Mes activites</NavLi>
    <NavLi href="/#contact" class="text-lg">Contact</NavLi>
  </NavUl>
</Navbar>
