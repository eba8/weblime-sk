import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ url }) => {
  const page = url.searchParams.get('page');
  
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v4.0',
  });
  
  try {
    const jsonPosts = await api.posts.browse({
      limit: 6,
      page: isNaN(Number(page)) ? 1 : page,
    });

    return {
      status: 200,
      body: {
        stories: jsonPosts,
        nextPage: jsonPosts.meta.pagination.next,
        prevPage: jsonPosts.meta.pagination.prev,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
