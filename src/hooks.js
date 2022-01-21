import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import urlDictionary from '$lib/urlDictionary';

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.cookie || '');
  event.locals.userid = cookies.userid || uuid();

  if (event.request.method) {
    const method = event.request.method.toUpperCase();
  }

  const response = await resolve(event);

  if (urlDictionary[event.url]) {
    return { status: 301, headers: { location: urlDictionary[event.url] } };
  }

  // const location = urlDictionary[event.url]
  // if (location) {
  //   return { status: 301, headers: { location } };

  if (!cookies.userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers[
      'set-cookie'
    ] = `userid=${event.locals.userid}; Path=/; HttpOnly`;
  }

  //cookie.serialize("userid", event.locals.userid, { path: "/", httpOnly: true })

  return response;
};
