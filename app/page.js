"use client";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import "./assets/css/tomorrow.css";
import PortfolioPage from "./components/About";
import { FlipWords } from "./components/ui/flip-words";
import Meteors from "./components/ui/meteors";
import SparklesText from "./components/ui/sparkles-text";

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
    "Performance Optimization Expert",
    "Expert Next.js & React Developer",
    "MERN Stack & RESTful API Architect",
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
        cgpa: '3.95/4.00',
        apiResponseTime: '6ms'
    },

    hireable: function() {
        return (
            this.experience >= 1 &&
            this.achievements.lighthouseScore >= 95 &&
            this.achievements.cgpa >= 3.9
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">
                🚀 Currently at 79mplus • 1+ Years Experience
              </span>
            </div>

            {/* Name section */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text">
                    {" "}
                    Tahmid Kabir
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce"></i>
              <span>
                <FlipWords
                  className={"text-lg text-blue-400 font-medium"}
                  words={words}
                />
              </span>
            </div>

            {/* Professional Description */}
            <div className="relative mb-12 max-w-xl">
              <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed mb-8">
                Full-stack Software Engineer with{" "}
                <span className="text-blue-400 font-semibold">
                  1+ years of experience
                </span>{" "}
                designing and building secure, scalable web applications.
                Specialized in{" "}
                <span className="text-green-400 font-semibold">
                  payment systems integration
                </span>
                ,{" "}
                <span className="text-purple-400 font-semibold">
                  authentication
                </span>
                , and{" "}
                <span className="text-yellow-400 font-semibold">
                  performance optimization
                </span>
                .
              </p>
            </div>

            {/* Key Metrics - Simplified */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-blue-400 mb-1">1+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  95+
                </div>
                <div className="text-sm text-gray-400">Lighthouse</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  3.95
                </div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  60%
                </div>
                <div className="text-sm text-gray-400">Performance</div>
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
                onClick={() => {
                  console.log("Resume download clicked");
                }}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    <span>Download Resume</span>
                    <i className="fas fa-download transform transition-all duration-300 group-hover:translate-y-1"></i>
                  </span>
                </span>
              </a>

              {/* Contact Button */}
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                    <span>Contact Me</span>
                    <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                  </span>
                </span>
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
    </>
  );
}
