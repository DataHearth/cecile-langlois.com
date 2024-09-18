<script>
  import { Button, Modal, Label, Toggle, Input, Helper, Textarea } from 'flowbite-svelte';

  export let open;
</script>

<Modal title="Création d'une activité" bind:open size="xl">
  <div class="flex flex-col">
    <div class="flex flex-row items-start justify-start gap-x-10">
      <div class="flex flex-col">
        <div class="mb-6">
          <Label for="title" class="mb-2 block">Titre</Label>
          <Input id="title" />
          <!-- <Helper class="mt-2" color="red"> -->
          <!--   <span class="font-medium">Well done!</span> -->
          <!--   Some success message. -->
          <!-- </Helper> -->
        </div>
        <div class="mb-6">
          <Label for="price" class="mb-2 block">Prix</Label>
          <Input id="price" />
          <!-- <Helper class="mt-2" color="red"> -->
          <!--   <span class="font-medium">Well done!</span> -->
          <!--   Some success message. -->
          <!-- </Helper> -->
        </div>
      </div>

      <div class="flex grow flex-col">
        <div class="mb-6">
          <Label for="quickDescription" class="mb-2 block">Description rapide</Label>
          <Input id="quickDescription" />
          <!-- <Helper class="mt-2" color="red"> -->
          <!--   <span class="font-medium">Well done!</span> -->
          <!--   Some success message. -->
          <!-- </Helper> -->
        </div>
        <div class="mb-6">
          <Label for="description" class="mb-2 block">Description</Label>
          <Textarea id="description" rows="6" />
          <!-- <Helper class="mt-2" color="red"> -->
          <!--   <span class="font-medium">Well done!</span> -->
          <!--   Some success message. -->
          <!-- </Helper> -->
        </div>
      </div>

      <div class="flex flex-row"></div>
    </div>
  </div>

  <svelte:fragment slot="footer">
    <div class="flex w-full flex-row items-center justify-start gap-x-3">
      <Button color="green">Ajouter</Button>
      <Button color="red">Annuler</Button>
      <Toggle checked={true} color="green" class="ml-auto">Activer</Toggle>
    </div>
  </svelte:fragment>
</Modal>
