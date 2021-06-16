<script context="module">
	export const prerender = true;
  
	export async function load({ page, fetch }) {
      const response = await fetch(`/stories/${page.params.slug}.json`);
      const { post } = await response.json();
		
      return {
          props: {
              post,
          }
      }
  }
  </script>
  
  <script>
	export let post;
  </script>

<svelte:head>
  <title>WebLime - {post.title}</title>
  <meta property="og:description" content="{post.meta_description}">
</svelte:head>


<main class="mx-auto">
  <!-- Hero section -->
    <div class="sm:pt-16 lg:pt-8 lg:pb-14">
        <div class="pb-5 mx-auto text-center max-w-prose">
            <h1
                class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
                <span class="px-10 xl:inline">{post.title}</span>
            </h1>
        </div>
    </div>
    <div class="relative px-5 mx-auto mt-8 prose md:px-0 prose-primary md:prose-lg lg:prose-xl">
      {@html post.html}
    </div>
</main> 