<script context="module">
    export const prerender = true;
    
    /** @type {import('@sveltejs/kit').Load} */
    export const load = () => {
        return {
            status: 307,
            redirect: '/stories/page/1'
        }
    }
</script>
