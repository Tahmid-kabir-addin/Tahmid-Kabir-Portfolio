import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact & Hire | Tahmid Kabir - Full-Stack Developer Available for Projects",
  description: "Ready to discuss your next project? Contact Tahmid Kabir for web development, e-commerce solutions, SaaS platforms. Available for freelance & full-time opportunities. Located in Dhaka, Bangladesh.",
  keywords: [
    // Core Contact & Hiring
    "Contact Tahmid Kabir",
    "Hire Tahmid Kabir",
    "Tahmid Kabir contact information",
    "Full-Stack Developer for hire",
    "Software Engineer available",
    "Hire React developer",
    "Hire Next.js developer",
    "Contact software developer",
    
    // Location & Availability
    "Developer Dhaka Bangladesh",
    "Bangladesh software engineer contact",
    "Dhaka web developer hire",
    "Remote developer available",
    "Freelance developer Bangladesh",
    "Local developer Dhaka",
    "Bangladesh tech talent",
    "South Asian developer",
    
    // Contact Methods
    "tahmidkabiraddin@gmail.com",
    "Email Tahmid Kabir",
    "Phone +880 1638587407",
    "Contact form developer",
    "Get in touch developer",
    "Developer contact details",
    "Professional contact",
    "Business inquiry",
    
    // Social Media & Professional Networks
    "Tahmid Kabir LinkedIn",
    "Tahmid Kabir GitHub",
    "LinkedIn Tahmid Kabir developer",
    "GitHub Tahmid-kabir-addin",
    "Professional networking",
    "Social media contact",
    "Developer social profiles",
    
    // Services & Opportunities
    "Web development services",
    "E-commerce development hire",
    "SaaS development contractor",
    "Next.js development services",
    "React development hire",
    "Full-stack development services",
    "Custom software development",
    "Web application development",
    "Frontend development services",
    "Backend development services",
    
    // Project Types & Collaboration
    "New project discussion",
    "Creative collaboration",
    "Development partnership",
    "Technical consultation",
    "Software project collaboration",
    "Startup developer hire",
    "Enterprise development services",
    "Custom development solutions",
    
    // Work Arrangements
    "Freelance developer hire",
    "Full-time developer position",
    "Contract developer",
    "Remote work developer",
    "Project-based hiring",
    "Long-term collaboration",
    "Short-term projects",
    "Development consulting",
    
    // Technical Expertise Available
    "React.js developer hire",
    "Next.js expert for hire",
    "TypeScript developer available",
    "MongoDB developer hire",
    "Node.js developer contact",
    "Payment integration specialist",
    "E-commerce developer hire",
    "SaaS developer available",
    
    // Industry & Business
    "Technology consultant",
    "Software development consultant",
    "Web development business",
    "Digital solution provider",
    "Technical service provider",
    "Development agency alternative",
    "Individual developer hire",
    "Personal developer services",
    
    // Business Inquiries
    "Project quote request",
    "Development cost inquiry",
    "Timeline estimation",
    "Technical requirements discussion",
    "Project scope planning",
    "Budget discussion",
    "Proposal request",
    "Service inquiry",
    
    // Communication & Response
    "Quick response developer",
    "Professional communication",
    "Project discussion",
    "Technical consultation",
    "Requirements gathering",
    "Solution planning",
    "Fast turnaround",
    "Responsive developer",
    
    // Specific Technologies for Hire
    "Stripe integration developer",
    "PayPal integration specialist",
    "AWS developer for hire",
    "MongoDB expert hire",
    "Authentication system developer",
    "API development services",
    "Database design services",
    "Performance optimization hire",
    
    // Client Types
    "Startup developer",
    "Small business developer",
    "Enterprise developer",
    "Agency developer",
    "Individual client developer",
    "Corporate developer",
    "SME developer",
    "International client developer",
    
    // Location Specific
    "Dhaka software developer",
    "Bangladesh remote developer",
    "UTC+6 timezone developer",
    "Asian developer",
    "English speaking developer",
    "International collaboration",
    "Global remote work",
    "Cross-timezone collaboration",
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
    title: "Contact & Hire | Tahmid Kabir - Full-Stack Developer Available for Projects",
    description: "Ready to bring your ideas to life? Contact Tahmid Kabir for expert web development services. Specializing in Next.js, React, e-commerce, SaaS platforms. Available for freelance and full-time opportunities. Based in Dhaka, Bangladesh with global remote capabilities.",
    url: "https://tahmid-kabir-portfolio.vercel.app/contact",
    siteName: "Tahmid Kabir Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Tahmid Kabir - Full-Stack Developer Available for Hire in Dhaka Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Hire | Tahmid Kabir - Full-Stack Developer",
    description: "Available for web development projects: Next.js, React, e-commerce, SaaS platforms. Freelance & full-time opportunities. Contact: tahmidkabiraddin@gmail.com | Dhaka, Bangladesh",
    creator: "@tahmidkabir",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://tahmid-kabir-portfolio.vercel.app/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tahmid Kabir",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Available for web development projects, e-commerce solutions, SaaS platforms. Offering freelance and full-time collaboration opportunities.",
    "url": "https://tahmid-kabir-portfolio.vercel.app/contact",
    "email": "tahmidkabiraddin@gmail.com",
    "telephone": "+880-1638587407",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      "https://github.com/Tahmid-kabir-addin",
      "https://www.linkedin.com/in/tahmid-kabir-44b4671b1/"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Full-Stack Web Development Services",
        "description": "Professional web development services including React.js, Next.js, e-commerce platforms, SaaS development, payment integration, and custom software solutions.",
        "serviceType": [
          "Web Development",
          "E-commerce Development", 
          "SaaS Platform Development",
          "Payment Integration",
          "Custom Software Development",
          "Frontend Development",
          "Backend Development",
          "Performance Optimization"
        ]
      },
      "availability": "Available",
      "availableDeliveryMethod": "Remote"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Next.js Development",
          "description": "Expert Next.js development for high-performance web applications"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Solutions",
          "description": "Custom e-commerce platforms with payment gateway integrations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "SaaS Development",
          "description": "Scalable SaaS platform development with multi-tenant architecture"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
