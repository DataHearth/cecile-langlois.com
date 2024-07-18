<script lang="ts">
  // @ts-expect-error handled by vite
  import MyImage from '../../../static/hero.jpg?enhanced';
  const galleryImages = [
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

  let activeImage = galleryImages[0];
</script>

<div class="relative" id="about">
  <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
    <div
      class="my-10 items-center justify-center lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
    >
      <div class="relative h-80 px-10 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <div class="grid gap-4">
          <enhanced:img
            class="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={activeImage.link}
            alt={activeImage.label}
          />

          <div class="grid grid-cols-5 gap-4">
            {#each galleryImages as i}
              <enhanced:img
                src={i.link}
                class="max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt={i.label}
                loading="lazy"
              />
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 md:mt-52 lg:contents">
      <div
        class="mx-auto max-w-2xl pb-24 pt-16 text-center sm:pb-32 sm:pt-20 md:text-left lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2"
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
