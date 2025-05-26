'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';

export default function AnalyticsDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [pageviews, setPageviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalPageviews: 0,
    averageTimeOnSite: 0,
    topPages: [],
    topReferrers: [],
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const [visitorsRes, pageviewsRes] = await Promise.all([
          fetch('/api/admin/visitors'),
          fetch('/api/admin/pageviews'),
        ]);

        if (visitorsRes.ok && pageviewsRes.ok) {
          const [visitorsData, pageviewsData] = await Promise.all([
            visitorsRes.json(),
            pageviewsRes.json(),
          ]);

          setVisitors(visitorsData.visitors || []);
          setPageviews(pageviewsData.pageviews || []);
          
          // Calculate stats
          const totalVisitors = visitorsData.visitors?.length || 0;
          const totalPageviews = pageviewsData.pageviews?.length || 0;
          
          // Group pageviews by path
          const pagesByPath = {};
          pageviewsData.pageviews?.forEach(page => {
            if (!pagesByPath[page.path]) {
              pagesByPath[page.path] = 0;
            }
            pagesByPath[page.path]++;
          });
          
          // Get top pages
          const topPages = Object.entries(pagesByPath)
            .map(([path, count]) => ({ path, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
            
          // Group by referrer
          const referrers = {};
          pageviewsData.pageviews?.forEach(page => {
            const referrer = page.referrer || 'Direct';
            if (!referrers[referrer]) {
              referrers[referrer] = 0;
            }
            referrers[referrer]++;
          });
          
          // Get top referrers
          const topReferrers = Object.entries(referrers)
            .map(([referrer, count]) => ({ referrer, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
            
          setStats({
            totalVisitors,
            totalPageviews,
            averageTimeOnSite: 0, // Would need session tracking for this
            topPages,
            topReferrers,
          });
        }
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Analytics Dashboard
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Visitors" value={stats.totalVisitors} />
            <StatCard title="Total Pageviews" value={stats.totalPageviews} />
            <StatCard 
              title="Avg. Time on Site" 
              value={`${stats.averageTimeOnSite} sec`} 
            />
            <StatCard 
              title="Bounce Rate" 
              value="--" 
              subtitle="Requires session tracking" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-900/80 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Top Pages</h2>
                {stats.topPages.length > 0 ? (
                  <ul className="space-y-2">
                    {stats.topPages.map((page, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-300 truncate">{page.path}</span>
                        <span className="text-blue-400 font-medium">{page.count} views</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No page data available</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Top Referrers</h2>
                {stats.topReferrers.length > 0 ? (
                  <ul className="space-y-2">
                    {stats.topReferrers.map((referrer, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-300 truncate">
                          {referrer.referrer === 'Direct' ? 'Direct / None' : referrer.referrer}
                        </span>
                        <span className="text-blue-400 font-medium">{referrer.count}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No referrer data available</p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/80 border-gray-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-white">Recent Visitors</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-gray-400">Visitor ID</th>
                      <th className="py-3 px-4 text-gray-400">Browser</th>
                      <th className="py-3 px-4 text-gray-400">OS</th>
                      <th className="py-3 px-4 text-gray-400">Screen Size</th>
                      <th className="py-3 px-4 text-gray-400">First Seen</th>
                      <th className="py-3 px-4 text-gray-400">Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitors.length > 0 ? (
                      visitors.slice(0, 10).map((visitor, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 px-4 text-gray-300">
                            {visitor.visitorId.substring(0, 8)}...
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {getBrowserInfo(visitor.userAgent)}
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {getOSInfo(visitor.userAgent)}
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {visitor.screenSize}
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {formatDate(visitor.firstSeen)}
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {visitor.visitCount}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-4 px-4 text-center text-gray-400">
                          No visitor data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <Card className="bg-gray-900/80 border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-gray-400 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}

function formatDate(dateString) {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function getBrowserInfo(userAgent) {
  if (!userAgent) return 'Unknown';
  
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) return 'IE';
  
  return 'Other';
}

function getOSInfo(userAgent) {
  if (!userAgent) return 'Unknown';
  
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac OS')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  
  return 'Other';
}
