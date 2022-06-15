<script>
  import { fade } from 'svelte/transition';
  import { navigating, page } from '$app/stores';
  import { site_name } from '$lib/info';

  let searchTerm = '';
  let tag = '';
  let filteredstories = [];
  
  export let pages;
  export let stories;
  export let nextPage;
  export let prevPage;

  $: title = `Page ${$page.params.page || 1} of ${pages} - Stories by WebLime`;

  let description =
    "Read WebLime's latest stories. All about web development and digital marketing.";

  $: loading = $navigating && $navigating.to.pathname.includes('stories');

  $: {
    if (searchTerm) {
      filteredstories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else if (tag != '') {
      filteredstories = stories.filter((story) =>
        story.title.toLowerCase().includes(tag),
      );
    } else {
      filteredstories = [...stories];
    }
  }
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <link rel="canonical" href={$page.url.href} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content="WebLime | Web Design and Development." />
  <meta property="og:description" content={description} />
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
    content="WebLime | Helping businesses thrive online."
  />
  <meta
    property="twitter:description"
    content="Read WebLime's latest stories. All about web development and digital marketing."
  />
</svelte:head>

<div class="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
  <!-- Hero -->
  <div class=" sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="px-5 text-center lg:px-5">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Stories</span>
      </h1>
      <p
        class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
      >
        We love developing your online presence and equally love to share what
        we learn along the way.
      </p>
    </div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    <!-- <div class="text-center">
      <button
        class="m-3 rounded-md border-gray-200 bg-gray-200 px-5 py-3 focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        on:click={() => ((tag = ''), (searchTerm = ''))}>Most recent</button
      >

      <button
        class="m-3 rounded-md border-gray-200 bg-gray-200 px-5 py-3 focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        on:click={() => ((tag = 'wordpress'), (searchTerm = ''))}
        >WordPress</button
      >

      <button
        class="m-3 rounded-md border-gray-200 bg-gray-200 px-5 py-3 focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        on:click={() => ((tag = 'marketing'), (searchTerm = ''))}
        >Marketing</button
      >

      <button
        class="m-3 rounded-md border-gray-200 bg-gray-200 px-5 py-3 focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        on:click={() => ((tag = 'seo'), (searchTerm = ''), (searchTerm = ''))}
        >SEO</button
      >

      <input
        class="m-3 rounded-md border-2 border-gray-200 p-4 px-5 py-3 text-lg focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        bind:value={searchTerm}
        placeholder="Search stories"
      />
    </div> -->
    <div
      class="mx-auto mt-12 grid max-w-lg gap-12 transition-opacity lg:max-w-none lg:grid-cols-3"
      class:opacity-50={loading}
    >
      {#each filteredstories as story}
        <div
          transition:fade|local={{ duration: 300 }}
          class="flex flex-col overflow-hidden rounded-md bg-gray-100 shadow-sm"
        >
          <a sveltekit:prefetch href="/stories/{story.slug}" class="block">
            {#if story.feature_image}
              <img
                src={story.feature_image}
                alt={story.title}
                class="rounded-md border-2 border-gray-100"
              />
            {/if}
            <div class="flex flex-1 flex-col justify-between p-6 text-center">
              <div class="flex-1">
                <h2 class="text-xl font-semibold text-gray-900">
                  {story.title}
                </h2>
                <p class="mt-3 text-xl text-gray-800">
                  {story.custom_excerpt}
                </p>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>

  <div class="mx-auto mt-8 flex items-center justify-center gap-4">
    {#if prevPage && prevPage > 0}
      <a
        href={prevPage == 1 ? '/stories' : `/stories/page/${prevPage}`}
        class="inline-flex items-center rounded-md bg-skin-fill px-5 py-2 text-base font-medium text-skin-inverted"
      >
        Previous Page
      </a>
    {/if}

    {#if nextPage}
      <a
        href="/stories/page/{nextPage}"
        class="inline-flex items-center rounded-md bg-skin-fill px-5 py-2 text-base font-medium text-skin-inverted"
      >
        Next Page
      </a>
    {/if}
  </div>
</div>
