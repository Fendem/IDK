// src/middleware.ts
import { clerkMiddleware } from '@clerk/astro/server';

export const config = { runtime: 'edge' };

export const onRequest = clerkMiddleware((auth, context) => {
  const url = new URL(context.request.url);
  
  // Debug: Check if middleware is triggered
  if (url.pathname === '/debug-middleware') {
    return new Response('Middleware is running!', { status: 200 });
  }

  const { userId } = auth();

  // Redirect from homepage (/) to /uebungen if the user is logged in
  if (url.pathname === '/' && userId) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/uebungen' },
    });
  }

  // If user is not logged in and tries to access /uebungen, redirect to /auth/signin
  if (url.pathname.startsWith('/uebungen') && !userId) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/auth/signin' },
    });
  }
});
