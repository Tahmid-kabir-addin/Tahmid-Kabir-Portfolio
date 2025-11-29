import ExperienceClient from "./ExperienceClient";

export const metadata = {
  title: "Professional Experience & Career Journey | Tahmid Kabir - Software Engineer",
  description: "Proven software engineering experience: Junior Engineer at 79mplus (10k+ users, 40% deployment optimization), Trainee at InfancyIT (60% performance boost). Expert in Next.js, Remix.js, GraphQL, CI/CD, international collaboration.",
  keywords: [
    // Core Professional Identity
    "Tahmid Kabir experience",
    "Software Engineer experience",
    "Junior Software Engineer",
    "Professional journey",
    "Career progression",
    "Software development career",
    "Full-stack engineer experience",
    "Professional background",
    
    // Current & Previous Companies
    "79mplus Software Engineer",
    "InfancyIT developer",
    "79mplus Australia headquarters",
    "Bangladesh software company",
    "International software team",
    "Dhaka software engineer",
    "Sylhet software developer",
    
    // Professional Achievements - Quantified Results
    "10k daily active users",
    "60% performance improvement",
    "40% deployment optimization",
    "30% bug reduction",
    "50% automation efficiency",
    "Performance engineering results",
    "Scalability achievements",
    "Code quality improvements",
    
    // Technical Leadership & Responsibilities
    "Headless Next.js architecture",
    "Enterprise e-commerce solutions",
    "CI/CD pipeline optimization",
    "Code review leadership",
    "Coding standards establishment",
    "Performance overhaul specialist",
    "Legacy system modernization",
    "Inventory workflow automation",
    
    // Technologies & Expertise
    "Next.js enterprise development",
    "Remix.js Shopify apps",
    "GraphQL development",
    "PCI-DSS compliance",
    "Stripe PayPal integration",
    "Payment gateway implementation",
    "Backend scalability",
    "Performance engineering",
    
    // Industry Experience
    "E-commerce development experience",
    "Shopify app development",
    "Enterprise software development",
    "SaaS platform experience",
    "Payment systems experience",
    "Admin panel development",
    "Inventory management systems",
    "Web application architecture",
    
    // Work Environment & Collaboration
    "International team collaboration",
    "Agile development experience",
    "Remote work experience",
    "Cross-cultural team work",
    "Australia Bangladesh collaboration",
    "Global software development",
    "Distributed team experience",
    "Professional communication",
    
    // Technical Skills Demonstrated
    "Scalable architecture design",
    "Performance optimization expert",
    "CI/CD implementation",
    "Code quality assurance",
    "Testing and debugging",
    "Software deployment",
    "Database optimization",
    "API development experience",
    
    // Problem Solving & Innovation
    "Complex problem solving",
    "Performance bottleneck resolution",
    "Legacy system improvement",
    "Workflow optimization",
    "Process automation",
    "Technical debt reduction",
    "System reliability improvement",
    "User experience enhancement",
    
    // Professional Growth & Development
    "Junior to senior progression",
    "Continuous learning",
    "Skill development",
    "Technical expertise growth",
    "Leadership development",
    "Mentorship experience",
    "Professional advancement",
    "Career milestone achievements",
    
    // Industry Standards & Compliance
    "PCI-DSS compliance implementation",
    "Security standards adherence",
    "Industry best practices",
    "Code standards implementation",
    "Quality assurance processes",
    "Professional development standards",
    "Enterprise security protocols",
    
    // Location & Market Experience
    "Bangladesh software industry",
    "Dhaka tech ecosystem",
    "Sylhet software development",
    "South Asian developer",
    "International market experience",
    "Global software standards",
    "Cross-timezone collaboration",
    "UTC+6 development experience",
    
    // Specific Project Types
    "E-commerce platform development",
    "Admin dashboard creation",
    "Inventory management solutions",
    "Payment processing systems",
    "User management systems",
    "Data visualization projects",
    "API integration projects",
    "Third-party service integration",
    
    // Development Methodologies
    "Agile software development",
    "Scrum methodology experience",
    "DevOps practices",
    "Continuous integration",
    "Continuous deployment",
    "Version control expertise",
    "Git workflow management",
    "Collaborative development",
    
    // Business Impact & Results
    "Revenue-generating applications",
    "User engagement improvement",
    "Operational efficiency gains",
    "Cost reduction achievements",
    "Time-to-market improvement",
    "Business process optimization",
    "Customer satisfaction improvement",
    "ROI-positive implementations",
    
    // Professional Skills
    "Team collaboration",
    "Technical leadership",
    "Project management",
    "Client communication",
    "Requirements analysis",
    "Solution architecture",
    "Technical documentation",
    "Knowledge sharing",
    
    // Timeframe & Career Timeline
    "May 2025 Present experience",
    "Jan 2024 Apr 2025 experience",
    "Software engineering timeline",
    "Professional career progression",
    "Work experience chronology",
    "Career development path",
    "Professional growth timeline",
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
    title: "Professional Experience & Career Journey | Tahmid Kabir - Software Engineer",
    description: "Demonstrated software engineering excellence: Junior Engineer at 79mplus building enterprise e-commerce solutions (10k+ daily users, 40% deployment optimization), Trainee at InfancyIT achieving 60% performance improvements. Expertise in Next.js, Remix.js, GraphQL, CI/CD, and international team collaboration.",
    url: "https://tahmid-kabir-portfolio.vercel.app/experience",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/Tahmid.jpg",
        width: 1207,
        height: 929,
        alt: "Tahmid Kabir - Software Engineer Professional Experience: 79mplus, InfancyIT, Performance Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Experience | Tahmid Kabir - Software Engineer",
    description: "Software engineering excellence: 79mplus Junior Engineer (10k+ users, 40% optimization), InfancyIT Trainee (60% performance boost). Next.js, Remix.js, GraphQL expertise.",
    creator: "@tahmidkabir",
    images: ["/Tahmid.jpg"],
  },
  alternates: {
    canonical: "https://tahmid-kabir-portfolio.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
