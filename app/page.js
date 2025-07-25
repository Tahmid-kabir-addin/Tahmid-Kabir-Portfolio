"use client";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./assets/css/tomorrow.css";
import PortfolioPage from "./components/About";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import Achievements from "./components/Achievements";
import { FlipWords } from "./components/ui/flip-words";
import Meteors from "./components/ui/meteors";
import SparklesText from "./components/ui/sparkles-text";
import ParticleSystem from "./components/ui/particle-system";
import EnhancedButton from "./components/ui/enhanced-button";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Download, Mail, ArrowDown } from "lucide-react";

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
  const heroRef = useScrollReveal();
  const codeRef = useScrollReveal({ threshold: 0.3 });

  const words = [
    "Trainee Software Engineer specializing in MERN",
    "Full-Stack Developer",
    "RESTful API & Database Architecture Specialist",
    "Backend Developer with Frontend Capabilities",
    "OOP & Design Patterns",
  ];

  const [code] = useState(`
const profile = {
    name: 'Tahmid Kabir',
    title: 'Trainee Software Engineer | Problem Solver | Full-Stack Developer',
    skills: [
        'JavaScript', 'Java', 'C/C++', 'Python',
        'React', 'NextJS', 'Node.js', 'Express',
        'MySQL', 'PostgreSQL', 'MongoDB', 'GraphQL',
        'AWS', 'Git', 'Design Principles'
    ],
    problemSolver: true,
    quickLearner: true,
    yearsOfExperience: 1,
    location: 'Dhaka, Bangladesh',
    hireable: function() {
        return (
            this.problemSolver &&
            this.quickLearner &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 1
        );
    }
};
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
      {/* Enhanced Particle System */}
      <ParticleSystem particleCount={30} particleColor="#00D4FF" speed={0.3} />

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={15} />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content container */}
        <motion.div
          ref={heroRef}
          className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left column - Text content */}
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6 sm:mb-8 mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name section */}
            <motion.div
              className="relative mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="gradient-text-primary font-black">
                    {" "}
                    Tahmid Kabir
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </motion.div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords
                  className={"text-lg sm:text-xl text-blue-400 font-medium"}
                  words={words}
                />
              </span>
            </div>

            {/* Description */}
            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                Detail-oriented Software Engineer with expertise in
                object-oriented programming, performance optimization, and
                RESTful API development. Based in Dhaka, Bangladesh.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {/* Download Resume Button */}
              <EnhancedButton
                variant="primary"
                size="lg"
                icon={Download}
                iconPosition="right"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Tahmid_Kabir_Resume.pdf';
                  link.download = 'Tahmid_Kabir_Resume.pdf';
                  link.click();
                  console.log("Resume download clicked");
                }}
                className="group"
              >
                Download Resume
              </EnhancedButton>

              {/* Contact Button */}
              <EnhancedButton
                variant="secondary"
                size="lg"
                icon={Mail}
                iconPosition="right"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Me
              </EnhancedButton>
            </motion.div>

            {/* Floating badges */}
            <div className="hidden lg:block absolute left-[19rem] top-[-2rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>
                &nbsp;&nbsp;Problem Solver
              </div>
            </div>
            <div className="hidden lg:block absolute right-[-2rem] top-[8rem] animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
            <div className="hidden lg:block absolute left-[50%] bottom-[-4rem] animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
              </div>
            </div>
          </div>

          {/* Right column - Code window */}
          <motion.div
            ref={codeRef}
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="code-block shimmer">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400 flex items-center gap-2 font-mono">
                    <i className="fas fa-code"></i>
                    profile.js
                  </span>
                </div>
                <pre className="language-javascript p-6">
                  <code className="language-javascript font-mono text-sm">{code}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-gray-400 text-sm flex items-center gap-2 group-hover:text-blue-400 transition-colors">
          <i className="fas fa-mouse text-blue-400"></i>
          About me
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.a>

      {/* Enhanced Portfolio Sections */}
      <PortfolioPage />
      <Achievements />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
