import { getStories } from '$lib/get_posts';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
  const page = isNaN(Number(params.page)) ? 1 : Number(params.page);

  try {
    const stories = await getStories(page);

    return {
      status: 200,
      body: {
        stories,
        nextPage: stories.meta.pagination.next,
        prevPage: stories.meta.pagination.prev,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
