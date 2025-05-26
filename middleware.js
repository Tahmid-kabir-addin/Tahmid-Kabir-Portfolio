import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Skip authentication for the login page and auth API
  if (pathname === '/admin/login' || pathname === '/api/admin/auth') {
    return NextResponse.next();
  }

  // Check if the path is for the admin section
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    // Get the authentication cookie
    const authCookie = request.cookies.get('admin_auth');
    
    // Check if the user is authenticated
    if (!authCookie || authCookie.value !== process.env.ADMIN_AUTH_TOKEN) {
      // If the request is for the API, return a 401 Unauthorized response
      if (pathname.startsWith('/api/admin')) {
        return new NextResponse(
          JSON.stringify({ error: 'Unauthorized' }),
          { 
            status: 401,
            headers: { 'content-type': 'application/json' }
          }
        );
      }
      
      // If the request is for the admin pages, redirect to the login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  // Continue with the request if authenticated or not an admin route
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all admin routes
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
