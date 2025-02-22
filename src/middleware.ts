import { clerkMiddleware } from '@clerk/astro/server';

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId } = auth();
  const url = new URL(context.request.url);

  // Redirect from homepage (/) to /uebungen if the user is logged in
  if (url.pathname === 'https://schreibrecht-test.vercel.app/' && userId) {
    return new Response(null, {
      status: 302, // Redirect status
      headers: { Location: '/uebungen' },
    });
  }

  // If user is not logged in and tries to access /uebungen, redirect to /404
  if (url.pathname.startsWith('https://schreibrecht-test.vercel.app/uebungen') && !userId) {
    return new Response(null, {
      status: 302, // Redirect status
      headers: { Location: '/auth/signin' },
    });
  }
});
