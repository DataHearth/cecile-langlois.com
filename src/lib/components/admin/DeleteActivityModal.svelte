<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  import CircleAlert from 'lucide-svelte/icons/circle-alert';

  export let open: boolean;
  export let activity: {
    name: string;
    id: number;
  };
</script>

<Modal bind:open size="xs" autoclose>
  <div class="text-center">
    <CircleAlert class="mx-auto mb-4 h-12 w-12 text-red-500" />
    <h3 class="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
      Suppression de l'activité {activity.name} ?
    </h3>
    <Button color="red" class="me-2">Supprimer</Button>
    <Button color="alternative">Annuler</Button>
  </div>
</Modal>
