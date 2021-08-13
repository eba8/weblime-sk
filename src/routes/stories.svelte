<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const response = await fetch('/stories/ghost_stories');

    const { stories } = await response.json();
    console.log(stories);
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
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3" />
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
      >
        Stories
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        We love developing your online presence and equally love to share what
        we learn along the way.
      </p>
    </div>

    <div
      class="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none"
    >
      {#each stories as story}
        <div class="flex flex-col bg-gray-100 rounded-md overflow-hidden">
          <div class="flex-1 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p
                class="text-sm font-medium text-primary-600 inline-flex items-center"
              >
                <a href="/stories/{story.slug}" class="hover:underline">
                  {story.reading_time} MIN READ
                </a>
              </p>
              <a href="/stories/{story.slug}" class="block mt-2">
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
