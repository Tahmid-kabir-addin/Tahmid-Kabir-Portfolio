"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "VinylStatus",
    description:
      "JAMstack-based headless e-commerce platform with advanced UI/UX achieving 95+ Lighthouse scores and sub-2s load times. Features AI-assisted custom product design editor, secure multi-provider auth system, and GDPR-compliant workflows with 30% ROI increase.",
    src: "vinylstatus.png",
    link: "vinylstatus.png",
    color: "#ff6b6b",
    // githubLink: "#", // Private repository
    liveLink: "https://vinylstatus.com",
    featured: true,
    technologies: [
      "Next.js 15",
      "React 18",
      "Redux Toolkit",
      "TailwindCSS",
      "WooCommerce API",
      "Stripe",
      "PayPal",
      "Afterpay",
    ],
    achievements: [
      "95+ Lighthouse scores with sub-2s load times",
      "40% signup efficiency improvement with NextAuth.js",
      "99% payment success rate with secure PCI-compliant processing",
      "60% reduction in product mock design time with AI-assisted editor",
      "30% increase in ROI with GDPR-compliant marketing automation",
    ],
  },
  {
    title: "LinkedLogi",
    description:
      "Multi-role logistics platform for shippers, providers, and warehouse renters with RFQ workflows, inventory tracking, real-time messaging, and secure payments. Features modular REST APIs, MongoDB aggregation pipelines, and layered security achieving <2s FCP and 95+ Lighthouse scores.",
    src: "linkedlogi.png",
    link: "linkedlogi.png",
    color: "#10b981",
    // githubLink: "#", // Private repository
    liveLink: "https://linkedlogi.com",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
    achievements: [
      "20+ responsive pages with 30+ reusable components",
      "6ms API response times with 99.9% success rate",
      "95+ Lighthouse score with <2s FCP performance",
      "Secure multi-tenant backend with JWT authentication",
      "MongoDB aggregation pipelines for complex queries",
    ],
  },
  {
    title: "LWSkart",
    description:
      "E-commerce platform with 90+ Lighthouse score featuring custom animations, real-time filtering, and SEO-optimized pages. Includes real-time stock management, inventory reservation, JWT authentication, i18n support, and automated PDF invoice generation.",
    src: "lwskart.png",
    link: "lwskart.png",
    color: "#8b5cf6",
    githubLink: "https://github.com/Tahmid-kabir-addin/LWSkart",
    liveLink: "https://lwskart.com",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Framer-Motion",
      "Next-Auth",
      "MongoDB",
    ],
    achievements: [
      "90+ Lighthouse score with sub-second load times",
      "Real-time stock management with inventory reservation",
      "JWT authentication with secure session management",
      "Internationalization (i18n) support for multiple languages",
      "Automated PDF invoice generation system",
    ],
  },
  {
    title: "Pigeonnier",
    description:
      "Desktop email client application built with Java and JavaFX featuring multi-account access, rich-text email composition, attachment handling, and advanced message operations. Implements MVP design pattern with robust error handling and modern UI/UX.",
    src: "pigeonnier.jpg",
    link: "pigeonnier.png",
    color: "#3b82f6",
    githubLink: "https://github.com/TahmidKabir-2019331016/Pigeonnier.git",
    // liveLink: "#",
    technologies: ["Java", "JavaFX", "SMTP/IMAP", "MVP Pattern"],
    achievements: [
      "Multi-account email management with secure authentication",
      "Rich-text email composition with attachment support",
      "Advanced message operations (search, filter, organize)",
      "MVP design pattern implementation for maintainable code",
      "Robust error handling and user-friendly interface",
    ],
  },
];

export default function Projects1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-contain bg-black/20"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                {projects[i].featured && (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 max-w-md">
                {description}
              </p>

              {/* Technologies */}
              {projects[i].technologies && (
                <div className="mb-4">
                  <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {projects[i].technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {projects[i].technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{projects[i].technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Key Achievement */}
              {projects[i].achievements &&
                projects[i].achievements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <p className="text-xs text-green-400 leading-relaxed">
                        {projects[i].achievements[0]}
                      </p>
                    </div>
                  </div>
                )}
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={projects[i].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={projects[i].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {i < projects.length - 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            Scroll down
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
      )}
    </div>
  );
}
