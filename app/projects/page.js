"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "VinylStatus",
    description:
      "PROBLEM: Traditional e-commerce sites were too slow for the client's design-heavy catalog. SOLUTION: Built a Headless architecture using Next.js 15 and WooCommerce. IMPACT: Achieved 95+ Lighthouse scores, sub-2s load times, and a 30% increase in ROI through better UX and SEO.",
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
      "PROBLEM: Logistics providers needed a centralized platform to manage complex RFQ workflows and inventory. SOLUTION: Developed a multi-tenant SaaS platform with real-time messaging and secure payments. IMPACT: Reduced API response times to 6ms and enabled seamless management for 3 distinct user roles.",
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
      "PROBLEM: Users experienced frustration with slow stock updates and checkout processes. SOLUTION: Implemented real-time stock management and optimistic UI updates. IMPACT: Delivered a sub-second load time experience with instant feedback loops for inventory reservation.",
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
      "PROBLEM: Existing email clients were bloated and slow for basic tasks. SOLUTION: Engineered a lightweight desktop client using JavaFX and MVP pattern. IMPACT: Provided a robust, multi-account email management tool with rich-text composition and attachment support.",
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
        <div className="w-full flex flex-col md:flex-row bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[450px] lg:h-[500px] relative overflow-hidden group/image">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 opacity-60" />
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover/image:scale-105"
              initial={{ scale: 1 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0 z-20 mix-blend-overlay opacity-0 group-hover/image:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: color }}
            />

            {/* Project number */}
            <div className="absolute top-6 left-6 z-30 bg-black/40 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider">
              0{i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-between relative">
            {/* Background gradient blob */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
              style={{ backgroundColor: color }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                />
                <div className="h-[1px] w-12 bg-white/20" />
                {projects[i].featured && (
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-500/20">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 max-w-md">
                {description}
              </p>

              {/* Technologies */}
              {projects[i].technologies && (
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {projects[i].technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {projects[i].technologies.length > 5 && (
                      <span className="px-3 py-1.5 text-gray-500 text-xs border border-transparent">
                        +{projects[i].technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Key Achievement - Highlighted */}
              {projects[i].achievements &&
                projects[i].achievements.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border-l-2 border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-full bg-green-500/20 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <div>
                        <span className="text-xs text-green-400 font-semibold uppercase tracking-wider block mb-1">Key Impact</span>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {projects[i].achievements[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <div className="relative z-10 mt-4 md:mt-auto pt-6 border-t border-white/10">
              <div className="flex items-center gap-6">
                {/* GitHub Link */}
                <motion.a
                  href={projects[i].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-sm font-medium">View Code</span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={projects[i].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform"
                  whileHover={{ y: -1 }}
                >
                  <span>Visit Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
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
