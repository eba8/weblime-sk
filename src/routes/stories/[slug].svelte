<script context="module">
  export const prerender = true;

  export async function load({ params, fetch }) {
    const response = await fetch(`/stories/${params.slug}.json`);
    const { post } = await response.json();
    return {
      props: {
        post,
      },
    };
  }
</script>

<script>
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  export let post;
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
    content="https://www.weblime.com/stories/${post.slug}/"
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
    <div class="pb-5 max-w-4xl mx-auto text-center">
      <h1
        class="px-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        {post.title}
      </h1>
    </div>
  </div>
  <div
    class="relative px-5 mx-auto mt-8 prose md:px-0 prose-primary md:prose-lg lg:prose-xl pb-10"
  >
    {@html post.html}
  </div>

  <ProjectInMind />
</main>
