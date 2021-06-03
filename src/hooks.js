import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

export const handle = async (ctx) => {
  const request = ctx.request

  let render

  // render is now resolve
  // see: https://github.com/sveltejs/kit/commit/
  // eae1b1da092e53ef908a3561abd3aa98ca7dd1a4#diff-418712fdcdc80e8bf5cc0e519480d6bc0178a372c82aa3675dddd4870a5988a6
  if (ctx.render) { render = ctx.render }
  if (ctx.resolve) { render = ctx.resolve }

	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await render(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};
