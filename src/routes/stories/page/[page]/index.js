import { getStories } from '$lib/get_stories';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ params }) => {
  const page = isNaN(Number(params.page)) ? 1 : Number(params.page);

  try {
    const stories = await getStories(page);
    return {
      status: 200,
      body: {
        stories,
        storiesMeta: stories.meta,
        nextPage: stories.meta.pagination.next,
        prevPage: stories.meta.pagination.prev,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
