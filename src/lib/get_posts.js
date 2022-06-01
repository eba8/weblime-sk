import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export async function getStories() {
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v4.0',
  });
  try {
    const jsonPosts = await api.posts.browse({ limit: 'all' });
    return {
      stories: jsonPosts,
    };
  } catch (err) {
    console.log(err);
  }
}
