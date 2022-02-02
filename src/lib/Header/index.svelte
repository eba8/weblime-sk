<script>
  import { page } from '$app/stores';
  let mobile_menu = false;
</script>

<header>
  <div
    class:theme-lime={$page.url.pathname === '/solutions'}
    class:theme-black={$page.url.pathname === '/portfolio' ||
      $page.url.pathname === '/top-maryland-web-design-agency'}
    class="relative pt-6 pb-16 sm:pb-24 lg:pb-32 bg-skin-hero"
  >
    <nav
      class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
      aria-label="Global"
    >
      <div class="flex items-center flex-1">
        <div
          class="flex items-center text-skin-base justify-between w-full md:w-auto"
        >
          <a sveltekit:prefetch href="/">
            <svg
              class="h-9 w-9 fill-current text-skin-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M193.33,36.72l-80.44,48.1c-.08,0-.34.22-.51.33L95,95.52h0L32.4,133h0L12.83,144.65A5.13,5.13,0,0,0,11,151.58s.29.51.3.54a122.85,122.85,0,0,0,25.56,30.63,120.63,120.63,0,0,0,140.93,12.14c57.58-34.46,76.62-109.67,42.27-168a5.16,5.16,0,0,0-3.17-2.48,5.21,5.21,0,0,0-4,.55L193.33,36.72Zm5,21.38c.45,1.19.89,2.37,1.28,3.57.49,1.48.92,3,1.33,4.48.33,1.21.66,2.41.94,3.62.35,1.54.62,3.09.89,4.65.2,1.2.43,2.4.59,3.61.21,1.6.32,3.22.45,4.83.09,1.18.21,2.36.24,3.54.06,1.7,0,3.41,0,5.12,0,1.1,0,2.21-.07,3.31-.11,1.9-.35,3.8-.58,5.7-.12.92-.17,1.84-.31,2.76-.18,1.12-.47,2.24-.69,3.35l-74.14-19L194,48.32c.34.66.71,1.3,1,2q.85,1.73,1.62,3.48C197.24,55.2,197.83,56.65,198.38,58.1ZM150.93,171.37c-1.75.76-3.5,1.52-5.29,2.16-1,.35-1.94.62-2.91.93-1.71.55-3.42,1.09-5.15,1.53-1,.26-2,.46-3.06.68-1.72.38-3.45.74-5.18,1-1.05.16-2.1.27-3.16.4-1.72.21-3.44.38-5.18.49-1.08.06-2.17.09-3.26.12-1.7,0-3.39,0-5.09,0-1.13,0-2.25-.1-3.39-.19-1.64-.12-3.26-.29-4.9-.5-1.18-.16-2.36-.32-3.53-.53-.64-.11-1.27-.27-1.9-.39l18.75-73.95,38.69,65.65c-1,.51-1.93,1.08-2.93,1.55C152.62,170.7,151.77,171,150.93,171.37ZM56.3,155.65c-.63-.58-1.22-1.2-1.83-1.8-1.34-1.29-2.65-2.6-3.9-4-.68-.75-1.32-1.54-2-2.31q-1.66-2-3.23-4c-.64-.85-1.27-1.72-1.87-2.6-.43-.6-.81-1.25-1.23-1.87l58-34.64a6.58,6.58,0,0,0,.61-.42l7.05-4.21L89,174.5c-.66-.21-1.33-.38-2-.61-1-.35-2-.72-3-1.11-1.6-.62-3.19-1.29-4.74-2-.94-.42-1.87-.84-2.79-1.29-1.66-.83-3.27-1.73-4.87-2.67-.75-.44-1.52-.84-2.26-1.3-2.31-1.45-4.56-3-6.74-4.63S58.3,157.47,56.3,155.65Zm108.9,7.83-38.71-65.7,73.42,18.85A87.84,87.84,0,0,1,165.2,163.48ZM213.64,36.54c28.12,52.53,10.25,118.76-41.15,149.51A110.32,110.32,0,0,1,43.54,175a112,112,0,0,1-21-24.14l10.75-6.41c.52.8,1.12,1.54,1.67,2.33.69,1,1.39,2,2.12,3,1.12,1.5,2.31,2.94,3.52,4.38.75.88,1.48,1.78,2.26,2.65,1.37,1.5,2.82,2.94,4.29,4.36.71.7,1.39,1.42,2.13,2.09,2.24,2.05,4.56,4,7,5.87s5.28,3.82,8.05,5.53A97.6,97.6,0,0,0,91.32,186c2.92.76,5.88,1.34,8.86,1.82l1,.17q4.51.68,9.07.93l.38,0a97.54,97.54,0,0,0,25.19-1.87c1.11-.23,2.2-.56,3.3-.84a1.83,1.83,0,0,0,.25-.06c2.87-.71,5.71-1.56,8.5-2.53.38-.14.75-.25,1.12-.39q3.75-1.35,7.39-3c.52-.23,1-.44,1.55-.68,2.79-1.34,5.55-2.77,8.24-4.37a98.41,98.41,0,0,0,45.18-60.91h0c.79-3.12,1.42-6.26,1.91-9.41.16-1,.22-2.08.34-3.13.26-2.1.53-4.2.66-6.3.07-1.26,0-2.52.07-3.78.05-1.88.1-3.77,0-5.65,0-1.34-.19-2.67-.29-4-.14-1.79-.27-3.57-.5-5.36-.18-1.37-.44-2.73-.68-4.1-.3-1.72-.61-3.44-1-5.16-.32-1.38-.7-2.74-1.08-4.11-.46-1.67-.94-3.33-1.49-5-.45-1.37-1-2.73-1.48-4.07-.61-1.63-1.26-3.24-2-4.83-.59-1.34-1.21-2.66-1.86-4-.4-.8-.72-1.61-1.13-2.4Z"
              />
            </svg><span class="sr-only">Weblime</span></a
          >
          <div class="flex items-center -mr-2 md:hidden">
            <button
              on:click={() => {
                mobile_menu = !mobile_menu;
              }}
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 mobile-menu-open"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-10">
          <a
            sveltekit:prefetch
            href="/solutions"
            class="font-medium text-skin-base hover:text-skin-text-base-hover"
            >Solutions</a
          >
          <a
            sveltekit:prefetch
            href="/portfolio"
            class="font-medium text-skin-base hover:text-skin-text-base-hover"
            >Portfolio</a
          >
        </div>
      </div>
      <div class="hidden text-right md:block">
        <span class="inline-flex rounded-md">
          <a
            sveltekit:prefetch
            href="/get-in-touch/"
            class="inline-flex items-center px-5 py-2 text-base font-medium rounded-md text-skin-inverted bg-skin-fill"
          >
            Get In Touch
          </a>
        </span>
      </div>
    </nav>
  </div>

  {#if mobile_menu}
    <!-- MOBILE MENU -->
    <div
      class="absolute inset-x-0 top-0 p-2 overflow-visible transition origin-top-right transform"
    >
      <div
        class="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
      >
        <div class="flex items-center justify-between px-5 pt-4">
          <div>
            <a href="/" target="home">
              <svg
                class="fill-current h-9 w-9 text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 250 250"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M193.33,36.72l-80.44,48.1c-.08,0-.34.22-.51.33L95,95.52h0L32.4,133h0L12.83,144.65A5.13,5.13,0,0,0,11,151.58s.29.51.3.54a122.85,122.85,0,0,0,25.56,30.63,120.63,120.63,0,0,0,140.93,12.14c57.58-34.46,76.62-109.67,42.27-168a5.16,5.16,0,0,0-3.17-2.48,5.21,5.21,0,0,0-4,.55L193.33,36.72Zm5,21.38c.45,1.19.89,2.37,1.28,3.57.49,1.48.92,3,1.33,4.48.33,1.21.66,2.41.94,3.62.35,1.54.62,3.09.89,4.65.2,1.2.43,2.4.59,3.61.21,1.6.32,3.22.45,4.83.09,1.18.21,2.36.24,3.54.06,1.7,0,3.41,0,5.12,0,1.1,0,2.21-.07,3.31-.11,1.9-.35,3.8-.58,5.7-.12.92-.17,1.84-.31,2.76-.18,1.12-.47,2.24-.69,3.35l-74.14-19L194,48.32c.34.66.71,1.3,1,2q.85,1.73,1.62,3.48C197.24,55.2,197.83,56.65,198.38,58.1ZM150.93,171.37c-1.75.76-3.5,1.52-5.29,2.16-1,.35-1.94.62-2.91.93-1.71.55-3.42,1.09-5.15,1.53-1,.26-2,.46-3.06.68-1.72.38-3.45.74-5.18,1-1.05.16-2.1.27-3.16.4-1.72.21-3.44.38-5.18.49-1.08.06-2.17.09-3.26.12-1.7,0-3.39,0-5.09,0-1.13,0-2.25-.1-3.39-.19-1.64-.12-3.26-.29-4.9-.5-1.18-.16-2.36-.32-3.53-.53-.64-.11-1.27-.27-1.9-.39l18.75-73.95,38.69,65.65c-1,.51-1.93,1.08-2.93,1.55C152.62,170.7,151.77,171,150.93,171.37ZM56.3,155.65c-.63-.58-1.22-1.2-1.83-1.8-1.34-1.29-2.65-2.6-3.9-4-.68-.75-1.32-1.54-2-2.31q-1.66-2-3.23-4c-.64-.85-1.27-1.72-1.87-2.6-.43-.6-.81-1.25-1.23-1.87l58-34.64a6.58,6.58,0,0,0,.61-.42l7.05-4.21L89,174.5c-.66-.21-1.33-.38-2-.61-1-.35-2-.72-3-1.11-1.6-.62-3.19-1.29-4.74-2-.94-.42-1.87-.84-2.79-1.29-1.66-.83-3.27-1.73-4.87-2.67-.75-.44-1.52-.84-2.26-1.3-2.31-1.45-4.56-3-6.74-4.63S58.3,157.47,56.3,155.65Zm108.9,7.83-38.71-65.7,73.42,18.85A87.84,87.84,0,0,1,165.2,163.48ZM213.64,36.54c28.12,52.53,10.25,118.76-41.15,149.51A110.32,110.32,0,0,1,43.54,175a112,112,0,0,1-21-24.14l10.75-6.41c.52.8,1.12,1.54,1.67,2.33.69,1,1.39,2,2.12,3,1.12,1.5,2.31,2.94,3.52,4.38.75.88,1.48,1.78,2.26,2.65,1.37,1.5,2.82,2.94,4.29,4.36.71.7,1.39,1.42,2.13,2.09,2.24,2.05,4.56,4,7,5.87s5.28,3.82,8.05,5.53A97.6,97.6,0,0,0,91.32,186c2.92.76,5.88,1.34,8.86,1.82l1,.17q4.51.68,9.07.93l.38,0a97.54,97.54,0,0,0,25.19-1.87c1.11-.23,2.2-.56,3.3-.84a1.83,1.83,0,0,0,.25-.06c2.87-.71,5.71-1.56,8.5-2.53.38-.14.75-.25,1.12-.39q3.75-1.35,7.39-3c.52-.23,1-.44,1.55-.68,2.79-1.34,5.55-2.77,8.24-4.37a98.41,98.41,0,0,0,45.18-60.91h0c.79-3.12,1.42-6.26,1.91-9.41.16-1,.22-2.08.34-3.13.26-2.1.53-4.2.66-6.3.07-1.26,0-2.52.07-3.78.05-1.88.1-3.77,0-5.65,0-1.34-.19-2.67-.29-4-.14-1.79-.27-3.57-.5-5.36-.18-1.37-.44-2.73-.68-4.1-.3-1.72-.61-3.44-1-5.16-.32-1.38-.7-2.74-1.08-4.11-.46-1.67-.94-3.33-1.49-5-.45-1.37-1-2.73-1.48-4.07-.61-1.63-1.26-3.24-2-4.83-.59-1.34-1.21-2.66-1.86-4-.4-.8-.72-1.61-1.13-2.4Z"
                />
              </svg>
            </a>
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                on:click={() => {
                  mobile_menu = !mobile_menu;
                }}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            on:click={() => {
              mobile_menu = !mobile_menu;
            }}
            href="/solutions"
            class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >Solutions</a
          >
          <a
            on:click={() => {
              mobile_menu = !mobile_menu;
            }}
            href="/portfolio"
            class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >Portfolio</a
          >
        </div>
        <a
          on:click={() => {
            mobile_menu = !mobile_menu;
          }}
          href="/get-in-touch/"
          class="block w-full px-5 py-3 rounded-b-md font-medium text-center text-primary-600 bg-gray-100 hover:bg-gray-100"
        >
          Get In Touch
        </a>
      </div>
    </div>
  {/if}
</header>
