<script lang="ts">
  import { Carousel } from 'flowbite-svelte';

  const images = [
    {
      alt: 'XXX',
      src: '/hero.jpg'
    },
    {
      alt: 'XXX',
      src: 'https://media.githubusercontent.com/media/DataHearth/cecile-langlois.com/main/static/carousel/bernd-dittrich-qDkOkUSf3dc-unsplash.jpg'
    },
    {
      alt: 'XXX',
      src: '/hero.jpg'
    },
    {
      alt: 'XXX',
      src: '/hero.jpg'
    }
  ];
</script>

<div class="relative pb-20 md:pb-10 lg:py-28" id="about">
  <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
    <div
      class="my-20 items-center justify-center md:my-10 lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
    >
      <div class="relative px-10 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <Carousel {images} let:Indicators duration={4000}>
          <Indicators />
        </Carousel>
      </div>
    </div>
    <div class="px-6 lg:contents">
      <div
        class="mx-auto max-w-2xl text-center md:text-left lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2"
      >
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          À propos de moi
        </h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
          nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in
          viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
        <p class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
          Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
        </p>
      </div>
    </div>
  </div>
</div>
