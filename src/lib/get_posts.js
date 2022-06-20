import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export async function getPosts() {
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v5.2',
  });
  try {
    const jsonPosts = await api.posts.browse({ limit: 'all' });
    return jsonPosts;
  } catch (err) {
    console.log(err);
  }
}
