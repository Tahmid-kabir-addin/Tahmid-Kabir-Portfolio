"use client";

import { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        // Measure render time
        const renderStart = performance.now();
        requestAnimationFrame(() => {
          const renderTime = performance.now() - renderStart;
          
          // Memory usage (if available)
          const memoryUsage = (performance as any).memory ? 
            (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0;
          
          setMetrics({
            loadTime: Math.round(loadTime),
            renderTime: Math.round(renderTime * 100) / 100,
            memoryUsage: Math.round(memoryUsage * 100) / 100
          });
        });
      }
    };

    measurePerformance();
    
    // Monitor on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 glass rounded-lg p-3 text-xs text-white/80 font-mono">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        {metrics.memoryUsage > 0 && (
          <div>Memory: {metrics.memoryUsage}MB</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
