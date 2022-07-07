<script>
  const d = new Date();
  let year = d.getFullYear();
  let cities = [
    {
      name: 'ORLANDO',
      link: '/',
    },
    {
      name: 'SEATTLE',
      link: '/',
    },
    {
      name: 'SAN DIEGO',
      link: '/',
    },
    {
      name: 'PHILADELPHIA',
      link: '/',
    },
    {
      name: 'PORTLAND',
      link: '/',
    },
    {
      name: 'SAN ANTONIO',
      link: '/',
    },
    {
      name: 'NEW ORLEANS',
      link: '/',
    },
    {
      name: 'PHOENIX',
      link: '/',
    },
    {
      name: 'MINNEAPOLIS',
      link: '/',
    },
    {
      name: 'MIAMI',
      link: '/',
    },
    {
      name: 'NEW YORK CITY',
      link: '/',
    },
    {
      name: 'LOUISVILLE',
      link: '/',
    },
    {
      name: 'LOS ANGELES',
      link: '/',
    },
    {
      name: 'LAS VEGAS',
      link: '/',
    },
    {
      name: 'KANSAS CITY',
      link: '/',
    },
    {
      name: 'JACKSONVILLE',
      link: '/',
    },
    {
      name: 'HOUSTON',
      link: '/',
    },
    {
      name: 'DENVER',
      link: '/',
    },
    {
      name: 'DALLAS',
      link: '/',
    },
    {
      name: 'CLEVELAND',
      link: '/',
    },
    {
      name: 'CHICAGO',
      link: '/',
    },
    {
      name: 'maryland',
      link: '/maryland-web-design-company',
    },
    {
      name: 'AUSTIN',
      link: '/',
    },
    {
      name: 'ATLANTA',
      link: '/',
    },
    {
      name: 'ARLINGTON',
      link: '/',
    },
  ];
</script>

<!-- <footer>
  <div class="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      <div class="px-5 py-2">
        <a href="/" class="text-base text-gray-500 hover:text-gray-900">
          Home
        </a>
      </div>

      <div class="px-5 py-2">
        <a
          sveltekit:prefetch
          href="/stories"
          class="text-base text-gray-500 hover:text-gray-900"
        >
          Stories
        </a>
      </div>
      <div class="px-5 py-2">
        <a
          href="/get-in-touch"
          class="text-base text-gray-500 hover:text-gray-900"
        >
          Get In Touch
        </a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center space-x-6">
      <a
        href="https://www.facebook.com/weblimeworld"
        class="text-slate-500 hover:text-slate-900"
      >
        <span class="sr-only">Facebook</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-facebook"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
          />
        </svg>
      </a>
      <a
        href="https://twitter.com/weblime_agency"
        class="text-slate-500 hover:text-slate-900"
      >
        <span class="sr-only">Twitter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-twitter"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/weblimeworld"
        class="text-slate-500 hover:text-slate-900"
      >
        <span class="sr-only">Instagram</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-instagram"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/channel/UC0hjnZ9u_OZBjnCYEqTWskQ"
        class="text-slate-500 hover:text-slate-900"
      >
        <span class="sr-only">YouTube</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-youtube"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="4" />
          <path d="M10 9l5 3l-5 3z" />
        </svg>
      </a>
    </div>
    <p class="mt-8 text-center text-base text-gray-600">
      &copy; {year} WebLime, Inc. All rights reserved.
    </p>
  </div>
</footer> -->

<footer class="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <section class="rounded-lg bg-slate-100 p-10">
      <div class="text-center">
        <h2
          class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Made with <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-10"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#84CC16"
            fill="#84CC16"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            />
          </svg> nationwide.
        </h2>
        <!-- <p class="mx-auto mt-3 max-w-2xl text-xl text-slate-100 sm:mt-4">
          43% of the web uses WordPress, from hobby blogs <br /> to the biggest news
          sites online.
        </p> -->
      </div>
      <div class="mx-auto mt-12 grid gap-1 lg:grid-cols-5">
        {#each cities as city}
          <div class="flex flex-col overflow-hidden">
            <a sveltekit:prefetch href={city.link} class="block">
              <div class="flex flex-1 flex-col justify-between text-center">
                <div class="flex-1">
                  <p class="text-base capitalize text-gray-500 ">
                    {city.name.toLocaleLowerCase()}
                  </p>
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </section>
    <div class="py-3 lg:flex lg:items-center lg:justify-between xl:mt-0">
      <div>
        <h3
          class="text-sm font-semibold uppercase tracking-wider text-slate-400"
        >
          Subscribe to our newsletter
        </h3>
        <p class="mt-2 text-base text-slate-500">
          The latest news, and resources, sent to your inbox.
        </p>
      </div>
      <!-- <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autocomplete="email"
          required
          class="focus:ring-indigo-500 focus:border-indigo-500 w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="bg-indigo-600 border-transparent hover:bg-indigo-700 focus:ring-indigo-500 flex w-full items-center justify-center rounded-md border py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >Subscribe</button
          >
        </div>
      </form> -->
      <div
        class="ml-form-embed"
        data-account="1989748:y8q2s0r8j3"
        data-form="5710621:z6v0g0"
      />
    </div>
    <div
      class="border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between"
    >
      <div class="flex space-x-6 md:order-2">
        <a
          href="https://www.facebook.com/weblimeworld"
          class="text-slate-500 hover:text-slate-900"
        >
          <span class="sr-only">Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/weblime_agency"
          class="text-slate-500 hover:text-slate-900"
        >
          <span class="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/weblimeworld"
          class="text-slate-500 hover:text-slate-900"
        >
          <span class="sr-only">Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UC0hjnZ9u_OZBjnCYEqTWskQ"
          class="text-slate-500 hover:text-slate-900"
        >
          <span class="sr-only">YouTube</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="4" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
        &copy; 2020-{year} WebLime. all rights reserved.
      </p>
    </div>
  </div>
</footer>
