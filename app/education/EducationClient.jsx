"use client";
import { motion } from "framer-motion";

const romanNumerals = ["I", "II", "III"];

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="relative bg-[#141414] border border-[#D4AF37]/25 p-8 hover:border-[#D4AF37]/80 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] transition-all duration-500">
        {/* Corner decorations */}
        <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Roman numeral diamond */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <div
              className="absolute inset-0 rotate-45 border border-[#D4AF37]/50 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-500"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 flex items-center justify-center text-sm text-[#D4AF37]"
              style={{ fontFamily: "var(--font-marcellus)" }}
              aria-label={`Education entry ${romanNumerals[index]}`}
            >
              {romanNumerals[index] ?? index + 1}
            </span>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3
                  className="text-xl text-[#F2F0E4] group-hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-marcellus)" }}
                >
                  {education.degree}
                </h3>
                <p
                  className="text-[#888888] text-sm tracking-wider mt-1"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {education.school}
                </p>
              </div>
              {education.gpa && (
                <div className="flex items-center gap-2 border border-[#D4AF37]/40 px-3 py-1.5 flex-shrink-0">
                  <span
                    className="text-[#D4AF37] text-xs font-semibold tracking-wider"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {education.gpa}
                  </span>
                </div>
              )}
            </div>

            {/* Year */}
            <p
              className="text-[#888888]/60 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {education.year}
            </p>

            {/* Gold rule */}
            <div className="h-px w-10 bg-[#D4AF37] opacity-30" aria-hidden="true" />

            <p
              className="text-[#888888] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {education.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {education.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] text-[#888888] border border-[#D4AF37]/15 px-2 py-1 tracking-wider uppercase hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
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
      year: "February 2020 – June 2025",
      gpa: "CGPA: 3.95 / 4.00",
      description: "Advanced computer science education with emphasis on practical applications, research methodologies, and cutting-edge technologies.",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networking", "Operating Systems", "Web Technologies", "Problem Solving"],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Notre Dame College, Dhaka",
      year: "2017 – 2019",
      gpa: "GPA: 5.00 / 5.00",
      description: "Strong foundation in science subjects with perfect academic performance, focusing on Mathematics, Physics, and Chemistry.",
      skills: ["Mathematics", "Physics", "Chemistry", "Biology", "Critical Thinking", "Analytical Skills"],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Mohammadpur Govt. High School",
      year: "2013 – 2017",
      gpa: null,
      description: "Fundamental education establishing strong academic foundation and study habits in core subjects.",
      skills: ["Mathematics", "General Science", "English", "Bangla", "Social Studies"],
    },
  ];

  return (
    <div id="education" className="bg-[#0A0A0A] relative py-24 overflow-hidden" style={{ scrollMarginTop: "5rem" }}>
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
        className="absolute top-40 right-1/4 w-[500px] h-[500px] pointer-events-none"
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
            Academia
          </p>
          <h1
            className="text-4xl md:text-6xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Academic Journey
          </h1>
          <p
            className="text-[#888888] text-base max-w-xl mx-auto tracking-wider"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Building a strong foundation through continuous learning and academic excellence.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

