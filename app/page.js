"use client";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import "./assets/css/tomorrow.css";
import PortfolioPage from "./components/About";
import ContactClient from "./contact/ContactClient";
import EducationClient from "./education/EducationClient";
import ExperienceClient from "./experience/ExperienceClient";
import ProjectsClient from "./projects/ProjectsClient";
import SkillsClient from "./skills/SkillsClient";

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
            { "@type": "Language", "name": "English", "alternateName": "en" },
            { "@type": "Language", "name": "Bengali", "alternateName": "bn" }
          ]
        }
      },
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      try { document.head.removeChild(script); } catch (e) {}
    };
  }, []);

  return null;
}

// Art Deco sunburst + crosshatch background
const DecoBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Crosshatch */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 14px)",
      }}
    />
    {/* Sunburst radial glow */}
    <div
      className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
      style={{ background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)" }}
    />
    {/* Vertical accent lines */}
    <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[#D4AF37] opacity-[0.04]" />
    <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#D4AF37] opacity-[0.04]" />
  </div>
);

// Roman numeral helper
const toRoman = (n) => ["I","II","III","IV","V"][n - 1] ?? n;

export default function Hero() {
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
  }, [code]);

  const metrics = [
    { value: "1+",   label: "Years Exp",      roman: "I"   },
    { value: "95+",  label: "Lighthouse",     roman: "II"  },
    { value: "600+", label: "Problems Solved",roman: "III" },
    { value: "60%",  label: "Perf Boost",     roman: "IV"  },
  ];

  return (
    <>
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 md:pt-0 bg-[#0A0A0A]">
        <DecoBackground />

        {/* Main content */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 lg:py-0 gap-10 lg:gap-16">
          {/* ── Left column ── */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.6)]" aria-hidden="true" />
              <span
                className="text-[#888888] text-xs tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Available for Opportunities
              </span>
            </div>

            {/* Ornamental rule above title */}
            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px w-8 bg-[#D4AF37] opacity-60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              <div className="h-px w-8 bg-[#D4AF37] opacity-60" />
            </div>

            {/* Main heading */}
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase"
                style={{ fontFamily: "var(--font-marcellus)", letterSpacing: "0.05em" }}
              >
                <span className="text-[#F2F0E4]">Building </span>
                <span className="text-[#D4AF37]">High-Impact</span>
                <br />
                <span className="text-[#F2F0E4]">&amp; </span>
                <span className="text-[#D4AF37]">Scalable</span>
                <br />
                <span className="text-[#F2F0E4]">Solutions</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-[#888888] text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Software Engineer with a proven track record of solving complex
              problems. I build systems that drive business growth — focusing on{" "}
              <span className="text-[#F2F0E4]">performance</span>,{" "}
              <span className="text-[#F2F0E4]">security</span>, and{" "}
              <span className="text-[#F2F0E4]">user experience</span>.
            </p>

            {/* Metric cards — stepped Art Deco */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="deco-card p-4 text-center"
                >
                  <div
                    className="text-xs text-[#D4AF37]/50 mb-1"
                    style={{ fontFamily: "var(--font-marcellus)" }}
                    aria-hidden="true"
                  >
                    {m.roman}
                  </div>
                  <div
                    className="text-2xl text-[#D4AF37]"
                    style={{ fontFamily: "var(--font-marcellus)" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-[10px] text-[#888888] tracking-[0.15em] uppercase mt-1"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/Tahmid_Kabir_Resume.pdf"
                download="Tahmid_Kabir_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="deco-btn-solid"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Download Résumé
              </a>
              <a
                href="/contact"
                className="deco-btn"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ── Right column: code window ── */}
          <div className="w-full lg:w-1/2">
            {/* Art Deco double-frame code window */}
            <div className="relative">
              {/* Outer corner decorations */}
              <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] z-10" aria-hidden="true" />
              <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] z-10" aria-hidden="true" />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] z-10" aria-hidden="true" />
              <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] z-10" aria-hidden="true" />

              <div className="gradient-border">
                <div className="code-window bg-[#0A0A0A] max-h-[580px] overflow-hidden">
                  <div className="window-header">
                    {/* Art Deco square dots */}
                    <div className="w-2.5 h-2.5 bg-[#8B7430]" aria-hidden="true" />
                    <div className="w-2.5 h-2.5 bg-[#D4AF37]" aria-hidden="true" />
                    <div className="w-2.5 h-2.5 bg-[#F2E8C4]" aria-hidden="true" />
                    <span
                      className="ml-3 text-xs text-[#D4AF37]/60 tracking-[0.18em] uppercase"
                      style={{ fontFamily: "var(--font-josefin)" }}
                    >
                      profile.js
                    </span>
                  </div>
                  <div className="relative">
                    <pre className="language-javascript text-sm">
                      <code className="language-javascript">{code}</code>
                    </pre>
                    {/* Fade out */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll to About section"
      >
        <span
          className="text-[#888888] text-xs tracking-[0.2em] uppercase group-hover:text-[#D4AF37] transition-colors duration-300"
          style={{ fontFamily: "var(--font-josefin)" }}
        >
          Explore
        </span>
        {/* Animated chevron */}
        <div className="flex flex-col items-center gap-0.5 animate-bounce" aria-hidden="true">
          <div className="w-3 h-px bg-[#D4AF37] opacity-60" />
          <div className="w-2 h-px bg-[#D4AF37] opacity-40 -translate-y-0.5" />
        </div>
      </a>

      <PortfolioPage />
      <SkillsClient />
      <ExperienceClient />
      <EducationClient />
      <ProjectsClient />
      <ContactClient />
      <StructuredData />
    </>
  );
}

// Structured Data Component for Landing Page
