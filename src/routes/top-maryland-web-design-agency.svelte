<script>
  import Testimonials from '$lib/components/testimonials/Testimonials.svelte';
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  import { fade } from 'svelte/transition';

  let name;
  let email;
  let message;
  let honeypot = '';
  let phone;
  let display_message = false;

  async function handleSubmit() {
    const res = await fetch('https://weblime-email.edan.workers.dev', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        name: name,
        eml: email,
        message: message,
        eml2: honeypot,
        phone: phone,
      }), // body data type must match "Content-Type" header
    });
    display_message = res.status == 200 ? true : false;
  }
</script>

<main class="mx-auto">
  <!-- Hero section -->
  <div class="bg-gray-800">
    <div class="sm:pt-16 lg:pt-8 lg:pb-14 max-w-7xl mx-auto">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
        >
          <div>
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
            >
              <span class="md:block">Take your business</span>
              <span class="text-primary-400 md:block">to the next level.</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Stand out from the competition with an online presence that gets
              you noticed. We build custom websites that are intuitive to
              maintain and easy to expand and grow.
            </p>
            <p
              class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"
            >
              The best solutions in the game
            </p>
            <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
              <div class="flex flex-wrap items-start justify-between">
                <div class="flex justify-center px-1">
                  <img
                    class="h-9 sm:h-10"
                    src="/images/tech/shopify-partner-gray-logo.png"
                    alt="WebLime solutions wordpress logo"
                  />
                </div>
                <div class="flex justify-center px-1">
                  <img
                    class="h-9 sm:h-10"
                    src="/images/tech/shopify-partner-gray-logo.png"
                    alt="WebLime solutions shopify logo"
                  />
                </div>
                <div class="flex justify-center px-1">
                  <img
                    class="h-9 sm:h-10"
                    src="/images/tech/shopify-partner-gray-logo.png"
                    alt="WebLime solutions stripe logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
          <div
            class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
          >
            <div class="px-4 py-8 sm:px-10">
              <div class="mt-6">
                <form
                  on:submit|once|preventDefault={handleSubmit}
                  class="space-y-6"
                  method="POST"
                  id="form-contact"
                >
                  <div
                    class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                  >
                    <div class="sm:col-span-6">
                      <input
                        class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        bind:value={name}
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <input
                        class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
                        type="email"
                        name="eml"
                        placeholder="Email"
                        required
                        bind:value={email}
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <input
                        class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        bind:value={phone}
                      />
                    </div>
                    <div class="sm:col-span-6">
                      <textarea
                        class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Tell us what we can help you with!"
                        required
                        bind:value={message}
                      />
                    </div>
                    <input
                      class="hidden w-full px-4 py-2 border border-gray-200 rounded-md border-1"
                      type="tel"
                      name="eml2"
                      placeholder=""
                      bind:value={honeypot}
                    />
                    <button
                      class="sm:col-span-6 px-6 py-3 text-lg font-medium text-primary-500 rounded-md bg-gray-900 hover:bg-gray-800"
                    >
                      Get a Quote
                    </button>
                    {#if display_message === true}
                      <div
                        transition:fade
                        class="sm:col-span-6 px-6 py-3 bg-primary-500 text-gray-800 text-center rounded-md
                "
                      >
                        <p>Your message has been sent!</p>
                      </div>
                    {/if}
                  </div>
                </form>
                <!-- <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label for="name" class="sr-only">Full name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="name"
                      placeholder="Full name"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label for="mobile-or-email" class="sr-only"
                      >Mobile number or email</label
                    >
                    <input
                      type="text"
                      name="mobile-or-email"
                      id="mobile-or-email"
                      autocomplete="email"
                      placeholder="Mobile number or email"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-gray-800 bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      Get a Quote
                    </button>
                  </div>
                </form> -->
              </div>
            </div>
            <!-- <div
              class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
            >
              <p class="text-xs leading-5 text-gray-500">
                By signing up, you agree to our <a
                  href="#"
                  class="font-medium text-gray-900 hover:underline">Terms</a
                >,
                <a href="#" class="font-medium text-gray-900 hover:underline"
                  >Data Policy</a
                >
                and
                <a href="#" class="font-medium text-gray-900 hover:underline"
                  >Cookies Policy</a
                >.
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- HERO END -->
  <div class="py-16 overflow-hidden bg-gray-50 lg:py-24">
    <div class="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2
          class="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
        >
          We've got your business covered.
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
          Whether it’s migrating from another platform or building an entire
          brand, we’ve got you covered.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
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
                  class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="w-6 h-6"
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
                  class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg
                    class="w-6 h-6"
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
                  class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: lock-closed -->
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

        <div class="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
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
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
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
                    class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
                  >
                    <!-- Heroicon name: outline/annotation -->
                    <svg
                      class="w-6 h-6"
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
                    class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500"
                  >
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="w-6 h-6"
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

          <div class="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
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
  <Testimonials />
  <div
    class="relative px-6 mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center max-w-7xl mx-auto pb-20"
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
        src="/svg/weblime-laying-down-illustration.svg"
        alt="woman laying down working"
      />
    </div>
  </div>
  <ProjectInMind />
</main>
