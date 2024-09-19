<script lang="ts">
  import {
    TableSearch,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import Pencil from 'lucide-svelte/icons/pencil';
  import Trash from 'lucide-svelte/icons/trash-2';
  import DeleteActivityModal from '$lib/components/admin/DeleteActivityModal.svelte';
  import AddActivityModal from '$lib/components/admin/AddActivityModal.svelte';
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import { activity } from '$lib/schemas';

  export let data: PageData;

  const addActivityForm = superForm(data.addActivityForm, {
    validators: zod(activity.add)
  });

  let deleteModal = false;
  let newActivityModal = true;
</script>

<DeleteActivityModal bind:open={deleteModal} activity={{ name: 'Activité 2', id: 2 }} />
<AddActivityModal bind:open={newActivityModal} form={addActivityForm} />

<div class="min-w-screen min-h-screen bg-gray-200 p-10">
  <section
    class=" flex w-full flex-col gap-y-10 divide-y rounded-md border border-gray-200 bg-white p-10 shadow-md"
  >
    <div class="flex flex-col gap-y-10">
      <h1 class="text-4xl">Activités enregistrées</h1>
      <button
        class="inline-flex w-fit items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        on:click={() => (newActivityModal = true)}
      >
        <Plus class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Ajouter une activité
      </button>
    </div>
    <TableSearch placeholder="Rechercher une activité" striped divClass="">
      <TableHead>
        <TableHeadCell>Nom de l'activité</TableHeadCell>
        <TableHeadCell>Description rapide</TableHeadCell>
        <TableHeadCell>Description longue</TableHeadCell>
        <TableHeadCell>Prix</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow>
          <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
          <TableBodyCell>Sliver</TableBodyCell>
          <TableBodyCell>Laptop</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
          <TableBodyCell>
            <div class="flex flex-col items-start">
              <button
                type="button"
                class="inline-flex w-fit items-center gap-x-2 px-3.5 py-2.5 text-sm text-yellow-600 hover:text-yellow-500 hover:underline hover:underline-offset-4"
              >
                <Pencil class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Éditer
              </button>
              <button
                type="button"
                class="inline-flex w-fit items-center gap-x-2 px-3.5 py-2.5 text-sm text-red-600 hover:text-red-500 hover:underline hover:underline-offset-4"
                on:click={() => (deleteModal = true)}
              >
                <Trash class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Supprimer
              </button>
            </div>
          </TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </TableSearch>
  </section>
</div>
