<script>
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
  import '../app.css';
</script>

<svelte:head>
  <!-- <script
    async
    defer
    data-domain="weblime.com"
    src="https://plausible.io/js/plausible.js"></script>
  <script>
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  </script> -->
</svelte:head>

<Header />

<main>
  <slot />
  <Footer />
</main>
