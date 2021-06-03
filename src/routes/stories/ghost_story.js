import GhostContentAPI from '@tryghost/content-api'
import dotenv from 'dotenv';

dotenv.config();
const {GHOST_KEY} = process.env

export const prerender = true;

export async function load(ctx) {	
    const api = new GhostContentAPI({
        url: 'https://blog.weblime.com',
        key: GHOST_KEY,
        version: 'v3'
    })
    let slug = ctx.page.params.slug
    try {
        const post = await api.posts.read({slug}, {formats: ['json']})
        console.log(post)
        return {props: {"post": post}}
    } catch(err) {
        console.log(err)
    }

}