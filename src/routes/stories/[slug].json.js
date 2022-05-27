import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export const prerender = true;

export async function get({ params }) {
  const { slug } = params;

  const api = new GhostContentAPI({
    url: API_URL,
    key: GHOST_KEY,
    version: 'v4.0',
  });

  try {
    const post = await api.posts.read({ slug });
    return { body: { post: post } };
  } catch (err) {
    console.log(err);
  }
}
