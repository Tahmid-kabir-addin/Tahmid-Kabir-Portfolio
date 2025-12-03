import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./assets/css/index.css";
import AdvancedAnalytics from "./components/AdvancedAnalytics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tahmid Kabir | Full-Stack Software Engineer | Next.js & React Developer",
  description:
    "Software Engineer with 1+ years of experience building high-impact, scalable solutions. Specialized in Next.js, React, Node.js, payment systems (Stripe, PayPal), and performance optimization. 95+ Lighthouse scores, 60% performance improvements.",
  keywords: [
    // Core Identity
    "Tahmid Kabir",
    "Software Engineer",
    "Full-Stack Developer",
    "Junior Software Engineer",
    "Web Developer",
    
    // Technical Skills - Frontend
    "Next.js Developer",
    "React Developer",
    "React.js Expert",
    "Remix.js Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "TailwindCSS",
    "Framer Motion",
    "Redux Toolkit",
    
    // Technical Skills - Backend
    "Node.js Developer",
    "Express.js",
    "REST API Developer",
    "GraphQL Developer",
    "Backend Developer",
    "Full-Stack Engineer",
    
    // Technical Skills - Database
    "MongoDB Developer",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Database Design",
    
    // Specializations
    "Payment Integration",
    "Stripe Integration",
    "PayPal Integration",
    "E-commerce Developer",
    "Headless Commerce",
    "WooCommerce Developer",
    "Shopify Developer",
    "NextAuth.js",
    "JWT Authentication",
    "OAuth Implementation",
    
    // Performance & Quality
    "Performance Optimization",
    "Web Performance",
    "Lighthouse Optimization",
    "SEO Optimization",
    "Web Vitals",
    "Code Optimization",
    
    // Technologies & Tools
    "MERN Stack",
    "JAMstack",
    "Vercel",
    "AWS",
    "Docker",
    "Git",
    "CI/CD",
    
    // Location & Availability
    "Bangladesh Software Engineer",
    "Dhaka Developer",
    "Remote Developer",
    "Freelance Developer",
    
    // Problem Solving
    "Competitive Programming",
    "Codeforces",
    "LeetCode",
    "Algorithm Expert",
    "Data Structures",
    
    // Portfolio & Projects
    "Portfolio Website",
    "Web Development Portfolio",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Tahmid Kabir" }],
  creator: "Tahmid Kabir",
  publisher: "Tahmid Kabir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tahmid-kabir.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tahmid Kabir | Full-Stack Software Engineer",
    description:
      "Building high-impact & scalable solutions. Specialized in Next.js, React, payment systems, and performance optimization. 95+ Lighthouse scores, 1+ years experience.",
    url: "https://tahmid-kabir.vercel.app",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tahmid Kabir - Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Kabir | Full-Stack Software Engineer",
    description:
      "Building high-impact & scalable solutions. Specialized in Next.js, React, payment systems, and performance optimization.",
    creator: "@tahmidkabir",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2f24b7481b566ce5", // Google Search Console verification
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tahmid Kabir",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Software Engineer with 1+ years of experience building high-impact, scalable solutions. Specialized in Next.js, React, Node.js, payment systems, and performance optimization.",
    "url": "https://tahmid-kabir-portfolio.vercel.app",
    "email": "tahmidkabiraddin@gmail.com",
    "telephone": "+880-1638587407",
    "image": "https://tahmid-kabir-portfolio.vercel.app/og.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "addressCountry": "Bangladesh"
    },
    "nationality": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "sameAs": [
      "https://github.com/Tahmid-kabir-addin",
      "https://www.linkedin.com/in/tahmid-kabir-44b4671b1/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "79mplus",
      "location": {
        "@type": "Place",
        "name": "Dhaka, Bangladesh"
      }
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Shahjalal University of Science and Technology",
        "alternateName": "SUST",
        "location": {
          "@type": "Place",
          "name": "Sylhet, Bangladesh"
        }
      }
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "Python",
      "Java",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Payment Integration",
      "E-commerce Development",
      "SaaS Development",
      "Performance Optimization",
      "Full-Stack Development",
      "Software Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Software Engineer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Dhaka, Bangladesh"
      },
      "skills": [
        "Next.js Development",
        "React Development",
        "Node.js Development",
        "Payment Integration",
        "Performance Optimization",
        "E-commerce Solutions",
        "SaaS Development"
      ]
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Full-Stack Web Development Services",
        "description": "Professional web development services including React.js, Next.js, e-commerce platforms, SaaS development, payment integration, and performance optimization.",
        "serviceType": [
          "Web Development",
          "E-commerce Development",
          "SaaS Platform Development", 
          "Payment Integration",
          "Performance Optimization",
          "Custom Software Development"
        ]
      },
      "availability": "Available",
      "availableDeliveryMethod": "Remote"
    }
  };

  return (
    <html lang="en">
      <head>
        <AdvancedAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen bg-gray-900 text-white">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
