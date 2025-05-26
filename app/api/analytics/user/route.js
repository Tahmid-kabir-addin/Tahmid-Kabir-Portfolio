// This is a Next.js API route handler for user analytics
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import clientPromise from '../../../../lib/mongodb';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Add IP address (will be anonymized in production)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    data.ip = ip;
    
    // Generate a unique visitor ID (if not already provided)
    if (!data.visitorId) {
      // Using a combination of IP and user agent as a simple visitor ID
      // In a production app, you might want to use a more sophisticated method
      const visitorIdBase = `${ip}-${data.userAgent || ''}`;
      data.visitorId = Buffer.from(visitorIdBase).toString('base64');
    }
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio_analytics');
    
    // Check if this visitor already exists
    const existingVisitor = await db.collection('visitors').findOne({ visitorId: data.visitorId });
    
    if (existingVisitor) {
      // Update existing visitor with new information
      await db.collection('visitors').updateOne(
        { visitorId: data.visitorId },
        { 
          $set: { 
            lastSeen: new Date().toISOString(),
            ...data
          },
          $inc: { visitCount: 1 }
        }
      );
    } else {
      // Insert new visitor
      await db.collection('visitors').insertOne({
        ...data,
        firstSeen: new Date().toISOString(),
        lastSeen: new Date().toISOString(),
        visitCount: 1
      });
    }
    
    // Return success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing user info:', error);
    return new Response(JSON.stringify({ error: 'Failed to process user info' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
