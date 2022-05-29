<script context="module">
  export const prerender = true;

  export async function load({ params, fetch }) {
    //get post according to the slug
    const response = await fetch(`/stories/${params.slug}.json`);
    const { post, suggested_stories } = await response.json();

    //get 3 posts according to the tag from fetched post above
    // const tagged_response = await fetch('/stories/ghost_tagged_stories');
    // const { suggested_stories } = await tagged_response.json();

    return {
      props: {
        post,
        suggested_stories,
      },
    };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  export let post;
  export let suggested_stories;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{post.title} - WebLime</title>
  <meta name="title" content="{post.title} - WebLime" />
  <meta name="description" content={post.meta_description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WebLime - Digital Agency" />
  <meta
    property="og:url"
    content="https://www.weblime.com/stories/{post.slug}/"
  />
  <meta property="og:title" content="{post.title} - WebLime" />
  <meta property="og:description" content={post.meta_description} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@weblime_agency" />
  <meta property="twitter:title" content="{post.title} - WebLime" />
  <meta property="twitter:description" content={post.meta_description} />

  {#if post.feature_image}
    <meta property="og:image" content={post.feature_image} />
    <meta property="twitter:image" content={post.feature_image} />
  {:else}
    <meta
      property="og:image"
      content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
    />
    <meta
      property="twitter:image"
      content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
    />
  {/if}
</svelte:head>

<main class="mx-auto">
  <!-- Hero section -->
  <div class="sm:pt-16 lg:pt-8 lg:pb-14">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center pb-5 text-center lg:flex-row lg:text-left"
    >
      <h1
        class="px-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        {post.title}
      </h1>
      <img
        class="mx-auto w-3/4 py-5 lg:py-0"
        src={post.feature_image}
        alt={post.feature_image_alt}
      />
    </div>
  </div>
  <div
    class="prose-primary prose relative mx-auto mt-8 px-5 pb-10 md:prose-lg md:px-0 lg:prose-xl"
  >
    {@html post.html}
  </div>

  <ProjectInMind />

  {#if suggested_stories}
    <section class="mx-auto max-w-7xl">
      <div class=" mt-12 grid gap-12 lg:grid-cols-3">
        {#each suggested_stories as story}
          <div
            transition:fade|local={{ duration: 300 }}
            class="flex flex-col overflow-hidden rounded-md bg-gray-100 shadow-sm"
          >
            {#if story.feature_image}
              <a sveltekit:prefetch href="/stories/{story.slug}" class="block">
                <img
                  src={story.feature_image}
                  alt={story.title}
                  class="rounded-md border-2 border-gray-100"
                />
              </a>
            {/if}
            <div class="flex flex-1 flex-col justify-between p-6 text-center">
              <div class="flex-1">
                <a
                  sveltekit:prefetch
                  href="/stories/{story.slug}"
                  class="mt-2 block"
                >
                  <h2 class="text-xl font-semibold text-gray-900">
                    {story.title}
                  </h2>

                  <p class="mt-3 text-xl text-gray-800">
                    {story.custom_excerpt}
                  </p>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}
</main>
