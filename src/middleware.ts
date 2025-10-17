import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const ct = response.headers.get('content-type');
  if (ct && ct.startsWith('text/html') && !/charset=/i.test(ct)) {
    response.headers.set('content-type', 'text/html; charset=utf-8');
  }
  return response;
});
