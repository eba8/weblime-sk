<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const response = await fetch('/stories/ghost_four_stories');

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
                  <!-- <img
                    src="svg/illustration-5.svg"
                    class="mx-auto h-44 w-full"
                    alt="skateboarder doing ollie"
                  /> -->
                  <svg
                    class="mx-auto h-44 w-full"
                    id="a02cdd3d-0742-4d95-884a-8f77ee9b02ff"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="896"
                    height="525.82716"
                    viewBox="0 0 896 525.82716"
                    ><title>skateboard</title><path
                      d="M380.134,671.66583c12.42842,23.049,38.806,32.9435,38.806,32.9435s6.22712-27.47543-6.2013-50.52448-38.806-32.9435-38.806-32.9435S367.70559,648.61678,380.134,671.66583Z"
                      transform="translate(-152 -187.08642)"
                      fill="#3f3d56"
                    /><path
                      d="M388.67653,664.08285c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92679-50.17653-8.57291S338.5,655.50994,338.5,655.50994,366.23811,650.58316,388.67653,664.08285Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><rect
                      y="523.82716"
                      width="896"
                      height="2"
                      fill="#2f2e41"
                    /><path
                      d="M766.34728,225.41358l41-8s10-34,22-30-8,38-8,38l-57,26Z"
                      transform="translate(-152 -187.08642)"
                      fill="#a0616a"
                    /><path
                      d="M517.34728,259.41358l-18,23s-26-1-18,13,26,6,27,3,30-29,30-29Z"
                      transform="translate(-152 -187.08642)"
                      fill="#a0616a"
                    /><path
                      d="M590.84728,232.91358l15-8s64-5,88,11-101,18-101,18Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><path
                      d="M619.34728,218.41358s-8-19,3-21a49.37054,49.37054,0,0,1,19,0l-12,10Z"
                      transform="translate(-152 -187.08642)"
                      fill="#3f3d56"
                    /><path
                      d="M619.34728,218.41358s-8-19,3-21a49.37054,49.37054,0,0,1,19,0l-12,10Z"
                      transform="translate(-152 -187.08642)"
                      opacity="0.1"
                    /><path
                      d="M564.34728,333.41358l-29-2,5,9s-40,12-27,46,33,66,33,66l13,25s27,4,28-4,0-12-5-16-8-12-8-16,1-8-2-10-4-5-4-11-11-28-11-28,35-1,46,8,47,43,47,43a30.29554,30.29554,0,0,1,5,7c2,4,2,6,6,8s1,10,0,11-11,41-11,41-11,19,1,20,23,2,24,0a54.36233,54.36233,0,0,1,4-8c3-5,0-16,0-16s29-37,20-60-28-75-28-75l-29-12-53-19Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><path
                      d="M562.34728,472.41358s-6,23-8,24-24,20-9,23,26,2,29-1,2-6,7-7,14-4,13-11-6-26-9-28S562.34728,472.41358,562.34728,472.41358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><path
                      d="M649.34728,523.41358s-9,7-4,20,12,27,12,27,8,25,21,21c5.28125-1.625,7.92188-6.05566,9.19577-10.7442a25.6964,25.6964,0,0,0-3.63167-20.90966l-7.5641-11.34614-8-21Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><path
                      d="M624.34728,229.41358s-12-1-14,2-11,43,0,47,44,11,49,6,7-49,7-49Z"
                      transform="translate(-152 -187.08642)"
                      fill="#a0616a"
                    /><path
                      d="M624.34728,229.41358s-12-1-14,2-11,43,0,47,44,11,49,6,7-49,7-49Z"
                      transform="translate(-152 -187.08642)"
                      opacity="0.1"
                    /><path
                      d="M606.34728,262.41358s14,14,23,12,30-11,32-15,27-5,27-5l-27,75,19,63s11-13-19-14-70-16-77-36c0,0-44-6-46-7s5-7,5-7l29-8,21-27Z"
                      transform="translate(-152 -187.08642)"
                      fill="#f2f2f2"
                    /><path
                      d="M615.34728,231.41358s5-7,0-7-19,0-24,1-24-4-26,2-2,43,2,46,6,3,1,9-17,26-14,33-32,9-27,17a16.42479,16.42479,0,0,0,13,8s2-16,14-8,28,28,41,15,18-25,19-42,0-28-2-38S615.34728,231.41358,615.34728,231.41358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><path
                      d="M667.34728,250.41358s8,7,0,24-29,57-12,83,24,33,20,38a19.42485,19.42485,0,0,0-4,11l11-4s2-14,6-24-8-40-8-40l4-39s16-25,18-26-4-44-4-44-10-3-15,0S667.34728,250.41358,667.34728,250.41358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><path
                      d="M571.34728,228.41358h-6l-41,21s-3-13-5-10-1,11-6,13-8,5,0,9,9,1,9,8,6,8,11,6,6-3,11-1,2,5,9,2,25-2,25-2Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><path
                      d="M691.34728,231.41358l7-2s21,2,26,2,10-1,13-1,18-2,20-4,11-7,12-4,12,22,2,31-12,5-18,9-54,12-55,11S691.34728,231.41358,691.34728,231.41358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#ff6347"
                    /><circle
                      cx="498.34728"
                      cy="52.32716"
                      r="30"
                      fill="#a0616a"
                    /><path
                      d="M628.27125,240.62a5.68193,5.68193,0,0,1,.62048,2.09953,7.85438,7.85438,0,0,0,7.51659,6.05575,4.6939,4.6939,0,0,0,4.06966,5.68292,25.86261,25.86261,0,0,0,4.4571-8.72693,8.01258,8.01258,0,0,1,1.506-3.4222c1.06537-1.12956,2.73-1.40655,4.27-1.605a224.53251,224.53251,0,0,1,24.06215-1.79285,5.982,5.982,0,0,0,3.16367-.64674c2.26071-1.45707,1.50643-4.97047.0785-7.24969a22.68689,22.68689,0,0,0-12.09915-9.44111c-3.58723-1.1654-7.39574-1.40867-11.14209-1.846-5.017-.58564-10.01077-1.53455-15.06172-1.56392s-10.2742.94226-14.40294,3.852c-3.00676,2.119-7.94133,8.05757-5.527,11.805.38661.60007,1.60761.89578,2.12712,1.50742.70692.83227.71013,2.0904,1.51323,2.84587C624.76353,239.43526,627.19453,239.03461,628.27125,240.62Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><path
                      d="M650.34728,189.41358s-34,12-31,29,12,37,31,36,29-21.6811,29-21.6811l-5-28.3189S655.34728,189.41358,650.34728,189.41358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#3f3d56"
                    /><path
                      d="M646.05693,249.422s13.367-14.5025,20.09654-6.09336C666.15347,243.32866,665.84728,242.91358,646.05693,249.422Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><path
                      d="M671.29553,620.229c-17.92578,0-40.1045-5.93848-61.71778-27.40234C556.6676,540.27784,506.401,535.00733,505.89953,534.96046l.18652-1.99219c.50879.04785,51.48829,5.39062,104.90186,58.43847,27.44629,27.25879,55.77539,28.92872,74.707,25.52735a93.3633,93.3633,0,0,0,34.999-14.10547l1.18164,1.61328a95.44494,95.44494,0,0,1-35.748,14.44629A83.49825,83.49825,0,0,1,671.29553,620.229Z"
                      transform="translate(-152 -187.08642)"
                      fill="#2f2e41"
                    /><circle
                      cx="380.84728"
                      cy="377.82716"
                      r="12"
                      fill="#2f2e41"
                    /><circle
                      cx="465.84728"
                      cy="433.82716"
                      r="12"
                      fill="#2f2e41"
                    /><path
                      d="M835.5,711.91358q-36.47625-5.71032-70.14288-9.71417L774,684.91358c-3-1-16,9-16,9l11-50c-15,2-22,53-22,53l-17-17,8.36835,19.24713c-68.68128-7.21667-127.94678-9.46881-177.76581-8.95227L568,675.41358c-3-1-16,9-16,9l11-50c-15,2-22,53-22,53l-17-17,8.8634,20.38586a997.84838,997.84838,0,0,0-102.02258,8.21589C438.22235,676.01954,464,653.91358,464,653.91358c-19.82056,6.16638-30.13214,16.2124-35.4693,25.5246A401.561,401.561,0,0,1,450,540.41358s-40,90-34,150l.76129,10.65808C381.96191,706.50043,364.5,711.91358,364.5,711.91358Z"
                      transform="translate(-152 -187.08642)"
                      fill="#3f3d56"
                    /></svg
                  >
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
        loading="lazy"
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
        {#each stories as story}
          <div
            class="rounded-lg bg-gray-50 p-5 ring-1 ring-gray-50 hover:border-gray-100 hover:bg-white hover:shadow-lg hover:ring-gray-100"
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
