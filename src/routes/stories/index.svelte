<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const response = await fetch('/stories/ghost_stories');

    const { stories } = await response.json();
    return {
      props: {
        stories,
      },
    };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import { loop_guard } from 'svelte/internal';

  let searchTerm = '';
  let tag = '';
  let filteredstories = [];
  export let stories;

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
  <title>WebLime - Stories</title>
  <meta
    property="og:description"
    content="Read WebLime's latest stories. All about web development and digital marketing."
  />
  <meta
    name="description"
    content="Read WebLime's latest stories. All about web development and digital marketing."
  />
</svelte:head>

<div class="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
  <!-- Hero -->
  <div class=" sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="px-5 text-center lg:px-5">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Stories</span>
      </h1>
      <p
        class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        We love developing your online presence and equally love to share what
        we learn along the way.
      </p>
    </div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <button
        class="px-5 py-3 m-3 bg-gray-200 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:border-primary-100"
        on:click={() => ((tag = ''), (searchTerm = ''))}>Most recent</button
      >

      <button
        class="px-5 py-3 m-3 bg-gray-200 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:border-primary-100"
        on:click={() => ((tag = 'wordpress'), (searchTerm = ''))}
        >WordPress</button
      >

      <button
        class="px-5 py-3 m-3 bg-gray-200 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:border-primary-100"
        on:click={() => ((tag = 'marketing'), (searchTerm = ''))}
        >Marketing</button
      >

      <button
        class="px-5 py-3 m-3 bg-gray-200 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:border-primary-100"
        on:click={() => ((tag = 'seo'), (searchTerm = ''), (searchTerm = ''))}
        >SEO</button
      >

      <input
        class="px-5 py-3 m-3 rounded-md text-lg p-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:border-primary-100"
        bind:value={searchTerm}
        placeholder="Search stories"
      />
    </div>
    <div
      class="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none"
    >
      <!-- {#each stories.slice(0, 15) as story} -->
      {#each filteredstories.slice(0, 12) as story}
        <div
          in:fade={{ delay: 200, duration: 300 }}
          class="flex flex-col bg-gray-100 rounded-md overflow-hidden"
        >
          {#if story.feature_image}
            <a sveltekit:prefetch href="/stories/{story.slug}" class="block">
              <img src={story.feature_image} alt={story.title} />
            </a>
          {/if}
          <div class="flex-1 p-6 flex flex-col justify-between text-center">
            <div class="flex-1">
              <a
                sveltekit:prefetch
                href="/stories/{story.slug}/"
                class="block mt-2"
              >
                <p class="text-xl font-semibold text-gray-900">
                  {story.title}
                </p>

                <p class="mt-3 text-xl text-gray-500">
                  {story.custom_excerpt}
                </p>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
