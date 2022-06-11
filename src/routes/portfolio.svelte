<script>
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  import { site_name, portfolio_url } from '$lib/info';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>WebLime | Portfolio</title>
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

<main class="mx-auto">
  <!-- Hero section -->
  <div class="bg-gray-800 sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="px-5 pb-5 text-center lg:px-5">
      <h1
        class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Want to see what we're made of?</span>
      </h1>
      <p
        class="mx-auto mt-3 max-w-md text-base text-gray-50 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
      >
        These highly-functional websites are made from trusted conversations in
        valued partnerships. It's the only way to get to the heart of a brand.
      </p>
    </div>
  </div>

  <div
    class="relative bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
  >
    <div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          WordPress
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          43% of the web uses WordPress, from hobby blogs to the biggest news
          sites online.
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
                  href="https://brock4insurance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/brock-insurance-wordpress-site.jpg"
                        alt="woman holding child by the beach"
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Brock Insurance</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          <span>insurance, </span>
                          <span>E-mail automation, </span>
                          <span>Blog</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://pawsbetweenhomes.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/paws-between-homes-wordpress-site.jpg"
                        alt="couple with child and dog walking in the park"
                      />
                    </div>

                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Paws Between Homes</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          <span>nonprofit, </span>
                          <span>MailChimp Integration, </span>
                          <span>Google Sheets automations, </span>
                          <span>Give Lively Donations</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://inspired-accounting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/inspired-accounting-wordpress.png"
                        alt="illustration of calculator and finance paper"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Inspired Accounting</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          <span>bookkeeper, </span>
                          <span>Form integrations, </span>
                          <span>HubSpot Integration, </span>
                          <span>Calendly Integration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.resourcewranglers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="space-y-4">
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src="https://www.weblime.com/images/portfolio-clients/resource-wranglers-staffing-wordpress-site.png"
                        alt="illustration of resumes"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Resource Wranglers</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          <span>staffing agency, </span>
                          <span>blog, </span>
                          <span>Loxo integration</span>
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
                        src="https://www.weblime.com/images/portfolio-clients/monarch-prime-wordpress-website.jpeg"
                        alt="finished construction project showing a kitchen island with wooden flooers"
                      />
                    </div>
                    <div class="space-y-2">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-2xl">Monarch Prime</h3>
                        <p class="inline text-sm uppercase text-primary-600">
                          <span>construction, </span>
                          <span>blog</span>
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
                          <span>Health, </span>
                          <span>Marketing</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
          <h2
            class="mb-5 text-3xl font-semibold leading-6 tracking-wider text-primary-500"
          >
            E-Commerce
          </h2>
          <p
            class="mx-auto mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
          >
            One platform with all the ecommerce and point of sale features you
            need to start, run, and grow your business.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-900" />
        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="mx-auto max-w-md space-y-4 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-5 lg:space-y-0"
          >
            <div class="flex flex-col overflow-hidden rounded-lg shadow-md">
              <div class="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                <div class="mt-4 flex items-baseline text-4xl">Ocnean Pets</div>
                <p class="mt-5 text-lg text-gray-500">
                  Ocnean's mission is to source USA made, eco-friendly healthy
                  products that benefit animals.
                </p>
              </div>
              <div
                class="flex flex-1 flex-col justify-between space-y-6 bg-white px-6 pt-6 pb-8 sm:p-10 sm:pt-6"
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Custom Shopify design
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Form integrations
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      E-mail automations
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Recurring orders</p>
                  </li>
                </ul>
                <div class="rounded-md">
                  <a
                    href="https://ocnean.com"
                    class="flex items-center justify-center rounded-md bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    aria-describedby="tier-standard"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-md">
              <div class="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                <div class="mt-4 flex items-baseline text-4xl">
                  Thistle & Bee
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  Thistle & Bee's mission is to help women who have survived
                  prostitution and trafficking thrive.
                </p>
              </div>
              <div
                class="flex flex-1 flex-col justify-between space-y-6 bg-white px-6 pt-6 pb-8 sm:p-10 sm:pt-6"
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Custom Shopify build
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Stripe integration
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Recurring orders</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Integrations for donations
                    </p>
                  </li>
                </ul>
                <div class="rounded-md">
                  <a
                    href="https://thistleandbee.org"
                    class="flex items-center justify-center rounded-md bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    aria-describedby="tier-standard"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg shadow-md">
              <div class="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                <div class="mt-4 flex items-baseline text-4xl">
                  Common Roasters
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  A Specialty Coffee Roastery, offering both single origin and
                  blended coffees from all around the world.
                </p>
              </div>
              <div
                class="flex flex-1 flex-col justify-between space-y-6 bg-white px-6 pt-6 pb-8 sm:p-10 sm:pt-6"
              >
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Custom Shopify build
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Quickbooks integration
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Recurring orders</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg
                        class="h-6 w-6 text-primary-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Mailchimp</p>
                  </li>
                </ul>
                <div class="rounded-md">
                  <a
                    href="https://www.commonroomroasters.com"
                    class="flex items-center justify-center rounded-md bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ProjectInMind />
</main>
