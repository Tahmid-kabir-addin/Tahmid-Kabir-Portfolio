import clientPromise from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    // In a production environment, you would want to add authentication here
    // to ensure only authorized users can access this data
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio_analytics');
    
    // Get all pageviews, sorted by most recent first
    const pageviews = await db.collection('pageviews')
      .find({})
      .sort({ timestamp: -1 })
      .limit(1000) // Limit to 1000 most recent pageviews
      .toArray();
      
    return new Response(JSON.stringify({ 
      success: true,
      pageviews 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching pageviews:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to fetch pageviews' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
