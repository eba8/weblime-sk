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
  import { testimonials } from '$lib/Data/testimonials.json';
</script>

<svelte:head>
  <title>WebLime - Web Development & Marketing</title>
  <meta
    property="og:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
</svelte:head>

<div class="sm:pt-16 lg:pt-8 lg:pb-14">
  <div class="text-center">
    <h1
      class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
    >
      <span class="block xl:inline">Digital solutions to enhance</span>
      <span class="px-3 bg-primary-500 xl:inline">your growth.</span>
    </h1>
    <p
      class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      We connect brands with people in ways that are equally innovative,
      effective, and human.
    </p>
    <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md">
        <a
          href="/solutions"
          class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 border border-transparent rounded-md bg-primary-500 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
        >
          Solutions
        </a>
      </div>
      <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
        <a
          href="/get-in-touch"
          class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative h-full mx-auto max-w-7xl">
  <div class="relative py-16sm:py-24 lg:py-32">
    <div
      class="max-w-md px-4 mx-auto mt-6 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div class="flow-root px-6 pb-8 bg-red-100 rounded-lg">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-5.svg"
                    class="mx-auto h-44"
                    alt="skateboarder doing ollie"
                  />
                </div>
                <h2
                  class="mt-8 font-medium text-xl tracking-tight text-gray-900"
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
            <div class="flow-root px-6 pb-8 mt-6 rounded-lg bg-primary-100">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-weblime-results.svg"
                    class="mx-auto h-44"
                    alt="Woman jumping next to mobile phone"
                  />
                </div>
                <h2
                  class="mt-8 font-medium text-xl tracking-tight text-gray-900"
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
            <div class="flow-root px-6 pb-8 mt-6 bg-yellow-100 rounded-lg">
              <div class="-mt-8">
                <div>
                  <img
                    src="svg/illustration-7.svg"
                    class="mx-auto h-44"
                    alt="woman flying on rocketship"
                  />
                </div>
                <h2
                  class="mt-8 font-medium text-xl tracking-tight text-gray-900"
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
    class="relative px-6 mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
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
              class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
            >
              <!-- Heroicon name: desktop-computer -->
              <svg
                class="w-6 h-6"
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
              class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
            >
              <!-- Heroicon name: shopping-bag -->
              <svg
                class="w-6 h-6"
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
              class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
            >
              <!-- Heroicon name: outline/lightning-bolt -->
              <svg
                class="w-6 h-6"
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
        src="svg/weblime-laying-down-illustration.svg"
        alt=""
      />
    </div>
  </div>

  <div class="px-6 mt-40 mb-20 bg-white">
    <div class="overflow-hidden rounded-lg shadow-xl bg-primary-500">
      <div class="max-w-2xl px-6 py-16 mx-auto text-center sm:py-20">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span class="block">Boost your organization.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-900">
          We deliver solutions that drive your business forward.
        </p>
        <a
          href="/get-in-touch"
          class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-gray-700 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
        >
          Let's work together!
        </a>
      </div>
    </div>
  </div>

  <div class="px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="mb-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Latest Stories
        </h2>
      </div>
      <div
        class="grid grid-rows-4 gap-5 pt-10 mt-6 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
      >
        {#each stories.slice(0, 4) as story}
          <div>
            <p class="text-xl font-semibold text-gray-900">{story.title}</p>
            <p class="mt-2 text-base text-gray-500">{story.excerpt}</p>

            <div class="mt-2">
              <a href="/stories/{story.slug}" class="inline-block">
                <span
                  class="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-primary-500 text-gray-900"
                >
                  Read full story
                </span>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="py-6 overflow-hidden bg-white md:py-8 lg:py-12">
  <div class="container mx-auto">
    <h2 class="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
      People 💚 WebLime
    </h2>
    <p class="max-w-3xl mx-auto mt-3 text-xl text-center text-gray-500 sm:mt-4">
      WebLime was built to be a one-stop solution for your business. We'll focus
      on your online presence while you hone in on your products and services.
    </p>

    <div class="pb-12 mt-10 bg-white sm:pb-16">
      <!-- <div class="relative w-full">
        <div class="mx-auto">
          <dl class="bg-white rounded-lg sm:grid sm:grid-cols-3">
            <div
              class="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r"
            >
              <dt
                class="order-2 mt-2 text-lg font-medium text-gray-500 leading-6"
              >
                Tracked pageviews
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                4.3B
              </dd>
            </div>
            <div
              class="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r"
            >
              <dt
                class="order-2 mt-2 text-lg font-medium text-gray-500 leading-6"
              >
                Installed websites
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                24,490
              </dd>
            </div>
            <div
              class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l"
            >
              <dt
                class="order-2 mt-2 text-lg font-medium text-gray-500 leading-6"
              >
                Uptime (Last 90 days)
              </dt>
              <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                99.99%
              </dd>
            </div>
          </dl>
        </div>
      </div> -->
    </div>
    <div class="md:grid gap-4 grid-cols-3">
      {#each testimonials as testimonial}
        <div class="my-4 md:m-0">
          <div class="p-4 border border-gray-100 rounded-lg">
            <div class="flex items-center">
              <a
                class="flex items-center group"
                href={testimonial.link}
                target="_blank"
              >
                <img class="w-10 rounded-full" src={testimonial.author_image} />
                <div class="ml-2 leading-tight">
                  <div class="font-bold group-hover:text-primary-500">
                    {testimonial.author_name}
                  </div>
                  <!-- <div class="text-xs text-gray-500">
                    @{testimonial.author_handle}
                  </div> -->
                </div>
              </a>
              <a class="ml-auto" href="/" target="_blank"
                ><img class="w-10" src={testimonial.logo} alt="" /></a
              >
            </div>
            <div
              class="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text"
            >
              {testimonial.text}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
