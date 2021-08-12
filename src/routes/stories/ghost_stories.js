import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY } = process.env;

export async function get() {
  const api = new GhostContentAPI({
    url: 'https://weblime-blog.herokuapp.com',
    key: GHOST_KEY,
    version: 'v4',
  });
  try {
    const jsonPosts = await api.posts.browse({ limit: 'all' });
    return {
      status: 200,
      body: {
        stories: jsonPosts,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
