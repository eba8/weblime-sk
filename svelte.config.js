import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import pages from './src/utils/routelist.js';
/** @type {import('@sveltejs/kit').Config} */

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapterStatic(),
    prerender: {
      crawl: true,
      enabled: true,
      entries: [...pages, '/sitemap.xml'],
    },
  },
};

export default config;
