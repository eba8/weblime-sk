<script context="module">
	export const prerender = true;
	import GhostContentAPI from '@tryghost/content-api'

	export async function load(ctx) {	
		const api = new GhostContentAPI({
			url: 'https://blog.weblime.com',
			key: '',
			version: 'v3'
		})
		let slug = ctx.page.params.slug
		try {
			const post = await api.posts.read({slug}, {formats: ['html']})
			return {props: {"post": post}}
		} catch(err) {
			console.log(err)
		}

	}
</script>

<script>
    export let post
</script>

<h1>{post.title}</h1>

{@html post.html}