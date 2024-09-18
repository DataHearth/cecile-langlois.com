import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  plugins: [forms, aspectRatio, flowbite]
};
