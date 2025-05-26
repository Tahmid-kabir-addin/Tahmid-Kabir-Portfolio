// This is a Next.js API route handler for page view analytics
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import clientPromise from '../../../../lib/mongodb';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Add IP address (will be anonymized in production)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    data.ip = ip;
    
    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = new Date().toISOString();
    }
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio_analytics');
    
    // Store the page view data
    await db.collection('pageviews').insertOne(data);
    
    // Return success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing page view:', error);
    return new Response(JSON.stringify({ error: 'Failed to process page view' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
