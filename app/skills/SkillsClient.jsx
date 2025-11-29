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

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{ scale: 1.1, y: -5 }}
    className="group relative"
  >
    <div className="relative px-4 py-3 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="flex items-center gap-2">
        <span className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
          {skill.icon}
        </span>
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative"
  >
    {/* Glassmorphism card */}
    <div className="relative overflow-hidden rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-8 hover:border-blue-500/30 transition-all duration-500">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">
            {category.title}
          </h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function SkillsClient() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Design Patterns",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "JavaScript",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        {
          name: "C/C++",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "SOLID Principles",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "DRY, KISS, LLD",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "Remix.js",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-white" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Framer Motion",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux className="w-4 h-4 text-[#764ABC]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-white" />,
        },
        {
          name: "FastAPI",
          icon: <FaPython className="w-4 h-4 text-[#009688]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        {
          name: "Webhooks",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#4CAF50]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases & ORM",
      gradient: "from-orange-500 to-red-500",
      skills: [
        {
          name: "MySQL",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "SQLite",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#003B57]" />,
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="w-4 h-4 text-white" />,
        },
      ],
    },
    {
      icon: Lock,
      title: "Payment & Authentication",
      gradient: "from-yellow-500 to-amber-500",
      skills: [
        {
          name: "Stripe",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#635BFF]" />,
        },
        {
          name: "PayPal",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00457C]" />,
        },
        {
          name: "Afterpay",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#B2FCE4]" />,
        },
        {
          name: "SSLCommerz",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6B35]" />,
        },
        { name: "JWT", icon: <BsGrid1X2 className="w-4 h-4 text-white" /> },
        {
          name: "OAuth",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#4285F4]" />,
        },
        {
          name: "NextAuth.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "PCI Compliance",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#28A745]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Technologies",
      gradient: "from-pink-500 to-rose-500",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Google Analytics",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#E37400]" />,
        },
        {
          name: "Klaviyo",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6900]" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-24 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <section className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Technical Skills
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}