<script>
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { site_name } from '$lib/info';

  let name;
  let email;
  let message;
  let honeypot = '';
  let phone;
  let display_message = false;
  let response_message;

  async function handleSubmit() {
    response_message = 'Sending..';
    const res = await fetch(
      'https://hook.us1.make.com/38umae64e4jyqn5ysvwsctoqeeqgayun',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
          name: name,
          eml: email,
          message: message,
          eml2: honeypot,
          phone: phone.replace(/[^+\d]+/g, ''),
          page_source: $page.url.href,
        }), // body data type must match "Content-Type" header
      },
    );
    response_message = 'Sending....';
    display_message = res.status == 200 ? true : false;
    if (display_message == true) {
      response_message = 'Your message has been sent!';
      gtag_report_conversion();
      plausible('Get In Touch');
    }

    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof url != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        send_to: 'AW-663674682/c-1CCND7wZcDELq-u7wC',
        event_callback: callback,
      });
      return false;
    }
  }
</script>

<svelte:head>
  <title>WebLime - Get In Touch</title>
  <meta
    name="description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
  <link rel="canonical" href={$page.url.href} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content="WebLime | Get In Touch" />
  <meta
    property="og:description"
    content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions."
  />
  <meta
    property="og:image"
    content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />

  <!-- Global site tag (gtag.js) - Google Ads: 663674682 -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=AW-663674682"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-663674682');
  </script>

  <script>
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  </script>
</svelte:head>

<main class="mx-auto pt-16 sm:pt-24 lg:pt-28">
  <!-- Hero section -->
  <div class="sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="pb-5 text-center">
      <h1
        class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
      >
        <span class="xl:inline">Got a project </span>
        <span class="bg-slate-900 px-3 text-primary-500 xl:inline"
          >in mind?</span
        >
      </h1>
    </div>
  </div>

  <div class="mx-auto mt-10 max-w-2xl transform px-4 pb-20 sm:px-6 lg:px-8">
    <h2 class="mb-2">Let's talk!</h2>
    <p
      class="mx-auto mb-4 text-gray-600 sm:text-lg md:mt-5 md:max-w-3xl md:text-base"
    >
      If there's something we can help you with, just let us know. We'll be more
      than happy to offer you our help.
    </p>
    <form
      on:submit|once|preventDefault={handleSubmit}
      class="space-y-3"
      method="POST"
      id="form-contact"
    >
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <input
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            type="text"
            name="name"
            placeholder="Name"
            required
            bind:value={name}
          />
        </div>
        <div class="sm:col-span-3">
          <input
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            type="email"
            name="eml"
            placeholder="Email"
            required
            bind:value={email}
          />
        </div>
        <div class="sm:col-span-3">
          <input
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            bind:value={phone}
          />
        </div>
        <div class="sm:col-span-6">
          <textarea
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            name="message"
            cols="30"
            rows="5"
            placeholder="Tell us what we can help you with!"
            required
            bind:value={message}
          />
        </div>
        <input
          class="border-1 hidden w-full rounded-md border border-gray-200 px-4 py-2"
          type="tel"
          name="eml2"
          placeholder=""
          bind:value={honeypot}
        />
        <button
          type="submit"
          class="rounded-md bg-gray-900 px-6 py-3 text-lg font-medium text-primary-500 hover:bg-gray-800 sm:col-span-6"
        >
          Send your message
        </button>
        {#if display_message === true}
          <div
            transition:fade
            class="rounded-md bg-primary-500 px-6 py-3 text-center text-gray-800 sm:col-span-6
      "
          >
            <p>{response_message}</p>
          </div>
        {/if}
      </div>
    </form>
  </div>
</main>
