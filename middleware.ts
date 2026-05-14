import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all locale-prefixed routes
    '/(es|en|de)/:path*',
    // Match root and paths without locale prefix, excluding admin, api, and static files
    '/((?!admin|api|_next|_vercel|favicon\\.ico|manifest\\.webmanifest|images|icons|.*\\.[^/]*$).*)',
  ],
};
