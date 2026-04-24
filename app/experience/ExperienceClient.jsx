"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const romanNumerals = ["I", "II", "III", "IV"];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Mobile timeline line */}
      <div
        className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-[#D4AF37]/30"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      </div>

      <div className={`md:flex items-start justify-between gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Date & Location (desktop) */}
        <div className={`hidden md:flex w-5/12 items-center ${isEven ? "justify-end" : "justify-start"}`}>
          <div className={isEven ? "text-right" : "text-left"}>
            <div
              className="text-xl text-[#D4AF37] mb-2 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-marcellus)" }}
            >
              {experience.period}
            </div>
            <div
              className={`flex items-center gap-2 text-[#888888] text-xs tracking-wider uppercase ${isEven ? "justify-end" : "justify-start"}`}
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Center line + diamond dot (desktop) */}
        <div className="hidden md:flex w-2/12 justify-center relative" aria-hidden="true">
          <div className="w-px h-full bg-[#D4AF37]/20 absolute top-0 bottom-0">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#D4AF37]/50 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <div className="w-4 h-4 rotate-45 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] z-10 sticky top-24 flex-shrink-0" />
        </div>

        {/* Content card */}
        <div className="w-full md:w-5/12">
          <div className="group relative bg-[#141414] border border-[#D4AF37]/25 p-6 md:p-8 hover:border-[#D4AF37]/80 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] transition-all duration-500">
            {/* Corner decorations */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />

            {/* Roman numeral */}
            <div
              className="text-[#D4AF37]/30 text-xs tracking-[0.3em] mb-3"
              style={{ fontFamily: "var(--font-marcellus)" }}
              aria-hidden="true"
            >
              {romanNumerals[index] ?? index + 1}
            </div>

            {/* Mobile date */}
            <div
              className="md:hidden text-[#D4AF37] text-sm tracking-wider uppercase mb-3"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {experience.period}
            </div>

            <h2
              className="text-xl text-[#F2F0E4] group-hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wider mb-1"
              style={{ fontFamily: "var(--font-marcellus)" }}
            >
              {experience.title}
            </h2>
            <p
              className="text-[#888888] text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {experience.company}
            </p>

            {/* Gold rule */}
            <div className="h-px w-10 bg-[#D4AF37] opacity-40 mb-5" aria-hidden="true" />

            <p
              className="text-[#888888] text-sm leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {experience.description}
            </p>

            <div className="space-y-2.5">
              {experience.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] flex-shrink-0 mt-1.5"
                    aria-hidden="true"
                  />
                  <span
                    className="text-[#888888] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceClient() {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "79mplus",
      period: "May 2025 – Present",
      location: "Dhaka, Bangladesh · HQ: Australia",
      description: "Driving the development of enterprise e-commerce solutions with a focus on scalability and performance.",
      achievements: [
        "Architected a headless Next.js solution handling 10k+ daily active users",
        "Reduced deployment times by 40% through optimized CI/CD pipelines",
        "Implemented PCI-DSS compliant payment gateways (Stripe, PayPal)",
        "Led code reviews and established coding standards reducing bugs by 30%",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company: "InfancyIT",
      period: "Jan 2024 – Apr 2025",
      location: "Sylhet, Bangladesh",
      description: "Specialized in backend scalability and performance engineering for legacy systems.",
      achievements: [
        "Boosted application speed by 60% through critical performance overhauls",
        "Built robust Shopify admin apps using Remix.js and GraphQL",
        "Automated complex inventory workflows reducing manual effort by 50%",
        "Collaborated with international teams in an Agile environment",
      ],
    },
  ];

  return (
    <div id="experience" className="bg-[#0A0A0A] relative py-24 overflow-hidden" style={{ scrollMarginTop: "5rem" }}>
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
        className="absolute top-40 left-1/4 w-[500px] h-[500px] pointer-events-none"
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
            Career
          </p>
          <h1
            className="text-4xl md:text-6xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Professional Journey
          </h1>
          <p
            className="text-[#888888] text-base max-w-xl mx-auto tracking-wider"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Building scalable solutions and solving complex problems across the stack.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}


