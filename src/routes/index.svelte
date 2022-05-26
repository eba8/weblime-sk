<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const response = await fetch('/stories/ghost_stories');

    const { stories } = await response.json();

    return {
      props: {
        stories,
      },
    };
  }
</script>

<script>
  export let stories;
  import Testimonials from '$lib/components/testimonials/Testimonials.svelte';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>WebLime | Web Design and Development.</title>
  <meta name="title" content="WebLime | Web Design and Development." />
  <meta
    name="description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WebLime - Digital Agency" />
  <meta property="og:url" content="https://www.weblime.com/" />
  <meta property="og:title" content="WebLime | Web Design and Development." />
  <meta
    property="og:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
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
  <meta
    property="twitter:title"
    content="WebLime | Web Design and Development."
  />
  <meta
    property="twitter:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
</svelte:head>

<div class="sm:pt-16 lg:pt-8 lg:pb-14">
  <div class="text-center">
    <h1
      class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
    >
      <span class="block xl:inline">Digital solutions to enhance</span>
      <span class="bg-primary-500 px-3 xl:inline">your growth.</span>
    </h1>
    <p
      class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
    >
      We connect brands with people in ways that are equally innovative,
      effective, and human.
    </p>
    <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md">
        <a
          href="/solutions"
          class="border-transparent flex w-full items-center justify-center rounded-md border bg-primary-500 px-8 py-3 text-base font-medium text-gray-800 hover:bg-primary-400 md:py-4 md:px-10 md:text-lg"
        >
          Solutions
        </a>
      </div>
      <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
        <a
          href="/get-in-touch"
          class="border-transparent flex w-full items-center justify-center rounded-md border bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 md:py-4 md:px-10 md:text-lg"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative mx-auto h-full max-w-7xl">
  <div class="py-16sm:py-24 relative lg:py-32">
    <div
      class="mx-auto mt-6 max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div class="flow-root rounded-lg bg-red-100 px-6 pb-8">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-5.svg"
                    class="mx-auto h-44 w-full"
                    alt="skateboarder doing ollie"
                  />
                </div>
                <h2
                  class="mt-8 text-xl font-medium tracking-tight text-gray-900"
                >
                  Unleash your creativity
                </h2>
                <p class="mt-5 text-base text-gray-600">
                  We are driven by creativity and passion. To truly represent
                  your business, our team will work with you to bring your
                  dreams into reality.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div class="mt-6 flow-root rounded-lg bg-primary-100 px-6 pb-8">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-weblime-results.svg"
                    class="mx-auto h-44 w-full"
                    alt="Woman jumping next to mobile phone"
                  />
                </div>
                <h2
                  class="mt-8 text-xl font-medium tracking-tight text-gray-900"
                >
                  Get more results
                </h2>
                <p class="mt-5 text-base text-gray-600">
                  Capitalize on your market potential and gauge interest among
                  your clientele by implmementing advanced techonlogical
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <div class="mt-6 flow-root rounded-lg bg-yellow-100 px-6 pb-8">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-7.svg"
                    class="mx-auto h-44 w-full"
                    alt="woman flying on rocketship"
                  />
                </div>
                <h2
                  class="mt-8 text-xl font-medium tracking-tight text-gray-900"
                >
                  Grow your audience
                </h2>
                <p class="mt-5 text-base text-gray-600">
                  Enhance your reach with creative marketing strategies and
                  campaigns. Reach the right people, with the right message, at
                  the right time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="relative mt-12 px-6 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
  >
    <div class="relative">
      <h3
        class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
      >
        Driven By Creativity And Passion
      </h3>

      <p class="mt-3 text-lg text-gray-500">
        We are passionate about technology and focus on integrating the latest
        advancements into your business to propel substantial growth.
      </p>

      <dl class="mt-10 space-y-10">
        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
            >
              <!-- Heroicon name: desktop-computer -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
              Web Development
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            WordPress, Shopify or custom builds. We implement the best practices
            possible so that your brand reaches both far and wide.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
            >
              <!-- Heroicon name: shopping-bag -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
              E-commerce
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            We will carefully monitor your website’s performance to understand
            how we can optimize your online presence.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
            >
              <!-- Heroicon name: outline/lightning-bolt -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
              Marketing
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            You keep everything from accounts to creatives. From AdWords to
            landing pages, they’re always yours.
          </dd>
        </div>
      </dl>
    </div>
    <div class="relative mt-10 lg:mt-0" aria-hidden="true">
      <img
        class="relative mx-auto"
        width="490"
        height="100%"
        src="svg/weblime-laying-down-illustration.svg"
        alt="woman laying down working"
      />
    </div>
  </div>

  <div class="mt-40 mb-20 bg-white px-6">
    <div class="overflow-hidden rounded-lg bg-primary-500 shadow-xl">
      <div class="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span class="block">Boost your organization.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-900">
          We deliver solutions that drive your business forward.
        </p>
        <a
          href="/get-in-touch"
          class="border-transparent mt-8 inline-flex w-full items-center justify-center rounded-md border bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 sm:w-auto"
        >
          Let's work together!
        </a>
      </div>
    </div>
  </div>

  <Testimonials />

  <div class="px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
    <div
      class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="mb-1 text-lg font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Latest Stories
        </h2>
      </div>
      <div
        class="mt-6 grid grid-rows-4 gap-5 pt-10 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-12"
      >
        {#each stories.slice(0, 4) as story}
          <div
            class="rounded-lg bg-gray-50 p-5 ring-1 ring-gray-50 duration-500 hover:border-gray-100 hover:bg-white hover:shadow-lg hover:ring-gray-100"
          >
            <a href="/stories/{story.slug}">
              <p class="text-xl font-semibold text-gray-900">{story.title}</p>
              <p class="mt-2 text-base text-gray-800">{story.excerpt}</p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
