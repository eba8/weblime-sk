import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export async function get() {
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v5.2',
  });
  try {
    const jsonPosts = await api.posts.browse({
      limit: '4',
      fields: 'id,title,excerpt,custom_excerpt,feature_image,slug',
      filter: 'tag:feature',
      formats: `plaintext`,
    });
    jsonPosts.forEach((jsonPosts) => delete jsonPosts.plaintext);

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
