import GhostContentAPI from '@tryghost/content-api'
import dotenv from 'dotenv';

dotenv.config();
const {GHOST_KEY} = process.env

export async function get() {    
    const api = new GhostContentAPI({
        url: 'https://blog.weblime.com',
        key: GHOST_KEY,
        version: 'v3'
    })
    try {
        const jsonPosts = await api.posts.browse({limit: 5})
        return { 
            status: 200,
            body:{
                stories: jsonPosts
            }
        }
    } catch(err) {
        console.log(err)
    }
}