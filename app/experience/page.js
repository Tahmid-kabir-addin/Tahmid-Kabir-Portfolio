"use client";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, ChevronDown, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hasScrolled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-50 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line & Dot (Mobile) */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </div>

      <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Date & Location (Desktop) */}
        <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
          <div className="sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-2">{experience.period}</h3>
            <div className={`flex items-center gap-2 text-gray-400 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Center Dot (Desktop) */}
        <div className="hidden md:flex w-2/12 justify-center relative">
          <div className="w-px h-full bg-gray-800 absolute top-0 bottom-0">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <motion.div 
            className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 sticky top-24"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>

        {/* Content Card */}
        <div className="w-full md:w-5/12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
              {/* Mobile Date Header */}
              <div className="md:hidden mb-4">
                <span className="text-blue-400 font-bold">{experience.period}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {experience.title}
              </h2>
              <h3 className="text-lg text-gray-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {experience.description}
              </p>

              <div className="space-y-3">
                {experience.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "79mplus",
      period: "May 2025 - Present",
      location: "Dhaka, Bangladesh | HQ: Australia",
      description: "Driving the development of enterprise e-commerce solutions with a focus on scalability and performance.",
      achievements: [
        "Architected a headless Next.js solution handling 10k+ daily active users",
        "Reduced deployment times by 40% through optimized CI/CD pipelines",
        "Implemented PCI-DSS compliant payment gateways (Stripe, PayPal)",
        "Led code reviews and established coding standards reducing bugs by 30%"
      ]
    },
    {
      title: "Trainee Software Engineer",
      company: "InfancyIT",
      period: "Jan 2024 - Apr 2025",
      location: "Sylhet, Bangladesh",
      description: "Specialized in backend scalability and performance engineering for legacy systems.",
      achievements: [
        "Boosted application speed by 60% through critical performance overhauls",
        "Built robust Shopify admin apps using Remix.js and GraphQL",
        "Automated complex inventory workflows reducing manual effort by 50%",
        "Collaborated with international teams in an Agile environment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative py-20 md:py-32 overflow-hidden">
      <ScrollIndicator />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Professional Journey
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and solving complex problems across the stack.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-32">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
