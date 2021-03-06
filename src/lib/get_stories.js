import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export const getStories = async (page) => {
  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v5.2',
  });

  const posts = await api.posts.browse({
    page,
    fields: 'id,title,excerpt,custom_excerpt,slug,feature_image',
    formats: `plaintext`,
  });

  posts.forEach((p) => delete p.plaintext);

  return posts;
};
