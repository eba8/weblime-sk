<script>
    import PageRoute from './page/[page]/index.svelte';

    export let data;
</script>

<PageRoute {...data} />