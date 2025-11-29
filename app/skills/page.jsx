import SkillsClient from "./SkillsClient";

export const metadata = {
  title: "Technical Skills & Expertise | Tahmid Kabir - Full-Stack Developer",
  description: "Comprehensive technical skills of Tahmid Kabir: React.js, Next.js, Node.js, TypeScript, Python, Java, MongoDB, PostgreSQL, AWS, Docker, Stripe payments, OAuth, and modern web development technologies.",
  keywords: [
    // Core Identity
    "Tahmid Kabir skills",
    "Full-Stack Developer skills",
    "Software Engineer expertise",
    "Technical competencies",
    "Programming skills",
    
    // Programming Languages
    "JavaScript developer",
    "TypeScript expert",
    "Python programming",
    "Java development",
    "C++ programming",
    "C programming",
    
    // Frontend Technologies
    "React.js developer",
    "Next.js expert",
    "Remix.js developer",
    "Frontend development skills",
    "React developer portfolio",
    "Modern JavaScript frameworks",
    "TailwindCSS expert",
    "Framer Motion animations",
    "Redux Toolkit state management",
    "Responsive web design",
    "UI/UX development",
    
    // Backend Technologies
    "Node.js developer",
    "Express.js backend",
    "FastAPI Python",
    "REST API development",
    "GraphQL implementation",
    "Webhooks integration",
    "Backend architecture",
    "Server-side development",
    "API design patterns",
    
    // Database Technologies
    "MongoDB developer",
    "PostgreSQL expert",
    "MySQL database",
    "SQLite development",
    "Prisma ORM",
    "Database design",
    "NoSQL databases",
    "Relational databases",
    "Database optimization",
    
    // Payment & Authentication
    "Stripe integration",
    "PayPal development",
    "Payment gateway integration",
    "Afterpay integration",
    "SSLCommerz payment",
    "JWT authentication",
    "OAuth implementation",
    "NextAuth.js",
    "PCI compliance",
    "Secure payment processing",
    "Authentication systems",
    
    // Cloud & DevOps
    "AWS cloud services",
    "Vercel deployment",
    "Docker containerization",
    "Cloud deployment",
    "DevOps practices",
    "CI/CD pipelines",
    "Container orchestration",
    
    // Tools & Development
    "Git version control",
    "GitHub workflows",
    "Google Analytics",
    "Klaviyo integration",
    "Development tools",
    "Version control systems",
    "Code collaboration",
    
    // Design Patterns & Architecture
    "SOLID principles",
    "DRY principle",
    "KISS principle",
    "Software architecture",
    "Design patterns",
    "Clean code practices",
    "Software engineering principles",
    "Object-oriented programming",
    
    // Technology Stacks
    "MERN stack developer",
    "Full-stack JavaScript",
    "Modern web technologies",
    "JAMstack development",
    "React ecosystem",
    "Node.js ecosystem",
    
    // Specializations
    "E-commerce development",
    "Payment systems integration",
    "Authentication solutions",
    "Database management",
    "API development",
    "Frontend architecture",
    "Backend systems",
    "Web performance optimization",
    
    // Location & Context
    "Bangladesh software engineer",
    "Remote developer skills",
    "International development standards",
    "Global technology expertise",
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
    title: "Technical Skills & Expertise | Tahmid Kabir - Full-Stack Developer",
    description: "Explore my comprehensive technical skills: React.js, Next.js, Node.js, TypeScript, Python, Java, MongoDB, PostgreSQL, AWS, Docker, payment integrations, and modern web development expertise.",
    url: "https://tahmid-kabir-portfolio.vercel.app/skills",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/Tahmid.jpg",
        width: 1207,
        height: 929,
        alt: "Tahmid Kabir - Technical Skills & Full-Stack Development Expertise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Expertise | Tahmid Kabir",
    description: "Comprehensive technical skills: React.js, Next.js, Node.js, TypeScript, Python, MongoDB, AWS, payment systems, and modern web development technologies.",
    creator: "@tahmidkabir",
    images: ["/Tahmid.jpg"],
  },
  alternates: {
    canonical: "https://tahmid-kabir-portfolio.vercel.app/skills",
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
