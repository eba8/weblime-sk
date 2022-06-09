import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
  const page = isNaN(Number(params.page)) ? 1 : Number(params.page);

  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v4.0',
  });

  try {
    const jsonPosts = await api.posts.browse({
      page,
      fields: 'id,title,excerpt,custom_excerpt,slug',
      formats: `plaintext`,
    });
    console.log(jsonPosts);
    jsonPosts.forEach((jsonPosts) => delete jsonPosts.plaintext);
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
};
