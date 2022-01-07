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
  <script type="text/javascript">
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '011307dc-0557-4ec8-bcdf-b0b0b7975012';
    (function () {
      d = document;
      s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  </script>
</svelte:head>

<main>
  <slot />
  <Footer />
</main>
