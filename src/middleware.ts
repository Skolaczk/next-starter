import type { NextRequest } from 'next/server';

import { middleware as paraglide } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const response = paraglide(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
