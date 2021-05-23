<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
      const response = await fetch('/stories/ghost_stories');

      const { stories } = await response.json();

      return {
          props: {
              stories,
          }
      }
  }
</script>

<script>
  export let stories;
</script>

<ul>
  {#each stories as story}
  <li><a href="/stories/{story.slug}">{story.title}</a></li>
  {/each}
</ul>


<svelte:head>
	<title>Edan Ben-Atar</title>
</svelte:head>
<div class="sm:pt-16 lg:pt-8 lg:pb-14">
    <div class="text-center">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline">Digital solutions to enhance</span>
        <span class="px-3 text-gray-900 bg-primary-500 xl:inline">your growth.</span>
      </h1>
      <p
        class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
      >
        We connect brands with people in ways that are equally innovative,
        effective, and human.
      </p>
      <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md">
          <a
            href="/"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 border border-transparent rounded-md bg-primary-500 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
          >
            Solutions
          </a>
        </div>
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
          <a
            href="/"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </div>