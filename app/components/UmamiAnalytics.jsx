'use client';

import Script from 'next/script';

// Replace these with your actual Umami details
const UMAMI_WEBSITE_ID = 'your-website-id';
const UMAMI_SCRIPT_URL = 'https://analytics.yourdomain.com/script.js';

export default function UmamiAnalytics() {
  return (
    <Script
      src={UMAMI_SCRIPT_URL}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
      data-domains="yourdomain.com"
    />
  );
}
