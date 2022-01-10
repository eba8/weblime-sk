<script>
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
  import '../app.css';
</script>

<Header />

<svelte:head>
  <script
    async
    defer
    data-domain="weblime.com"
    src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<main>
  <slot />
  <Footer />
</main>
