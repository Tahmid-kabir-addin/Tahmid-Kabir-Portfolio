import clientPromise from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    // In a production environment, you would want to add authentication here
    // to ensure only authorized users can access this data
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio_analytics');
    
    // Get all visitors, sorted by most recent first
    const visitors = await db.collection('visitors')
      .find({})
      .sort({ lastSeen: -1 })
      .limit(100) // Limit to 100 most recent visitors
      .toArray();
      
    return new Response(JSON.stringify({ 
      success: true,
      visitors 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching visitors:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to fetch visitors' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
