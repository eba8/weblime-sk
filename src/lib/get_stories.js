import GhostContentAPI from '@tryghost/content-api';
import dotenv from 'dotenv';

dotenv.config();
const { GHOST_KEY, API_URL } = process.env;

export const getStories = (page) => {
    const api = new GhostContentAPI({
        url: API_URL,
        key: GHOST_KEY,
        version: 'v4.0',
    });

    const posts = await api.posts.browse({
        page,
        fields: 'id,title,excerpt,custom_excerpt,slug',
        formats: `plaintext`,
    });

    return posts.map(post => ({ ...post, plaintext: null }));
}
