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
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'am2azj360o');
  </script>
</svelte:head>

<main>
  <slot />
  <Footer />
</main>
