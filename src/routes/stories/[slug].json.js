// import GhostContentAPI from '@tryghost/content-api'
import dotenv from 'dotenv';

dotenv.config();
const {GHOST_KEY} = process.env

export const prerender = true;

export function get({ params }) {
    const { slug } = params
    return fetch(`https://weblime-blog.herokuapp.com/ghost/api/v4/content/posts/slug/${slug}/?key=${GHOST_KEY}`)
    .then(res => res.json())
    .then(res => {
        return { body: { post: res } }
    }).catch(err => {
        console.log(err)
    });
}