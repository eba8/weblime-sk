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
  export let stories;
</script>

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
    <div
      class="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none"
    >
      {#each stories as story}
        <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden">
          <div class="flex-1 p-6 flex flex-col justify-between text-center">
            <div class="flex-1">
              <p
                class="text-sm font-medium text-primary-600 inline-flex items-center "
              >
                {story.reading_time} MIN READ
              </p>
              <a
                sveltekit:prefetch
                href="/stories/{story.slug}"
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
