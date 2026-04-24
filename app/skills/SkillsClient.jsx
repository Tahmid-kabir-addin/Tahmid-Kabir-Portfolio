"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Layout, Lock } from "lucide-react";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import {
    FaAws,
    FaDocker,
    FaGitAlt,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import {
    SiGraphql,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ delay: index * 0.04, duration: 0.3 }}
    className="group"
  >
    <div className="flex items-center gap-2 px-3 py-2 border border-[#D4AF37]/20 bg-[#141414] hover:border-[#D4AF37] hover:shadow-[0_0_10px_rgba(212,175,55,0.15)] transition-all duration-300">
      <span className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {skill.icon}
      </span>
      <span
        className="text-xs text-[#888888] group-hover:text-[#F2F0E4] transition-colors duration-300 tracking-wider uppercase"
        style={{ fontFamily: "var(--font-josefin)" }}
      >
        {skill.name}
      </span>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group relative flex flex-col"
  >
    {/* Art Deco card */}
    <div className="relative flex flex-col flex-1 bg-[#141414] border border-[#D4AF37]/25 p-8 hover:border-[#D4AF37]/80 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] transition-all duration-500">
      {/* Corner decorations */}
      <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />

      {/* Category header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Roman numeral in rotated diamond */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <div
            className="absolute inset-0 rotate-45 border border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-300"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-[10px] text-[#D4AF37]"
            style={{ fontFamily: "var(--font-marcellus)" }}
            aria-label={`Category ${romanNumerals[index]}`}
          >
            {romanNumerals[index]}
          </span>
        </div>
        <h3
          className="text-sm text-[#F2F0E4] tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-marcellus)" }}
        >
          {category.title}
        </h3>
      </div>

      {/* Gold rule */}
      <div className="h-px w-12 bg-[#D4AF37] opacity-30 mb-6" aria-hidden="true" />

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <SkillBadge key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default function SkillsClient() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Design Patterns",
      skills: [
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
        { name: "Java",       icon: <FaJava className="w-3.5 h-3.5 text-[#007396]" /> },
        { name: "C/C++",      icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#00599C]" /> },
        { name: "Python",     icon: <FaPython className="w-3.5 h-3.5 text-[#3776AB]" /> },
        { name: "SOLID",      icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#D4AF37]" /> },
        { name: "DRY · KISS", icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#9CA3AF]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        { name: "React.js",      icon: <FaReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
        { name: "Next.js",       icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" /> },
        { name: "Remix.js",      icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-white" /> },
        { name: "TailwindCSS",   icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#38B2AC]" /> },
        { name: "Framer Motion", icon: <MdAnimation className="w-3.5 h-3.5 text-[#FF4081]" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="w-3.5 h-3.5 text-[#764ABC]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js",    icon: <FaNodeJs className="w-3.5 h-3.5 text-[#339933]" /> },
        { name: "Express.js", icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-white" /> },
        { name: "FastAPI",    icon: <FaPython className="w-3.5 h-3.5 text-[#009688]" /> },
        { name: "REST APIs",  icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#FF6C37]" /> },
        { name: "GraphQL",    icon: <SiGraphql className="w-3.5 h-3.5 text-[#E10098]" /> },
        { name: "Webhooks",   icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#4CAF50]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases & ORM",
      skills: [
        { name: "MySQL",      icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5 text-[#336791]" /> },
        { name: "MongoDB",    icon: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" /> },
        { name: "SQLite",     icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#003B57]" /> },
        { name: "Prisma",     icon: <SiPrisma className="w-3.5 h-3.5 text-white" /> },
      ],
    },
    {
      icon: Lock,
      title: "Payment & Authentication",
      skills: [
        { name: "Stripe",       icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#635BFF]" /> },
        { name: "PayPal",       icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#00457C]" /> },
        { name: "Afterpay",     icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#B2FCE4]" /> },
        { name: "SSLCommerz",   icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#FF6B35]" /> },
        { name: "JWT",          icon: <BsGrid1X2 className="w-3.5 h-3.5 text-white" /> },
        { name: "OAuth",        icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#4285F4]" /> },
        { name: "NextAuth.js",  icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" /> },
        { name: "PCI Compliance",icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#28A745]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub",        icon: <FaGitAlt className="w-3.5 h-3.5 text-[#F05032]" /> },
        { name: "AWS",                 icon: <FaAws className="w-3.5 h-3.5 text-[#FF9900]" /> },
        { name: "Vercel",              icon: <SiVercel className="w-3.5 h-3.5 text-white" /> },
        { name: "Docker",              icon: <FaDocker className="w-3.5 h-3.5 text-[#2496ED]" /> },
        { name: "Google Analytics",    icon: <BsGrid1X2 className="w-3.5 h-3.5 text-[#E37400]" /> },
        { name: "Klaviyo",             icon: <BsFileEarmarkCode className="w-3.5 h-3.5 text-[#FF6900]" /> },
      ],
    },
  ];

  return (
    <div id="skills" className="bg-[#0A0A0A] relative overflow-hidden pt-24 pb-24" style={{ scrollMarginTop: "5rem" }}>
      {/* Crosshatch background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      {/* Sunburst glow */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <section className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>

          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Arsenal
          </p>
          <h1
            className="text-4xl md:text-6xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Technical Skills
          </h1>
          <p
            className="text-[#888888] text-base max-w-xl mx-auto tracking-wider"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>

          {/* Ornamental bottom */}
          <div className="flex items-center justify-center gap-4 pt-2" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" style={{ gridAutoRows: '1fr' }}>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

