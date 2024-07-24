<script lang="ts">
  // @ts-expect-error handled by vite
  import MyImage from '../../../static/hero.jpg?enhanced';
  // @ts-expect-error handled by vite
  import MyImageBis from '../../../static/favicon.png?enhanced';
  import Carousel from './Carousel.svelte';
  const galleryImages = [
    {
      link: MyImage,
      label: '1'
    },
    {
      link: MyImageBis,
      label: '1'
    },
    {
      link: MyImage,
      label: '1'
    },
    {
      link: MyImage,
      label: '1'
    },
    {
      link: MyImage,
      label: '1'
    }
  ];
</script>

<div
  class="my-16 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:px-8"
  id="about"
>
  <div class="mx-5 lg:mx-0 lg:basis-1/2">
    <Carousel images={galleryImages} />
  </div>

  <div
    class="mx-auto flex max-w-xl flex-col items-center p-6 text-center lg:basis-1/2 lg:items-start lg:p-0 lg:pt-0 lg:text-start"
  >
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      À propos de moi
    </h1>
    <p class="mt-6 text-xl leading-8 text-gray-700">
      Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh
      dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra
      scelerisque eget. Eleifend egestas fringilla sapien.
    </p>
    <p class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
      sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
      varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
      risus enim. Mattis mauris semper sed amet vitae sed turpis id.
    </p>
  </div>
</div>
