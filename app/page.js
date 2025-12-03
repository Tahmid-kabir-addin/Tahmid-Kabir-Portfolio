"use client";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import "./assets/css/tomorrow.css";
import PortfolioPage from "./components/About";
import Meteors from "./components/ui/meteors";

// Structured Data Component for Landing Page
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://tahmid-kabir-portfolio.vercel.app/#webpage",
        "url": "https://tahmid-kabir-portfolio.vercel.app",
        "name": "Tahmid Kabir | Full-Stack Software Engineer Portfolio",
        "description": "Welcome to my portfolio. I'm Tahmid Kabir, a passionate Full-Stack Software Engineer building high-impact solutions with Next.js, React, and modern web technologies.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Tahmid Kabir Portfolio",
          "url": "https://tahmid-kabir-portfolio.vercel.app"
        },
        "about": {
          "@type": "Person",
          "name": "Tahmid Kabir",
          "jobTitle": "Full-Stack Software Engineer",
          "description": "Passionate Software Engineer with 1+ years of experience building high-impact, scalable solutions."
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://tahmid-kabir-portfolio.vercel.app/og.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://tahmid-kabir-portfolio.vercel.app"
            }
          ]
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://tahmid-kabir-portfolio.vercel.app/#profilepage",
        "url": "https://tahmid-kabir-portfolio.vercel.app",
        "name": "Tahmid Kabir - Professional Profile",
        "description": "Professional profile showcasing skills, projects, experience, and contact information for Full-Stack Software Engineer Tahmid Kabir.",
        "mainEntity": {
          "@type": "Person",
          "name": "Tahmid Kabir",
          "jobTitle": "Full-Stack Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "79mplus"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor of Science in Computer Science & Engineering",
            "educationalLevel": "Bachelor's Degree",
            "recognizedBy": {
              "@type": "CollegeOrUniversity", 
              "name": "Shahjalal University of Science and Technology"
            }
          },
          "knowsLanguage": [
            {
              "@type": "Language",
              "name": "English",
              "alternateName": "en"
            },
            {
              "@type": "Language", 
              "name": "Bengali",
              "alternateName": "bn"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://tahmid-kabir-portfolio.vercel.app/#portfolio-sections",
        "name": "Portfolio Sections",
        "description": "Main sections of Tahmid Kabir's portfolio website",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "About",
            "description": "Introduction and overview of Tahmid Kabir's background and expertise",
            "url": "https://tahmid-kabir-portfolio.vercel.app/#about"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Skills", 
            "description": "Technical skills and competencies in programming languages, frameworks, and tools",
            "url": "https://tahmid-kabir-portfolio.vercel.app/skills"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Projects",
            "description": "Featured software projects including e-commerce platforms, SaaS solutions, and applications",
            "url": "https://tahmid-kabir-portfolio.vercel.app/projects"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Experience",
            "description": "Professional work experience and career achievements",
            "url": "https://tahmid-kabir-portfolio.vercel.app/experience"
          },
          {
            "@type": "ListItem", 
            "position": 5,
            "name": "Education",
            "description": "Academic background and educational qualifications",
            "url": "https://tahmid-kabir-portfolio.vercel.app/education"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Contact",
            "description": "Contact information and collaboration opportunities",
            "url": "https://tahmid-kabir-portfolio.vercel.app/contact"
          }
        ]
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(script);
      } catch (e) {
        // Handle case where script might already be removed
      }
    };
  }, []);

  return null;
}

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Software Engineer with 1+ years experience",
    "Secure Payment Systems & Authentication Specialist",
    "Performance Optimization Enthusiast",
    "Next.js & React Developer",
    "MERN Stack & RESTful API Developer",
  ];

  const [code] = useState(`
const profile = {
    name: 'Mir Md. Tahmid Kabir',
    title: 'Full-Stack Software Engineer',
    currentRole: 'Junior Software Engineer at 79mplus',
    experience: '1+ years',
    location: 'Dhaka, Bangladesh',

    // Core Expertise
    specializations: [
        'Payment Systems (Stripe, PayPal, SSLCommerz)',
        'Authentication (JWT, OAuth, NextAuth.js)',
        'Performance Optimization (60% improvements)',
        'Headless E-commerce (WooCommerce, Shopify)',
        'Full-Stack Development (MERN, Next.js)'
    ],

    // Key Achievements
    achievements: {
        performanceBoost: '60%',
        lighthouseScore: '95+',
        problemsSolved: '600+',
        apiResponseTime: '6ms'
    },

    hireable: function() {
        return (
            this.experience >= 1 &&
            this.achievements.lighthouseScore >= 95 &&
            this.achievements.problemsSolved >= 600
        );
    }
};

// Ready to contribute to your team! 🚀
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }

      @keyframes draw {
        from { 
          stroke-dashoffset: 500;
          opacity: 0;
        }
        to { 
          stroke-dashoffset: 0;
          opacity: 0.8;
        }
      }

      @keyframes highlight {
        from { 
          width: 0; 
          opacity: 0; 
        }
        to { 
          width: 100%; 
          opacity: 1; 
        }
      }

      @keyframes colorPop {
        from {
          color: rgb(156, 163, 175); /* gray-400 */
        }
        to {
          color: currentColor;
        }
      }

      @keyframes colorPopCyan {
        from {
          color: rgb(156, 163, 175); /* gray-400 */
        }
        to {
          color: rgb(165, 243, 252); /* cyan-200 */
        }
      }

      @keyframes colorPopPurple {
        from {
          color: rgb(156, 163, 175); /* gray-400 */
        }
        to {
          color: rgb(233, 213, 255); /* purple-200 */
        }
      }

      @keyframes colorPopBlue {
        from {
          color: rgb(156, 163, 175); /* gray-400 */
        }
        to {
          color: rgb(191, 219, 254); /* blue-200 */
        }
      }

      .animate-draw {
        animation: draw 1.5s ease-out forwards;
        opacity: 0;
      }

      .animate-highlight {
        animation: highlight 0.8s ease-out forwards;
        width: 0;
        opacity: 0;
      }

      .animate-color-cyan {
        animation: colorPopCyan 0.3s ease-out forwards;
        animation-delay: 4.3s;
      }

      .animate-color-purple {
        animation: colorPopPurple 0.3s ease-out forwards;
        animation-delay: 5.1s;
      }

      .animate-color-blue {
        animation: colorPopBlue 0.3s ease-out forwards;
        animation-delay: 5.9s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [code]);

  return (
    <>
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0"></div>

        {/* Choose one of these background options */}
        <GridBackground />

        {/* Or keep the original backgrounds if you prefer */}
        {/* <HexagonBackground /> */}
        {/* <AnimatedGrid /> */}
        {/* <DotBackground /> */}

        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Main content container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 lg:py-0 gap-8 lg:gap-12">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate__animated animate__fadeInLeft relative">
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Professional Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate__animated animate__fadeInDown animate__delay-1s hover:bg-white/10 transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span className="text-gray-300 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Name section */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">High-Impact</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Scalable</span> Solutions
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            {/* Role badge */}
            {/* <div className="inline-flex items-center gap-3 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              <span className="text-xl text-gray-400">I am a</span>
              <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <FlipWords
                  className={"text-lg text-blue-400 font-bold"}
                  words={words}
                />
              </div>
            </div> */}

            {/* Professional Description */}
            <div className="relative mb-12 max-w-xl">
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Software Engineer with a proven track record of{" "}
                <span className="relative inline-block text-white font-medium px-2">
                  solving complex problems
                  <svg className="absolute w-[120%] h-[140%] -top-[20%] -left-[10%] -z-10" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <path 
                      d="M10,40 C40,10 160,10 190,40 C200,60 160,75 100,75 C40,75 0,60 10,40" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="3" 
                      className="opacity-80 animate-draw" 
                      strokeDasharray="500" 
                      strokeDashoffset="500" 
                      strokeLinecap="round"
                      style={{ animationDelay: "1s" }}
                    />
                  </svg>
                </span>
                . I build systems that drive business growth, focusing on{" "}
                <span className="relative inline-block px-1">
                  <span className="relative z-10 font-semibold animate-color-cyan">performance</span>
                  <span className="absolute inset-0 bg-cyan-500/20 -skew-y-2 rounded-sm -z-0 animate-highlight" style={{ animationDelay: "3.5s" }}></span>
                </span>
                ,{" "}
                <span className="relative inline-block px-1">
                  <span className="relative z-10 font-semibold animate-color-purple">security</span>
                  <span className="absolute inset-0 bg-purple-500/20 skew-y-1 rounded-sm -z-0 animate-highlight" style={{ animationDelay: "4.3s" }}></span>
                </span>
                , and{" "}
                <span className="relative inline-block px-1">
                  <span className="relative z-10 font-semibold animate-color-blue">user experience</span>
                  <span className="absolute inset-0 bg-blue-500/20 -skew-y-1 rounded-sm -z-0 animate-highlight" style={{ animationDelay: "5.1s" }}></span>
                </span>
                .
              </p>
            </div>

            {/* Key Metrics - Simplified */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl">
              <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-400 mb-1">1+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-green-400 mb-1">95+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Lighthouse</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-400 mb-1">600+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Problems Solved</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-yellow-400 mb-1">60%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Perf Boost</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
              {/* Download Resume Button */}
              <a
                href="/Tahmid_Kabir_Resume.pdf"
                download="Tahmid_Kabir_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>Download Resume</span>
                <i className="fas fa-download group-hover:translate-y-1 transition-transform duration-300"></i>
              </a>

              {/* Contact Button */}
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Me</span>
                <i className="fas fa-envelope group-hover:rotate-12 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Right column - Code window */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
            <div className="gradient-border">
              <div className="code-window bg-[#091121] max-h-[600px] overflow-hidden">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    profile.js
                  </span>
                </div>
                <div className="relative">
                  <pre className="language-javascript text-sm">
                    <code className="language-javascript">{code}</code>
                  </pre>
                  {/* Fade out effect at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#091121] to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
      >
        <span className="text-gray-400 text-sm flex items-center gap-2 font-medium">
          <i className="fas fa-mouse text-blue-400"></i>
          Learn More
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </a>
      <PortfolioPage />
      <StructuredData />
    </>
  );
}
