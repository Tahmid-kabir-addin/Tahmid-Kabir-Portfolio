"use client";
import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, Trophy } from "lucide-react";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${education.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${education.gradient} flex items-center justify-center mb-6 shadow-lg`}>
          <GraduationCap className="w-8 h-8 text-white" />
        </div>

        {/* Degree */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {education.degree}
        </h3>

        {/* School */}
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">{education.school}</span>
        </div>

        {/* Year */}
        <div className="flex items-center gap-2 text-gray-500 mb-6">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{education.year}</span>
        </div>

        {/* CGPA/GPA */}
        {education.gpa && (
          <div className="flex items-center gap-2 mb-6">
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${education.gradient} bg-opacity-10 border border-blue-500/30`}>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-bold">{education.gpa}</span>
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          {education.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {education.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function EducationClient() {
  const educationData = [
    {
      degree: "B.Sc in Computer Science & Engineering",
      school: "Shahjalal University of Science and Technology",
      year: "February 2020 - June 2025",
      gpa: "CGPA: 3.95/4.00",
      gradient: "from-blue-500 to-cyan-500",
      description: "Advanced computer science education with emphasis on practical applications, research methodologies, and cutting-edge technologies.",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Computer Networking",
        "Operating Systems",
        "Web Technologies",
        "Problem Solving"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Notre Dame College, Dhaka",
      year: "2017 - 2019",
      gpa: "GPA: 5.00/5.00",
      gradient: "from-purple-500 to-pink-500",
      description: "Strong foundation in science subjects with perfect academic performance, focusing on Mathematics, Physics, and Chemistry.",
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Critical Thinking",
        "Analytical Skills"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Mohammadpur Govt. High School",
      year: "2013 - 2017",
      gpa: null,
      gradient: "from-green-500 to-emerald-500",
      description: "Fundamental education establishing strong academic foundation and study habits in core subjects.",
      skills: [
        "Mathematics",
        "General Science",
        "English",
        "Bangla",
        "Social Studies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
              Academic Journey
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}