<script>
  import { page } from '$app/stores';
  import { site_name } from '$lib/info';
  let title = 'WebLime - Nonprofits Solutions';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta
    name="description"
    content="WebLime is a digital agency focused on increasing the ROI of clients through several online channels. Get your FREE PROPOSAL today."
  />
  <link rel="canonical" href={$page.url.href} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta
    property="og:description"
    content="WebLime is a digital agency focused on increasing the ROI of clients through several online channels. Get your FREE PROPOSAL today."
  />
  <meta
    property="og:image"
    content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:image"
    content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />
  <meta name="twitter:site" content="@weblime_agency" />
  <meta property="twitter:title" content="WebLime | Solutions" />
  <meta
    property="twitter:description"
    content="WebLime is a digital agency focused on increasing the ROI of clients through several online channels. Get your FREE PROPOSAL today."
  />
</svelte:head>

<main class="mx-auto">
  <!-- Hero section with illustration -->
  <section class="bg-white py-16">
    <div
      class="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:flex-row lg:px-8"
    >
      <img
        class="mx-auto"
        width="500"
        src="/svg/collaborate.svg"
        alt="illustration of a person using a tablet on a ball and a person on a wheelchair"
      />

      <div
        class="flex flex-col items-center justify-center pt-8 text-center lg:items-start lg:pt-0 lg:pl-16 lg:text-left"
      >
        <h1
          class="my-6 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl"
        >
          Get Your Nonprofit <span class="text-primary-600">Moving</span>.
        </h1>
        <p class="w-4/6 text-lg text-gray-600">
          You're on a mission to make the world a better place, and we'd love to
          help.
        </p>
      </div>
    </div>
  </section>

  <!-- Three features section -->
  <section
    class="mx-auto flex max-w-6xl flex-col justify-center px-4 pt-20 pb-24 sm:px-6 lg:px-8"
  >
    <div class="flex flex-col md:flex-row">
      <div class="mx-4 flex flex-col items-center py-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h3 class="bold my-4">Shopify</h3>
        <p class="max-w-sm text-gray-500">
          We'll create an eCommerce website backed by incredible tools.
        </p>
      </div>
      <div class="mx-4 flex flex-col items-center py-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
        <h3 class="bold my-4">WordPress</h3>
        <p class="max-w-sm text-gray-500">
          WordPress is a powerful CMS we can use to create a beautiful website.
        </p>
      </div>
      <div class="mx-4 flex flex-col items-center py-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <h3 class="bold my-4">Customizable</h3>
        <p class="max-w-sm text-gray-500">
          Build a custom solution from the ground up for your nonprofit.
        </p>
      </div>
    </div>
  </section>

  <!-- Section with three cards -->
  <section class="w-full bg-gray-100 pt-16 pb-20">
    <div class="mx-auto flex max-w-5xl flex-col px-4 sm:px-6 md:px-8">
      <div
        class="mx-auto flex h-full max-w-xl flex-col justify-center pt-6 pb-10 text-center"
      >
        <h2 class="text-4xl text-gray-800">
          Built for nonprofits of all kinds.
        </h2>
        <p class="mt-6 text-lg text-gray-500">
          No matter what your mission is, who you're with, or how many of you
          there are, we can help.
        </p>
      </div>
      <div>
        <div class="grid w-full grid-cols-2 grid-rows-2 gap-4">
          <div class="col-span-2 flex rounded-xl bg-white p-6 md:col-span-1">
            <img
              class="mx-auto hidden sm:block"
              width="180"
              src="/svg/search.svg"
              alt="search illustration"
            />
            <div class="my-auto sm:pl-4">
              <h3 class="mb-1 font-semibold text-gray-800">Guidestar</h3>
              <p class="text-gray-500">
                Guidestar is the destination for nonprofit research and tooling,
                and are the north star of our recommendations.
              </p>
            </div>
          </div>
          <div class="col-span-2 flex rounded-xl bg-white p-6 md:col-span-1">
            <img
              class="order-2 mx-auto hidden sm:block"
              width="180"
              src="/svg/payments.svg"
              alt="illustration of a woman with credit card next to a plant"
            />
            <div class="my-auto sm:pr-4">
              <h3 class="mb-1 font-semibold text-gray-800">Donations</h3>
              <p class="text-gray-500">
                We'll set you up with a robust solution so that you can accept
                donations from day one.
              </p>
            </div>
          </div>
          <div class="col-span-2 flex rounded-xl bg-white p-6">
            <img
              class="mx-auto hidden sm:block"
              width="280"
              src="/svg/scale.svg"
              alt="a man reaching for a milestone on a graph"
            />
            <div class="my-auto sm:pl-8">
              <h3 class="mb-1 font-semibold text-gray-800">Scale</h3>
              <p class="text-gray-500">
                Being able to scale is critical. We'll help you make the best
                decisions so that technology is at the forefront of your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Parallax collage section -->
  <section class="w-full bg-gradient-to-b from-gray-100 to-white py-8 sm:py-20">
    <div
      class="mx-auto flex max-w-6xl flex-col px-4 sm:flex-row sm:px-6 md:px-8"
    >
      <div class="relative mx-auto flex px-8 sm:order-2 sm:w-2/3">
        <div class="relative ml-auto h-full w-full">
          <img
            alt=""
            src="https://source.unsplash.com/BbSBf5uv50A"
            class="h-auto rounded-lg object-cover object-center shadow-md"
          />
        </div>
      </div>
      <div class="flex w-full items-center pt-24 sm:w-2/3 sm:pt-0">
        <div class="mx-auto sm:pr-6">
          <h1 class="text-3xl text-gray-800">
            Got your 501(c)?
            <br />
            <span class="text-primary-600">Start with our Starter Package.</span
            >
          </h1>
          <p class="mt-6 text-lg text-gray-600">
            Whether your organization is new or needs improvement, our Starter
            Package will set you up for success within 14 days.
          </p>
          <div class="mt-8 flex flex-row justify-between gap-2">
            <div>
              <h3 class="text-xl text-primary-600">5</h3>
              <p class="text-gray-800">Pages</p>
            </div>
            <div>
              <h3 class="text-xl text-primary-600">$550</h3>
              <p class="text-gray-800">Annualy</p>
            </div>
            <div>
              <h3 class="text-xl text-primary-600">1 Hour</h3>
              <p class="text-gray-800">Monthly Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script
    src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script>
  <script>
    const rellax = new Rellax('.rellax');
  </script>
</main>
