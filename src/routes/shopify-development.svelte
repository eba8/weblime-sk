<script>
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
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
  <title>WebLime | Maryland's Leading Shopify Agency</title>
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
  <section class="bg-slate-900 lg:overflow-hidden lg:pb-14">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
        >
          <div class="py-10 lg:py-24">
            <h1
              class="text-center text-4xl font-extrabold tracking-tight text-white sm:py-2 sm:text-6xl lg:text-left xl:text-6xl"
            >
              <span class="block">Beautiful stores</span>
              <span class="block text-primary-500">built on Shopify</span>
            </h1>
            <p
              class="mt-3 text-center text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-left lg:text-lg xl:text-xl"
            >
              Millions of businesses around the world have made over $496
              billion USD in sales using Shopify.
            </p>
          </div>
        </div>
        <div class="mt-12 lg:relative lg:m-0">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <img
              class="hidden w-full lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:h-full lg:w-auto"
              src="/svg/shopify-online-store.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
  >
    <div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Some of our recent <span class="text-primary-600">
            Shopify stores</span
          >
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-slate-600 sm:mt-4">
          Beautiful, highly-functional Shopify stores that are made from trusted
          conversations in valued partnerships.
        </p>
      </div>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
            <ul
              class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              <li>
                <a
                  href="https://artsyolive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="/images/portfolio-clients/artsy-olive-shopify-store.jpg"
                        alt="woman holding child by the beach"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Artsy Olive</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          art prints
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://commonroomroasters.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="/images/portfolio-clients/crr-shopify-online-store.jpg"
                        alt="couple with child and dog walking in the park"
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Common Room Roasters</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          Specialty coffee
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://thistleandbee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="/images/portfolio-clients/thistle-bee-shopify-store.jpg"
                        alt="illustration of calculator and finance paper"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Thistle & Bee</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          bookkeeper
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <!-- <li>
                <a
                  href="https://www.resourcewranglers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/resource-wranglers-staffing-Shopify-site.png"
                        alt="illustration of resumes"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Resource Wranglers</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          staffing agency
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.monarchprime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/monarch-prime-Shopify-website.jpeg"
                        alt="finished construction project showing a kitchen island with wooden flooers"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Monarch Prime</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          construction
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lifebellai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/lifebellai.jpg"
                        alt="medical personnel"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">LifeBell AI</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          Health
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-slate-900">
    <div
      class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-white">
        Ecommerce advice that can tip the scales in your favor.
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-slate-200">
        We'll develop and maintain an ecommerce solutions that's backed by
        powerful tools that help you find customers, drive sales, and manage
        your day-to-day.
      </p>
      <div
        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Shopify CMS</h3>
            <p class="mt-2 text-base text-slate-200">
              A platform built for eCommerce with all the features you need to
              start, run, and grow your business.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
            >
              <!-- Heroicon name: outline/users -->
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
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Integrations</h3>
            <p class="mt-2 text-base text-slate-200">
              We'll help you integrate all of your favorite tools including
              Mailchimp, Hubspot, Zapier and more!
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Apps</h3>
            <p class="mt-2 text-base text-slate-200">
              A select few premium plugins can help keep your Shopify website
              lean and mean.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Email Marketing</h3>
            <p class="mt-2 text-base text-slate-200">
              Leverage email marketing and increase your revenue every month.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Branding</h3>
            <p class="mt-2 text-base text-slate-200">
              Create a visual identity that represents your brand and customers.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
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
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">Migrations</h3>
            <p class="mt-2 text-base text-slate-200">
              Already have a store somehwere? No problem. We'll help you migrate
              over everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-white pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
  >
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-8 md:px-24">
      <div class="mb-12 flex w-full flex-col items-center text-center">
        <h2
          class="mb-6 text-3xl font-semibold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl"
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
                How much does a Shopify store cost?
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
                Each online shop is priced differently based on the number of
                pages, features required and timeline.
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
                What&#039;s so good about Shopify?
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
                Shopify was built for eCommerce from the ground up.
                Functionality like credit card processing and shipping come
                built-in.
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
                How long will the store take to complete?
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
                The timeline for each store varies and is determined by
                different aspects of your website, including size, functionality
                and more. <br /><br />However, most websites can be completed
                and launched in 6-10 weeks.
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
                over 30+ sites in Shopify and have seen it all.
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
                Where can I sell with Shopify?
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
                Shopify lets you sell almost anywhere your customers are,
                including online, in-person, online marketplaces, and social
                media.
              </p>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </section>

  <ProjectInMind />
</main>
