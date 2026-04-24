"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Vinyl Status",
    category: "E-Commerce",
    description:
      "High-performance headless e-commerce platform built for speed and conversion. Solved slow catalog loading issues by implementing a modern Next.js architecture.",
    image: "/vs.png",
    tech: ["Next.js 15", "NextAuth", "Redux", "WooCommerce", "Stripe", "Paypal", "AfterPay"],
    stats: ["95+ Lighthouse", "Great Core Web Vitals", "30% ROI Increase", "Headless CMS", "SEO Optimized"],
    links: { live: "https://vinylstatus.com", github: null },
    featured: true,
  },
  {
    title: "LinkedLogi",
    category: "SaaS Platform",
    description:
      "Multi-tenant logistics management system handling complex RFQ workflows. Streamlined operations for 3 distinct user roles with real-time updates.",
    image: "/linkedlogi.png",
    tech: ["Next.js 14", "TypeScript", "MongoDB", "AWS"],
    stats: ["6ms Latency", "99.9% Uptime", "Multi-tenant"],
    links: { live: "https://linkedlogi.com", github: null },
    featured: true,
  },
  {
    title: "LWSkart",
    category: "E-Commerce",
    description:
      "Real-time inventory management system with optimistic UI updates. Eliminated stock conflicts during high-traffic sales events.",
    image: "/lwskart.png",
    tech: ["Next.js", "NextAuth", "MongoDB", "i18n"],
    stats: ["Real-time Sync", "Sub-second UI", "Global i18n"],
    links: { live: "https://lwskart.com", github: "https://github.com/Tahmid-kabir-addin/LWSkart" },
    featured: false,
  },
  {
    title: "Pigeonnier",
    category: "Desktop App",
    description:
      "Lightweight JavaFX email client designed for efficiency. Implemented MVP pattern for a robust, multi-account email management experience.",
    image: "/pigeonnier.png",
    tech: ["Java", "JavaFX", "MVP Pattern", "IMAP/SMTP"],
    stats: ["Multi-account", "Rich Text", "Secure Auth"],
    links: { live: null, github: "https://github.com/TahmidKabir-2019331016/Pigeonnier.git" },
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
      {/* Art Deco card */}
      <div className="relative h-full bg-[#141414] border border-[#D4AF37]/25 hover:border-[#D4AF37]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        {/* Corner stepped decorations */}
        <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-500 z-20" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-500 z-20" aria-hidden="true" />

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          {/* Double-frame overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 opacity-70" />
          <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay" />

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-30">
            <span
              className="px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] bg-[#0A0A0A]/80 border border-[#D4AF37]/40"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {project.category}
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" aria-hidden="true" />
              <span
                className="text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Featured
              </span>
            </div>
          )}

          {/* Link overlay (desktop) */}
          <div className="hidden md:flex absolute inset-0 z-30 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A0A0A]/60">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#D4AF37]/50 text-[#888888] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-5">
          <h3
            className="text-2xl text-[#F2F0E4] group-hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-[#888888] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            {project.description}
          </p>

          {/* Stats — Art Deco bordered cells */}
          <div className={`grid gap-2 ${project.stats.length > 3 ? "grid-cols-3" : "grid-cols-3"}`}>
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-2 border border-[#D4AF37]/15 bg-[#0A0A0A]"
              >
                <span
                  className="text-[10px] font-semibold text-[#D4AF37] tracking-wider block"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {stat}
                </span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] text-[#888888] px-2 py-1 border border-[#D4AF37]/15 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Mobile links */}
          <div className="md:hidden flex items-center gap-4 pt-3 border-t border-[#D4AF37]/15">
            {project.links.live && (
              <a
                href={project.links.live}
                className="flex items-center gap-2 text-xs text-[#D4AF37] tracking-wider uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="flex items-center gap-2 text-xs text-[#888888] hover:text-[#D4AF37] tracking-wider uppercase transition-colors"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                <Github className="w-4 h-4" aria-hidden="true" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsClient() {
  return (
    <div id="projects" className="min-h-screen bg-[#0A0A0A] relative py-24 md:py-36 overflow-hidden" style={{ scrollMarginTop: "5rem" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-48 right-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Portfolio
          </p>
          <h1
            className="text-4xl md:text-6xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Featured Projects
          </h1>
          <p
            className="text-[#888888] text-base max-w-xl mx-auto tracking-wider"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            High-impact solutions built with modern technologies, focusing on performance and user experience.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
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
            className="deco-btn inline-flex items-center gap-3"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}

