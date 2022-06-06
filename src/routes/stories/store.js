import { writable } from 'svelte/store';
import GhostContentAPI from '@tryghost/content-api';

export const page = writable(1);
export const pages = writable(0);
export const next = writable(0);
export const prev = writable(0);

// console.log('-----');
// console.log(page);
// console.log('-----');

export const posts = async () => {
  const api = new GhostContentAPI({
    url: process.env.API_URL,
    key: process.env.GHOST_KEY,
    version: 'v4.0',
  });

  try {
    const jsonPosts = await api.posts.browse({ page: 1 });

    return {
      status: 200,
      body: {
        posts: jsonPosts,
        meta: jsonPosts.meta.pagination,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

posts();
