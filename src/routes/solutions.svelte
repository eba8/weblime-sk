<script>
  import { site_name, solutions_url } from '$lib/info';
  let title = 'WebLime - Solutions';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta
    name="description"
    content="WebLime is a digital agency focused on increasing the ROI of clients through several online channels. Get your FREE PROPOSAL today."
  />
  <link rel="canonical" href={solutions_url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={solutions_url} />
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
  <!-- Hero section -->
  <div class="bg-primary-500 sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="pb-5 text-center">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Everything you need in </span>
        <span class="block text-white xl:inline">one place.</span>
      </h1>
    </div>
  </div>
  <!-- Our Approach Section -->
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        Our Approach
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        From quick wins to long term strategies, we'll work together to help you
        scale to new heights while maintaing costs.
      </p>
      <div
        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
            >
              <img class="h-24 w-24" src="/svg/Tea-01.svg" alt="tea mug icon" />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-gray-800">Advise</h3>
            <p class="text-base text-gray-500">
              Tea or coffee, whatever does it for you! Together, we'll determine
              the best actionable plan for your business, and monitor the
              results along the way.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
            >
              <img
                class="h-24 w-24"
                src="/svg/Cog_Wheels-01.svg"
                alt="cog wheels icon"
              />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-gray-800">Build</h3>
            <p class="text-base text-gray-500">
              We’ll build your website from the ground up. Should you change
              your mind about details down the road, it all belongs to you.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
            >
              <img
                class="h-24 w-24"
                src="/svg/growth-chart.svg"
                alt="growth chart icon"
              />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-gray-800">Scale</h3>
            <p class="text-base text-gray-500">
              Once going live, there's a need to continue optimizing as traffic
              flows through your doors. As much as you plan ahead, there are
              things that can't be forseen.
            </p>
          </div>
        </div>

        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10"
            >
              <img
                class="h-24 w-24"
                src="/svg/Ballance-01.svg"
                alt="ballance icon"
              />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-gray-800">Integrate</h3>
            <p class="text-base text-gray-500">
              As your projects matures, so will the ideas for growth.
              Integrating with third-part systems can provide solutions to scale
              and automate, so that you can focus on other parts of your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative">
        <h2
          class="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          We've got your business covered.
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          Whether it’s migrating from another platform or building an entire
          brand, we’ve got you covered.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
      >
        <div class="relative">
          <h3
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            A compelling experience
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Create a compelling experience online, with mobile and tablet in
            mind. Websites and custom web applications that scale.
          </p>

          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div
                  class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Development
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                WordPress, Shopify or custom builds. We implement the best
                practices possible so that your brand reaches both far and wide.
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
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Performance
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                We will carefully monitor your website’s performance to
                understand how we can optimize your online presence.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                >
                  <!-- Heroicon name: lock-closed -->
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Complete Ownership
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                You keep everything from accounts to creatives. From AdWords to
                landing pages, they’re always yours.
              </dd>
            </div>
          </dl>
        </div>

        <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <img
            class="relative mx-auto"
            width="490"
            src="/svg/design-weblime-illustration.svg"
            alt="WebLime solutions design illustration"
          />
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
            >
              Certified Shopify Partners
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Over 1,000,000 businesses in 175 countries around the world have
              made over $200 billion USD in sales using Shopify.
            </p>

            <dl class="mt-10 space-y-10">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                  >
                    <!-- Heroicon name: outline/annotation -->
                    <svg
                      class="h-6 w-6"
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Shopify Store Development & Maintenance
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  We'll develop and maintain an ecommerce solutions that's
                  backed by powerful tools that help you find customers, drive
                  sales, and manage your day-to-day.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div
                    class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                  >
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="h-6 w-6"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Shopify Marketing Services
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Building your store is only the first step. Reach your ideal
                  shopper with content marketing, through SEO, and on social
                  media.
                </dd>
              </div>
            </dl>
          </div>

          <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img
              class="relative mx-auto"
              width="490"
              src="/svg/weblime-shopify.svg"
              alt="WebLime Solutions ecommerce illustration"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <script
    data-widget-id="b766b6532d39255f50074860000e1f2df242bd99"
    src="https://www.local-marketing-reports.com/m/assets-v2/lead-gen/js/external/widget-builder.js"></script>

  <div class="flex flex-col items-center bg-gray-900 pb-6">
    <a
      href="https://www.designrush.com/agency/search-engine-optimization/maryland"
    >
      <img
        class="w-56"
        src="/images/seo/Design-Rush-Accredited-Badge.png"
        alt="Top Maryland SEO Companies Badge"
      />
    </a>
  </div>

  <!-- Emerging Techonlogies section -->
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <h2
            class="max-auto text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Emerging technologies
          </h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-500">
            The possibilities are endless. We'll implement some of the best
            technological solutions in the game.
          </p>
          <div class="mt-8 sm:flex">
            <div class="rounded-md">
              <a
                href="/portfolio"
                class="border-transparent flex items-center justify-center rounded-md border bg-primary-500 px-5 py-3 text-base font-medium text-gray-900 hover:bg-primary-600"
              >
                Portfolio
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/get-in-touch"
                class="border-transparent flex items-center justify-center rounded-md border border-gray-900 bg-gray-900 px-5 py-3 text-base font-medium text-white hover:bg-gray-800"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div
          class="mt-8 grid grid-cols-2 gap-0.5 bg-gray-200 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
        >
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/stripe.png"
              alt="WebLime solutions stripe logo"
            />
          </div>
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/klaviyo.png"
              alt="WebLime solutions klaviyo logo"
            />
          </div>
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/recharge.svg"
              alt="WebLime solutions recharge logo"
            />
          </div>
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/shopify.jpg"
              alt="WebLime solutions shopify logo"
            />
          </div>
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/slack.png"
              alt="WebLime solutions slack logo"
            />
          </div>
          <div class="col-span-1 flex justify-center bg-white px-8 py-8">
            <img
              class="max-h-12"
              src="/images/tech/wordpress-logo.png"
              alt="WebLime solutions wordpress logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <section class="bg-white">
    <div
      class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Running a nonprofit?</span>
        <span class="block">We can help.</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a
            href="/get-in-touch"
            class="border-transparent inline-flex items-center justify-center rounded-md border bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700"
          >
            Get Started
          </a>
        </div>
        <div class="ml-3 inline-flex">
          <a
            href="/solutions-nonprofits"
            class="border-transparent flex items-center justify-center rounded-md border border-gray-900 bg-gray-900 px-5 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
