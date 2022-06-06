import GhostContentAPI from '@tryghost/content-api';

export async function get() {
  // const body = JSON.parse(request.body);
  // const { fetch_page } = request.body;
  // console.log('yep');

  const api = new GhostContentAPI({
    url: process.env.API_URL,
    key: process.env.GHOST_KEY,
    version: 'v4.0',
  });
  try {
    const jsonPosts = await api.posts.browse({ limit: 'all' });

    return {
      status: 200,
      body: {
        stories: jsonPosts,
        pagination: jsonPosts.meta.pagination,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
