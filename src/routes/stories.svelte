<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const response = await fetch('/stories/ghost_stories');

    const { stories } = await response.json();
    console.log(stories.length);
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
        From the blog
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>
    </div>

    <div
      class="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none"
    >
      {#each stories as story}
        <div class="flex flex-col rounded-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p
                class="text-sm font-medium text-primary-500 bg-gray-900 px-3 py-0.5 inline-flex items-center rounded-full"
              >
                <a href="/stories/{story.slug}" class="hover:underline">
                  {story.reading_time} MIN READ
                </a>
              </p>
              <a href="/stories/{story.slug}" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {story.title}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.
                </p>
              </a>
            </div>
            <!-- <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="/">
                  <span class="sr-only">Roel Aufderehar</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="/" class="hover:underline"> Roel Aufderehar </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- {#each stories as story}
  <div>
    <p class="text-xl font-semibold text-gray-900">{story.title}</p>
    <p class="mt-2 text-base text-gray-500">{story.excerpt}</p>

    <div class="mt-2">
      <a href="/stories/{story.slug}" class="inline-block">
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-primary-500 text-gray-900"
        >
          Read full story
        </span>
      </a>
    </div>
  </div>
{/each} -->
