"use client";

import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import IconCloudDemo from "../components/globe";
import { Cloud, Code2, Cpu, Database, Layout, Paintbrush } from "lucide-react";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import {
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FcWorkflow } from "react-icons/fc";
import { MdAnimation } from "react-icons/md";
import {
  SiFirebase,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Design Pattern",
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "C/C++", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00599C]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "SOLID Principles", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "DRY, KISS, LLD", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "text-purple-400",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Framer-Motion", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#000000]" /> },
        { name: "FastAPI", icon: <FaPython className="w-4 h-4 text-[#009688]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases & ORM",
      color: "text-orange-400",
      skills: [
        { name: "MySQL", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "SQLite", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#003B57]" /> },
        { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-[#2D3748]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#181717]" /> },
        { name: "GitLab", icon: <FaGitAlt className="w-4 h-4 text-[#FCA121]" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
      ],
    },
  ];

  return (
    <>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </>
  );
};

export default SkillsSection;
