import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import pages from './src/utils/routelist.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false,
    }),
    prerender: {
      default: true,
      crawl: true,
      enabled: true,
      entries: [...pages, '/sitemap.xml'],
    },
  },
};

export default config;
