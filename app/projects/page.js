"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Vinyl Status",
    category: "E-Commerce",
    description:
      "High-performance headless e-commerce platform built for speed and conversion. Solved slow catalog loading issues by implementing a modern Next.js architecture.",
    image: "/vs.png",
    color: "from-emerald-500 to-teal-500",
    tech: [
      "Next.js 15",
      "NextAuth",
      "Redux",
      "WooCommerce",
      "Stripe",
      "Paypal",
      "AfterPay",
    ],
    stats: [
      "95+ Lighthouse",
      "Great Core Web Vitals",
      "30% ROI Increase",
      "Headless CMS",
      "SEO Optimized",
    ],
    links: {
      live: "https://vinylstatus.com",
      github: null,
    },
    featured: true,
  },
  {
    title: "LinkedLogi",
    category: "SaaS Platform",
    description:
      "Multi-tenant logistics management system handling complex RFQ workflows. Streamlined operations for 3 distinct user roles with real-time updates.",
    image: "/linkedlogi.png",
    color: "from-emerald-500 to-teal-500",
    tech: ["Next.js 14", "TypeScript", "MongoDB", "AWS"],
    stats: ["6ms Latency", "99.9% Uptime", "Multi-tenant"],
    links: {
      live: "https://linkedlogi.com",
      github: null,
    },
    featured: true,
  },
  {
    title: "LWSkart",
    category: "E-Commerce",
    description:
      "Real-time inventory management system with optimistic UI updates. Eliminated stock conflicts during high-traffic sales events.",
    image: "/lwskart.png",
    color: "from-emerald-500 to-teal-500",
    tech: ["Next.js", "NextAuth", "MongoDB", "i18n"],
    stats: ["Real-time Sync", "Sub-second UI", "Global i18n"],
    links: {
      live: "https://lwskart.com",
      github: "https://github.com/Tahmid-kabir-addin/LWSkart",
    },
    featured: false,
  },
  {
    title: "Pigeonnier",
    category: "Desktop App",
    description:
      "Lightweight JavaFX email client designed for efficiency. Implemented MVP pattern for a robust, multi-account email management experience.",
    image: "/pigeonnier.png",
    color: "from-emerald-500 to-teal-500",
    tech: ["Java", "JavaFX", "MVP Pattern", "IMAP/SMTP"],
    stats: ["Multi-account", "Rich Text", "Secure Auth"],
    links: {
      live: null,
      github: "https://github.com/TahmidKabir-2019331016/Pigeonnier.git",
    },
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card Background with Glassmorphism */}
      <div className="relative h-full bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 opacity-60`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20 mix-blend-overlay`}
          />

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-30">
            <span className="px-3 py-1 text-sm font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Links Overlay (Desktop) */}
          <div className="hidden md:flex absolute inset-0 z-30 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                title="View Live Site"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white border border-white/20 rounded-full hover:scale-110 transition-transform"
                title="View Source Code"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span>Featured</span>
              </div>
            )}
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-2 rounded-lg border border-white/10 bg-gray-900/50"
              >
                <span
                  className={`${
                    project.stats.length > 3 ? "text-xs" : "text-sm"
                  } font-extrabold bg-gradient-to-r ${
                    project.color
                  } bg-clip-text text-transparent block`}
                >
                  {stat}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-sm text-gray-400 font-medium px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Mobile Links */}
          <div className="md:hidden flex items-center gap-4 pt-4 border-t border-white/10">
            {project.links.live && (
              <a
                href={project.links.live}
                className="flex items-center gap-2 text-base text-white font-medium"
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="flex items-center gap-2 text-base text-gray-400"
              >
                <Github className="w-5 h-5" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#04081A] relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of high-impact solutions built with modern
            technologies, focusing on performance and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Github CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Tahmid-kabir-addin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
