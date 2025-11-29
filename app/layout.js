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
  return (
    <html lang="en">
      <head>
        <AdvancedAnalytics />
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
