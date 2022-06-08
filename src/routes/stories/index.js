import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async () => {
    const api = new GhostContentAPI({
        url: API_URL,
        key: GHOST_KEY,
        version: 'v4.0',
    });

    try {
        const jsonPosts = await api.posts.browse({
          page: 1
        });
    
        return {
          status: 200,
          body: {
            data: {
                stories: jsonPosts,
                nextPage: 2,
                prevPage: 0,
            }
          },
        };
    } catch (err) {
        console.log(err);
    }
}