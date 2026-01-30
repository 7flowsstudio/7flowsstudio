import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    request.method === 'GET' &&
    (pathname === '/ua' || pathname.startsWith('/ua/'))
  ) {
    const newPath = pathname.replace(/^\/ua(\/|$)/, '/uk$1');
    return Response.redirect(
      new URL(newPath, request.url),
      301,
    );
  }

  // transitional case: /uk/ua → /uk
  if (request.method === 'GET' && pathname === '/uk/ua') {
    return Response.redirect(
      new URL('/uk', request.url),
      301,
    );
  }

  // next-intl handling
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/ua/:path*',
    '/uk/ua',
    '/(uk|en|pl)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
