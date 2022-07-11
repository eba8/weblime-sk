<script>
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  import SeoForm from '$lib/components/seoChecker/SeoForm.svelte';
  import { site_name, portfolio_url } from '$lib/info';

  import { slide } from 'svelte/transition';

  let question_1 = false;
  let question_2 = false;
  let question_3 = false;
  let question_4 = false;
  let question_5 = false;
  let question_6 = false;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>WebLime | WordPress Development</title>
  <meta name="title" content="WebLime - Portfolio" />
  <meta
    name="description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
  <link rel="canonical" href={portfolio_url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={portfolio_url} />
  <meta property="og:title" content="WebLime | Portfolio" />
  <meta
    property="og:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
  <meta
    property="og:image"
    content="https://www.weblime.com/https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:image"
    content="https://www.weblime.com/https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />
  <meta name="twitter:site" content="@weblime_agency" />
  <meta property="twitter:title" content="WebLime | Portfolio" />
  <meta
    property="twitter:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
</svelte:head>

<main>
  <section class=" lg:overflow-hidden lg:pb-14">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
        >
          <div class="py-10 lg:py-24">
            <h1
              class="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:py-2 sm:text-6xl lg:text-left xl:text-6xl"
            >
              <span class="block">Rank your site and </span>
              <span class="block text-primary-600">dominate online.</span>
            </h1>
            <p
              class="mt-3 text-center text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-left lg:text-lg xl:text-xl"
            >
              SEO increases organic traffic, drives more leads, and gets <br
              />you to the top of the Google SERP.
            </p>
          </div>
        </div>
        <div class="mt-12 lg:relative lg:m-0">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <img
              class="hidden w-full lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:h-full lg:w-auto"
              src="/svg/search-engine-growth-chart.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl p-5">
    <div class="rounded-b-lg shadow-lg">
      <div
        class="flex h-11 w-full items-center justify-start space-x-1.5 rounded-t-lg bg-gray-200 px-3"
      >
        <span class="h-3 w-3 rounded-full bg-red-400" />
        <span class="h-3 w-3 rounded-full bg-yellow-400" />
        <span class="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div class="aspect-h-9 w-full rounded-b-lg border-t-0 bg-gray-700">
        <img src="/images/seo/search-console-seo-results.png" alt="" />
      </div>
    </div>
  </section>

  <section class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h3
        class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
      >
        Everything you need to rank your website.
      </h3>
      <p class="mx-auto mt-5 max-w-prose text-xl text-slate-500">
        Ranking high in search results doesn't happen by accident. We cover
        everything to make sure your website stands out.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="10" cy="10" r="7" />
                      <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  Keyword Research
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <!-- Heroicon name: outline/lock-closed -->
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  On-Page Optimization
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <!-- Heroicon name: outline/refresh -->
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  Internal Linking Improvement
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  Building Links
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <!-- Heroicon name: outline/cog -->
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  Technical SEO
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg"
                  >
                    <!-- Heroicon name: outline/server -->
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  Content Writing
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-slate-900 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <h3
      class="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
    >
      Get Your FREE Instant <span class="text-primary-500"
        >SEO Audit Report</span
      >
    </h3>
    <div
      class="relative mx-auto mt-12 max-w-7xl px-6 pb-20 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
    >
      <div class="relative">
        <SeoForm />
      </div>
      <div class="relative mt-10 lg:mt-0" aria-hidden="true">
        <img src="/images/seo/weblime-seo-website-audit.png" alt="" />
      </div>
    </div>
  </section>

  <section
    class="w-full bg-white pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
  >
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-8 md:px-24">
      <div class="mb-12 flex w-full flex-col items-center text-center">
        <h2
          class="text-neutral-700 mb-6 text-4xl font-semibold tracking-tighter md:text-5xl"
        >
          Frequently Asked Questions
        </h2>
      </div>
      <div class="flex flex-wrap">
        <div class="mb-6 w-full space-y-6 lg:w-1/2 lg:pr-2">
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_1 = !question_1;
              question_2 = false;
              question_3 = false;
              question_4 = false;
              question_5 = false;
              question_6 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                How much does a website cost?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_1 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_1 == true}
              <p class="pt-2 text-slate-600" transition:slide>
                Each project is priced differently based on the number of pages,
                integrations and timeline.
              </p>
            {/if}
          </button>
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_2 = !question_2;
              question_1 = false;
              question_3 = false;
              question_4 = false;
              question_5 = false;
              question_6 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                What&#039;s so good about WordPress?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_2 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_2 == true}
              <p
                class="pt-2 text-slate-600 transition-all"
                class:duration-500={question_2 == true}
                transition:slide
              >
                WordPress is open source and actively maintained by thousands of
                developers globally. The performance, security, and flexibility
                offer a robust solution for websites.
              </p>
            {/if}
          </button>
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_3 = !question_3;
              question_2 = false;
              question_1 = false;
              question_4 = false;
              question_5 = false;
              question_6 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                How long will the website take to complete?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_3 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_3 == true}
              <p
                class="pt-2 text-slate-600 transition-all"
                class:duration-500={question_3 == true}
                transition:slide
              >
                The timelines for our projects vary and are determined by
                different aspects of your website, including size, functionality
                and more. However, most websites can be completed and launched
                in 6-10 weeks.
              </p>
            {/if}
          </button>
        </div>
        <div class="w-full space-y-6 lg:w-1/2 lg:pl-2">
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_4 = !question_4;
              question_2 = false;
              question_3 = false;
              question_1 = false;
              question_5 = false;
              question_6 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                How do I know you will do a good job?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_4 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_4 == true}
              <p
                class="pt-2 text-slate-600 transition-all"
                class:duration-500={question_4 == true}
                transition:slide
              >
                It's important to make sure you're in good hands. Check out our
                reviews to see what our customers had to say. We've developed
                over 30+ sites in WordPress and have seen it all.
              </p>
            {/if}
          </button>
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_5 = !question_5;
              question_2 = false;
              question_3 = false;
              question_4 = false;
              question_1 = false;
              question_6 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                What if I don't like the website you build?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_5 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_5 == true}
              <p
                class="pt-2 text-slate-600 transition-all"
                class:duration-500={question_5 == true}
                transition:slide
              >
                Don't worry, we won't deliver a website that you don't
                absolutely love.
                <br /><br />
                We hold several revisions throughout the design and development process
                to make sure we are right on track with what your business needs.
              </p>
            {/if}
          </button>
          <button
            class="w-full rounded-xl bg-slate-200 p-6 text-left shadow-lg"
            on:click={() => {
              question_6 = !question_6;
              question_2 = false;
              question_3 = false;
              question_4 = false;
              question_5 = false;
              question_1 = false;
            }}
          >
            <div class="flex w-full items-center justify-between rounded-xl">
              <span class="flex font-medium text-slate-900">
                How much does website support cost?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex h-4 w-4 transform transition-all duration-500"
                class:rotate-90={question_6 == true}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {#if question_6 == true}
              <p
                class="pt-2 text-slate-600 transition-all"
                class:duration-500={question_6 == true}
                transition:slide
              >
                This depends on the size and complexity of the website. For
                simple maintenance and updates, you can expect to pay a web
                design agency between $25-$75/month.
                <br /><br />We offer flexible monthly payment plans.
              </p>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </section>

  <ProjectInMind />
</main>
