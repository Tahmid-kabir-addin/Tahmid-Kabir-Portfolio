"use client";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Calendar,
  GraduationCap,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { useState } from "react";

const TimelineCard = ({ education, index, isActive, onHover, onLeave }) => {
  const slideDirection = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: slideDirection }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.1,
          type: "spring",
          bounce: 0.6,
        }}
      >
        <div
          className={`w-20 h-20 bg-gradient-to-r ${education.gradient} rounded-full flex items-center justify-center border-4 border-gray-900 shadow-2xl relative`}
        >
          <span className="text-3xl">{education.icon}</span>

          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-current opacity-30 animate-ping" />
          <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ping delay-75" />
        </div>

        {/* Year badge */}
        <motion.div
          className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${education.gradient} rounded-full text-white text-sm font-bold shadow-lg whitespace-nowrap`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.4 }}
        >
          {education.yearRange}
        </motion.div>
      </motion.div>

      {/* Education Card */}
      <motion.div
        className={`relative max-w-sm cursor-pointer group ${
          isActive ? "z-20" : "z-10"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glowing background effect */}
        <div
          className={`absolute -inset-4 bg-gradient-to-r ${education.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
        />

        {/* Animated border */}
        <div
          className={`absolute -inset-[1px] bg-gradient-to-r ${education.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>

        {/* Main card content */}
        <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 shadow-xl">
          {/* Header */}
          <div className="text-center mb-4">
            <motion.h3
              className={`text-lg font-bold bg-gradient-to-r ${education.textGradient} bg-clip-text text-transparent mb-2`}
              layoutId={`title-${education.id}`}
            >
              {education.degree}
            </motion.h3>

            <p className="text-gray-300 flex items-center justify-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              {education.school}
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-2">
              <Calendar className="w-3 h-3" />
              {education.year}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">
            {education.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 justify-center">
            {education.skills.slice(0, 6).map((skill, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2 + i * 0.05 + 0.6,
                  duration: 0.3,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Achievements count */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 rounded-full text-yellow-400 text-xs">
              <Trophy className="w-3 h-3" />
              <span>{education.achievements.length} Achievements</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EducationSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      id: "ssc",
      degree: "Secondary School Certificate",
      school: "Mohammadpur Govt. High School",
      icon: "📖",
      year: "2013-2017",
      yearRange: "2017",
      level: "Foundation",
      gradient: "from-indigo-500 to-blue-500",
      textGradient: "from-indigo-400 to-blue-400",
      achievements: [
        { text: "Excellent Performance", icon: Trophy },
        { text: "Academic Merit", icon: Star },
        { text: "Science Focus", icon: Zap },
        { text: "Strong Foundation", icon: Target },
      ],
      skills: [
        "Mathematics",
        "General Science",
        "English",
        "Bangla",
        "Social Studies",
        "Basic Research",
      ],
      description:
        "Fundamental education establishing strong academic foundation and study habits.",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate",
      school: "Notre Dame College, Dhaka",
      icon: "📚",
      year: "2017-2019",
      yearRange: "2019",
      level: "Advanced",
      gradient: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-400 to-cyan-400",
      achievements: [
        { text: "GPA: 5.00/5.00", icon: Trophy },
        { text: "Perfect Score", icon: Target },
        { text: "Science Excellence", icon: Zap },
        { text: "Top Performer", icon: Star },
      ],
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Critical Thinking",
        "Analytical Skills",
      ],
      description:
        "Strong foundation in science subjects with perfect academic performance.",
    },
    {
      id: "university",
      degree: "B.Sc Computer Science & Engineering",
      school: "Shahjalal University of Science and Technology",
      icon: "🎓",
      year: "2020-2025",
      yearRange: "2020-25",
      level: "Summit",
      gradient: "from-cyan-500 to-teal-500",
      textGradient: "from-cyan-400 to-teal-400",
      achievements: [
        { text: "CGPA: 3.94/4.00", icon: Trophy },
        { text: "Academic Excellence", icon: Star },
        { text: "Research Projects", icon: Brain },
        { text: "Dean's List", icon: Award },
      ],
      skills: [
        "Problem Solving",
        "C/C++",
        "OOP",
        "Computer Networking",
        "DBMS",
        "Web Technologies",
        "Data Structures & Algorithms",
        "Operating Systems",
      ],
      description:
        "Advanced computer science education with emphasis on practical applications and research methodologies.",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-[#04081A]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Academic Journey
            </h1>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-teal-400/20 bg-clip-text text-transparent blur-xl" />
          </div>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            &quot;Excellence built step by step - from foundation to
            mastery&quot;
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500 opacity-30">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Education cards */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {educationData.map((education, index) => (
              <TimelineCard
                key={education.id}
                education={education}
                index={index}
                isActive={activeCard === education.id}
                onHover={() => setActiveCard(education.id)}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
