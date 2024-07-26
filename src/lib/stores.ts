import type { ComponentType } from 'svelte';
import { writable } from 'svelte/store';
import type { Icon } from 'lucide-svelte';

export enum notificationType {
  error,
  success,
  info
}

export const notification = writable<{
  type: notificationType;
  title: string;
  description: string;
  displayIcon: ComponentType<Icon>;
} | null>(null);
