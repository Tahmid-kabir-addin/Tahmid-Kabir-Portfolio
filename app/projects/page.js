import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Featured Projects & Portfolio | Tahmid Kabir - Full-Stack Developer Showcase",
  description: "High-impact software projects: Vinyl Status e-commerce (95+ Lighthouse), LinkedLogi SaaS platform (6ms latency), LWSkart inventory system, Pigeonnier email client. Built with Next.js, React, MongoDB, AWS, TypeScript.",
  keywords: [
    // Core Portfolio & Identity
    "Tahmid Kabir projects",
    "Full-Stack Developer portfolio",
    "Software development projects",
    "Featured projects showcase",
    "High-impact solutions",
    "Modern web applications",
    "Professional portfolio",
    "Developer showcase",
    
    // Project Names & Brands
    "Vinyl Status e-commerce",
    "LinkedLogi logistics platform", 
    "LWSkart inventory management",
    "Pigeonnier email client",
    "VinylStatus.com",
    "LinkedLogi.com",
    "LWSkart.com",
    
    // E-Commerce Projects
    "Headless e-commerce platform",
    "WooCommerce headless",
    "Next.js e-commerce",
    "High-performance e-commerce",
    "E-commerce optimization",
    "Stripe PayPal integration",
    "AfterPay payment gateway",
    "95+ Lighthouse score",
    "Core Web Vitals optimization",
    "30% ROI increase",
    "SEO optimized e-commerce",
    "Fast loading e-commerce",
    
    // SaaS & Enterprise Projects
    "Multi-tenant SaaS platform",
    "Logistics management system",
    "RFQ workflow management",
    "Real-time SaaS updates",
    "6ms latency application",
    "99.9% uptime SaaS",
    "Enterprise software solution",
    "Scalable SaaS architecture",
    "Multi-tenant architecture",
    
    // Inventory & Management Systems
    "Real-time inventory management",
    "Inventory tracking system",
    "Stock management solution",
    "Optimistic UI updates",
    "Real-time synchronization",
    "Sub-second UI performance",
    "Global internationalization",
    "High-traffic system",
    "Conflict resolution system",
    
    // Desktop Applications
    "JavaFX email client",
    "Desktop email application",
    "Multi-account email manager",
    "IMAP SMTP implementation",
    "MVP pattern architecture",
    "Rich text email editor",
    "Secure email authentication",
    "Lightweight desktop app",
    "Java desktop application",
    
    // Technologies - Frontend
    "Next.js 15 projects",
    "Next.js 14 applications",
    "React.js portfolio",
    "TypeScript projects",
    "Redux state management",
    "NextAuth authentication",
    "Framer Motion animations",
    "Responsive web design",
    "Modern JavaScript frameworks",
    
    // Technologies - Backend & Database
    "MongoDB projects",
    "AWS cloud applications",
    "Node.js backend systems",
    "Database architecture",
    "Cloud-native applications",
    "Scalable backend design",
    "NoSQL database projects",
    "Real-time data systems",
    
    // Technologies - Specialized
    "Payment gateway integration",
    "Stripe integration projects",
    "PayPal payment systems",
    "OAuth implementation",
    "API development projects",
    "Webhook integrations",
    "Third-party integrations",
    "Secure payment processing",
    
    // Performance & Optimization
    "Web performance optimization",
    "Lighthouse optimization",
    "Core Web Vitals improvement",
    "Speed optimization projects",
    "Performance monitoring",
    "SEO optimization projects",
    "User experience optimization",
    "Conversion rate optimization",
    
    // Architecture & Patterns
    "Headless CMS architecture",
    "MVP design pattern",
    "Scalable architecture",
    "Microservices design",
    "Clean code projects",
    "Software design patterns",
    "Modern architecture",
    "Maintainable code",
    
    // Business Impact & Results
    "30% ROI increase",
    "Conversion optimization",
    "Business impact projects",
    "Revenue generating applications",
    "User engagement improvement",
    "Operational efficiency",
    "Problem-solving solutions",
    "High-impact development",
    
    // Development Practices
    "GitHub portfolio",
    "Open source projects",
    "Version control projects",
    "Collaborative development",
    "Professional development",
    "Industry best practices",
    "Modern development workflow",
    "Clean code practices",
    
    // Industry & Domain
    "E-commerce solutions",
    "Logistics software",
    "Email client development",
    "SaaS platform development",
    "Enterprise applications",
    "Business software solutions",
    "Custom software development",
    "Web application development",
    
    // Technologies - Specific Versions
    "Next.js 15 developer",
    "Next.js 14 expert",
    "TypeScript developer",
    "MongoDB specialist",
    "AWS cloud developer",
    "JavaFX developer",
    "React developer",
    
    // Achievement & Recognition
    "Featured projects",
    "High-performance applications",
    "Award-winning performance",
    "Exceptional web vitals",
    "Outstanding optimization",
    "Professional excellence",
    "Technical achievements",
    "Development excellence",
  ],
  authors: [{ name: "Tahmid Kabir" }],
  creator: "Tahmid Kabir",
  publisher: "Tahmid Kabir",
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
  openGraph: {
    title: "Featured Projects & Portfolio | Tahmid Kabir - Full-Stack Developer Showcase",
    description: "Explore high-impact software projects: Vinyl Status e-commerce platform (95+ Lighthouse, 30% ROI increase), LinkedLogi multi-tenant SaaS (6ms latency), LWSkart real-time inventory system, Pigeonnier JavaFX email client. Built with Next.js, TypeScript, MongoDB, AWS.",
    url: "https://tahmid-kabir-portfolio.vercel.app/projects",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tahmid Kabir - Full-Stack Developer Projects Portfolio: E-commerce, SaaS, Inventory Management, Desktop Applications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects & Portfolio | Tahmid Kabir",
    description: "High-impact projects: Vinyl Status e-commerce (95+ Lighthouse), LinkedLogi SaaS platform (6ms latency), LWSkart inventory system, Pigeonnier email client. Next.js, TypeScript, MongoDB, AWS.",
    creator: "@tahmidkabir",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://tahmid-kabir-portfolio.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
