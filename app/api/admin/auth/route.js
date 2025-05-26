import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    // Check if the password matches the environment variable
    // You should set this in your .env.local file
    if (password === process.env.ADMIN_PASSWORD) {
      // Set a cookie with the auth token
      const cookieStore = cookies();
      
      // Set the auth cookie
      // In production, you should use a more secure method like JWT
      cookieStore.set('admin_auth', process.env.ADMIN_AUTH_TOKEN, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
      
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Invalid password' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'An error occurred during authentication' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
