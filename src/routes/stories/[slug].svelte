<script context="module">
	export const prerender = true;
  
	export async function load({ fetch }) {
      const response = await fetch('/stories/ghost_story');
	  console.log(response)
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

<h1>{post.title}</h1>

{@html post.html}