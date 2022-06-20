import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

async function getPosts() {
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v5.2',
  });
  try {
    const jsonPosts = await api.posts.browse();
    return jsonPosts;
  } catch (err) {
    console.log(err);
  }
}

/**
 * This is our build function. It contains the query.
 * It uses the link resolver to build the routes.
 * It then writes it to disk in the same dir.
 */
const build = async () => {
  let posts = await getPosts();
  /**
   * Svelte uses the `*` to render the other pages that aren't dynamic
   */
  let pages = ['*'];

  /**
   * Convert the docs into the related link for Svelte to render.
   */
  let result = posts.map((post) => `/stories/${post.slug}`);

  pages.push(...result);

  /**
   * Prerender all the story pages
   */
  for (let i = 1; i <= posts.meta.pagination.pages; i++)
    pages.push(i == 1 ? `/stories` : `/stories/page/${i}`);

  return pages;
};

let pages = await build();
export default pages;
