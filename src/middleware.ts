import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('token')?.value;

  // List of protected routes
  const protectedRoutes = [
    '/dashboard',
    '/ai-generator',
  ];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Verify the token
      jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Configure which routes to apply the middleware to
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
