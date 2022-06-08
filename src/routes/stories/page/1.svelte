<script context="module">
    // Shouldn't prerender a redirect
    export const prerender = false;
    
    /** @type {import('@sveltejs/kit').Load} */
    export const load = () => {
        return {
            status: 307,
            redirect: '/stories/'
        }
    }
</script>
