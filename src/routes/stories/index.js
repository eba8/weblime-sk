import { getStories } from '$lib/get_stories';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async () => {

  try {
    const stories = await getStories(1);
 
    return {
      status: 200,
      body: {
        data: {
          stories,
          nextPage: 2,
          prevPage: 0,
        }
      },
    };
  } catch (err) {
    console.log(err);
  }
}