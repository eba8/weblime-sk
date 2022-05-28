import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';
// import { tags } from '@tryghost/helpers';

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
    const post = await api.posts.read({ slug, include: 'tags' });
    if (post.tags.length != 0) {
      const jsonPosts = await api.posts.browse({
        limit: '3',
        fields: 'id,title,excerpt,custom_excerpt,slug,feature_image',
        formats: `plaintext`,
        filter: `tags:[${post.tags.map((tag) => tag.name).join(',')}]`,
      });
      return { body: { post: post, suggested_stories: jsonPosts } };
    } else {
      return { body: { post: post } };
    }
  } catch (err) {
    console.log(err);
  }
}
