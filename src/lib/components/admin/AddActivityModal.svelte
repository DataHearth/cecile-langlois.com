<script lang="ts">
  import type { activity } from '$lib/schemas';
  import {
    Fileupload,
    Popover,
    Button,
    Modal,
    Label,
    Toggle,
    Input,
    Helper,
    Textarea,
    ButtonGroup,
    InputAddon
  } from 'flowbite-svelte';
  import CircleHelp from 'lucide-svelte/icons/circle-help';
  import Euro from 'lucide-svelte/icons/euro';
  import type { SuperForm } from 'sveltekit-superforms';

  export let open;
  export let form: SuperForm<typeof activity.add._type>;

  const { form: f, enhance, errors } = form;
</script>

<Modal title="Création d'une activité" bind:open size="xl">
  <form action="?/addActivity" class="flex flex-col" use:enhance>
    <div class="flex flex-row items-start justify-start gap-x-10">
      <div class="flex flex-col">
        <div class="mb-6">
          <Label for="title" class="mb-2 block">Titre</Label>
          <Input id="title" />

          {#if $errors.title}
            <Helper class="mt-2" color="red">
              {$errors.title}
            </Helper>
          {/if}
        </div>
        <div class="mb-6">
          <Label for="price" class="mb-2 block">Prix</Label>
          <ButtonGroup class="w-full">
            <InputAddon>
              <Euro class="h-5 w-5 text-gray-500" aria-hidden="true" />
            </InputAddon>
            <Input id="price" type="number" />
          </ButtonGroup>

          {#if $errors.price}
            <Helper class="mt-2" color="red">
              {$errors.price}
            </Helper>
          {/if}
        </div>
      </div>

      <div class="flex grow flex-col">
        <div class="mb-6">
          <Label for="quickDescription" class="mb-2 block">Description rapide</Label>
          <Input id="quickDescription" />

          {#if $errors.quickDescription}
            <Helper class="mt-2" color="red">
              {$errors.quickDescription}
            </Helper>
          {/if}
        </div>
        <div class="mb-6">
          <Label for="description" class="mb-2 block">Description</Label>
          <Textarea id="description" rows="6" />

          {#if $errors.description}
            <Helper class="mt-2" color="red">
              {$errors.description}
            </Helper>
          {/if}
        </div>
      </div>
    </div>

    <div class="flex flex-row gap-x-3">
      <div class="mb-6">
        <Label for="startDatetime" class="mb-2 block">Date et heure de début</Label>
        <Input id="startDatetime" type="datetime-local" />

        {#if $errors.startDate}
          <Helper class="mt-2" color="red">
            {$errors.startDate}
          </Helper>
        {/if}
      </div>
      <div class="mb-6">
        <Label for="endDatetime" class="mb-2 block">Date et heure de fin</Label>
        <Input id="endDatetime" type="datetime-local" />

        {#if $errors.endDate}
          <Helper class="mt-2" color="red">
            {$errors.endDate}
          </Helper>
        {/if}
      </div>
    </div>

    <div class="mb-6">
      <Label class="flex items-center pb-2" for="images">
        Images
        <CircleHelp
          class="ms-1.5 h-3 w-3 cursor-pointer"
          id="fileupload-helper"
          aria-hidden="true"
        />
        <Popover
          triggeredBy="#fileupload-helper"
          class="w-72 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
          placement="top-start"
        >
          Le premier fichier sera utilisé comme image de couverture. Bien mettre les images dans
          l'ordre.
        </Popover>
      </Label>
      <Fileupload id="images" multiple />
    </div>
  </form>

  <svelte:fragment slot="footer">
    <div class="flex w-full flex-row items-center justify-start gap-x-3">
      <Button color="green" type="submit">Ajouter</Button>
      <Button color="red">Annuler</Button>
      <Toggle checked={true} color="green" class="ml-auto">Activer</Toggle>
    </div>
  </svelte:fragment>
</Modal>
