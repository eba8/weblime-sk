<script>
  import { page } from '$app/stores';

  let plan = 'monthly';
  let monthly_packages = {
    local: '499',
    seo: '999',
    growth: '1,999',
    local_link: 'https://buy.stripe.com/3cs7ufdUPf2yefmcMM',
    seo_link: 'https://buy.stripe.com/aEUaGr5oj3jQc7e9AD',
    growth_link: 'https://buy.stripe.com/28oeWH2c79Ie4EMeUY',
  };

  let yearly_packages = {
    local: '5,499',
    seo: '10,999',
    growth: '21,999',
    local_link: 'https://buy.stripe.com/aEUcOzeYT1bI2wEbIJ',
    seo_link: 'https://buy.stripe.com/dR6bKvg2X07Egnu4gi',
    growth_link: 'https://buy.stripe.com/bIY3dZ4kf5rY2wEeUZ',
  };
</script>

<div class="bg-white">
  <!-- Hero -->
  <div class=" sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="px-5 text-center lg:px-5">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Marketing</span>
      </h1>
      <p
        class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        Our packages include everything you need so that you can focus on your
        business.
      </p>
    </div>
  </div>

  <!-- Pricing with four tiers and toggle -->
  <div class="bg-gradient-to-b from-white to-gray-50 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <div class="relative mt-6 self-center">
          <span
            class="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary-200 text-gray-900 uppercase"
          >
            Save 8% on yearly plans
          </span>
        </div>
        <div
          class="relative mt-6 bg-gray-100 rounded-lg p-0.5 flex self-center sm:mt-8"
        >
          <button
            on:click={() => (plan = 'monthly')}
            type="button"
            class="{plan === 'monthly'
              ? 'bg-white border-gray-200 rounded-md shadow-sm text-gray-900'
              : 'text-gray-700'} relative py-2 w-1/2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8"
            >Monthly billing</button
          >
          <button
            on:click={() => (plan = 'yearly')}
            type="button"
            class="{plan === 'yearly'
              ? 'bg-white border-gray-200 rounded-md shadow-sm text-gray-900'
              : 'text-gray-700'} ml-0.5 relative rounded-md py-2 w-1/2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8"
            >Yearly billing</button
          >
        </div>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
      >
        <div
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 text-center font-medium text-gray-900">
              Local
            </h2>
            <p class="mt-8 text-center">
              <span class="text-4xl font-extrabold text-gray-900"
                >${plan === 'monthly'
                  ? monthly_packages.local
                  : yearly_packages.local}</span
              >
              <span class="text-base font-medium text-gray-500"
                >{plan === 'monthly' ? 'a month.' : 'a year.'}</span
              >
            </p>
            <a
              href={plan === 'monthly'
                ? monthly_packages.local_link
                : yearly_packages.local_link}
              class="mt-8 block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >Subscribe to Local</a
            >
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Monitoring & Reporting</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Google Business Setup/Enhance</span
                >
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Citation Building</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-center text-gray-900">
              SEO
            </h2>

            <p class="mt-8 text-center">
              <span class="text-4xl font-extrabold text-gray-900"
                >${plan === 'monthly'
                  ? monthly_packages.seo
                  : yearly_packages.seo}</span
              >
              <span class="text-base font-medium text-gray-500"
                >{plan === 'monthly' ? 'a month.' : 'a year.'}</span
              >
            </p>
            <a
              href={plan === 'monthly'
                ? monthly_packages.seo_link
                : yearly_packages.seo_link}
              class="mt-8 block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >Subscribe to SEO</a
            >
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Monitoring & Reporting
                </span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Google Business Setup/Enhance</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Citation Building</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Monthly Link-Building (1 Topic)</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="relative border border-primary-500 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="absolute inset-x-0">
            <div class="flex justify-center transform -translate-y-1/2">
              <span
                class="inline-flex rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-gray-900"
              >
                Most popular
              </span>
            </div>
          </div>

          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-center text-gray-900">
              Growth
            </h2>
            <p class="mt-8 text-center">
              <span class="text-4xl font-extrabold text-gray-900"
                >${plan === 'monthly'
                  ? monthly_packages.growth
                  : yearly_packages.growth}</span
              >
              <span class="text-base font-medium text-gray-500"
                >{plan === 'monthly' ? 'a month.' : 'a year.'}</span
              >
            </p>
            <a
              href={plan === 'monthly'
                ? monthly_packages.growth_link
                : yearly_packages.growth_link}
              class="mt-8 block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >Subscribe to Growth</a
            >
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Monitoring & Reporting
                </span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Google Business Setup/Enhance</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Citation Building</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Monthly Link-Building (2 Topics)</span
                >
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >2 Custom Social Posts Per Week (3 Channels)</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 text-center font-medium text-gray-900">
              Enterprise
            </h2>
            <p class="mt-8 text-center">
              <span class="text-4xl font-extrabold text-gray-900">Quote</span>
            </p>
            <a
              sveltekit:prefetch
              href="/get-in-touch"
              class="mt-8 block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              class:active={$page.path === '/get-in-touch'}>Request Quote</a
            >
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Monitoring & Reporting
                </span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >Google Business Setup/Enhance</span
                >
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Citation Building</span>
              </li>

              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Monthly Link-Building</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >3 Custom Social Posts Per Week</span
                >
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">Media Buying</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500">PPC Ads</span>
              </li>
              <li class="flex space-x-3">
                <!-- Heroicon name: solid/check -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500"
                  >In-app chat, email, Slack + phone</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ offset -->
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div class="space-y-4">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <p class="text-lg text-gray-500">
          Can’t find the answer you’re looking for? Reach out to our <a
            href="/"
            class="font-medium text-primary-600 hover:text-primary-500"
            >customer support</a
          > team.
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-12">
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              How involved do I have to be in the process?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              As much as you want to be. We have some clients who are very
              involved but most let our team take the ball and run with it.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Am I under any contract?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Our monthly plans are flexible and do not include a contract. Our
              annual plans can save you money but are non-refundable.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              How do I know you’ll do a good job for me?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Check out our reviews - we go above and beyond for our clients,
              and our reviews reflect this.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              What if I already have a website or domain through another
              provider?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              It’s a common misconception that if you already have a domain or a
              website you are stuck with your current provider.
              <br /><br />
              This couldn’t be further from the truth. If you have an existing website
              through another provider, you will keep the same website address.
              <br /><br />
              When it comes time to set your site live, our technical team will handle
              everything - you may need to approve your current provider to grant
              us access.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
