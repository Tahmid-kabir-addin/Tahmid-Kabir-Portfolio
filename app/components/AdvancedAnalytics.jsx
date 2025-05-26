"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

// Use environment variables for tracking IDs
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// We're not using Umami for now, so we can comment these out
// const UMAMI_WEBSITE_ID = 'your-website-id';
// const UMAMI_SCRIPT_URL = 'https://analytics.yourdomain.com/script.js';

export default function AdvancedAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path:
          pathname +
          (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      });
    }

    // You can add custom tracking here
    trackPageView(pathname);
  }, [pathname, searchParams]);

  // Track user information
  useEffect(() => {
    collectUserInfo();
  }, []);

  // Custom function to track page views
  const trackPageView = (path) => {
    try {
      // You can send this data to your own backend API
      if (process.env.NODE_ENV === "production") {
        fetch("/api/analytics/pageview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error("Error tracking page view:", error);
    }
  };

  // Collect user information
  const collectUserInfo = () => {
    try {
      const userInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // You can send this data to your own backend API
      if (process.env.NODE_ENV === "production") {
        fetch("/api/analytics/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        });
      }
    } catch (error) {
      console.error("Error collecting user info:", error);
    }
  };

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
