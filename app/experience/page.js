"use client";
import { motion } from "framer-motion";
import { Briefcase, Building, Code2, MapPin } from "lucide-react";

const TimelineItem = ({
  title,
  company,
  period,
  location,
  description,
  achievements,
  icon: Icon,
  index,
  isLeft,
}) => (
  <motion.div
    className={`relative flex ${
      isLeft ? "flex-row-reverse" : "flex-row"
    } items-center w-full mb-16`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.3 }}
    viewport={{ once: true }}
  >
    {/* Content Card */}
    <motion.div
      className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group">
        {/* Glass morphism background */}
        <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-2xl" />

        {/* Animated gradient border */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <div className="relative bg-gray-900/90 rounded-2xl p-6 border border-gray-800/50 shadow-xl">
          {/* Header */}
          <div
            className={`space-y-2 mb-4 ${isLeft ? "text-right" : "text-left"}`}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h3>

            <div
              className={`flex ${
                isLeft ? "justify-end" : "justify-start"
              } flex-wrap gap-2 text-sm text-gray-300`}
            >
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-blue-400">{company}</span>
              </div>

              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-gray-300 leading-relaxed mb-4 ${
              isLeft
                ? "border-r-4 border-blue-500/50 pr-4"
                : "border-l-4 border-blue-500/50 pl-4"
            }`}
          >
            {description}
          </p>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {achievements.slice(0, 3).map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className={`text-sm text-gray-400 flex ${
                      isLeft ? "justify-end" : "justify-start"
                    } items-start gap-2`}
                    initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {!isLeft && (
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    )}
                    <span className={isLeft ? "text-right" : "text-left"}>
                      {achievement}
                    </span>
                    {isLeft && (
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>

    {/* Timeline Center - Date and Icon */}
    <div className="w-2/12 flex flex-col items-center relative z-10">
      {/* Year Display */}
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-2xl mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
        whileHover={{ scale: 1.1 }}
      >
        {period.split(" - ")[0]}
      </motion.div>

      {/* Timeline Icon */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: index * 0.3 + 0.4 }}
      >
        {/* Glowing background */}
        <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 rounded-full blur-xl animate-pulse" />

        {/* Icon container */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-2xl">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-ping" />
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping delay-75" />
      </motion.div>

      {/* Period Display */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
      >
        <div className="bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
          <span className="text-xs text-gray-300 font-mono">{period}</span>
        </div>
      </motion.div>
    </div>

    {/* Empty Space for Alternating Layout */}
    <div className="w-5/12"></div>
  </motion.div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Junior Software Engineer",
      company: "79mplus",
      period: "May 2025 - Present",
      location: "Dhaka, Bangladesh",
      description:
        "Working as a Junior Software Engineer focusing on developing scalable web applications and implementing modern software solutions. Contributing to team projects and expanding technical expertise in a professional environment.",
      achievements: [
        "Developing scalable web applications using modern technologies",
        "Contributing to team projects and collaborative development",
        "Implementing best practices in software development",
        "Expanding expertise in full-stack development",
      ],
    },
    {
      icon: Code2,
      title: "Trainee Software Engineer",
      company: "InfancyIT",
      period: "2024 - April 2025",
      location: "Dhaka, Bangladesh",
      description:
        "Worked on web application performance optimization, developing mobile apps, and implementing payment gateway integrations. Collaborated with teams using Git for version control and followed agile methodologies.",
      achievements: [
        "Improved web application performance by 40% through code optimization",
        "Successfully developed and deployed mobile applications using React Native",
        "Integrated multiple payment gateways including Stripe and PayPal",
        "Collaborated effectively in team environments using Git version control",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Content container */}
      <div className="relative container mx-auto px-6 mt-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center space-y-8 mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Career Timeline
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            &ldquo;A chronological journey through my professional
            development&rdquo;
          </p>
        </motion.div>

        {/* Historical Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-ping" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default ExperienceSection;
