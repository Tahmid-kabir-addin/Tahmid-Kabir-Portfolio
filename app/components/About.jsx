"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TahmidImage from "../assets/images/Tahmid.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Code, Database, Globe, Zap } from "lucide-react";

export default function About() {
  const aboutRef = useScrollReveal();
  const imageRef = useScrollReveal({ threshold: 0.3 });
  const contentRef = useScrollReveal({ threshold: 0.2 });

  const skills = [
    { icon: Code, label: "Clean Code", color: "text-blue-400" },
    { icon: Database, label: "Database Design", color: "text-green-400" },
    { icon: Globe, label: "Full-Stack", color: "text-purple-400" },
    { icon: Zap, label: "Performance", color: "text-yellow-400" },
  ];

  return (
    <>
      <section id="about" className="py-16 md:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          ref={aboutRef}
          className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="relative z-10 max-w-xl text-4xl font-bold lg:text-6xl gradient-text-primary"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Software Engineer & Problem Solver
          </motion.h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Enhanced Image Section */}
            <motion.div
              ref={imageRef}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl glass p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
                <Image
                  src={TahmidImage}
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Tahmid Kabir"
                  width={1207}
                  height={929}
                  priority
                />
                {/* Floating skill badges */}
                <div className="absolute -top-4 -right-4 space-y-2">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.label}
                        className={`glass rounded-lg p-2 ${skill.color}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div
              ref={contentRef}
              className="relative space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Hello! I'm Tahmid Kabir, a detail-oriented Software Engineer
                with a strong foundation in object-oriented programming and
                RESTful API development.{" "}
                <span className="gradient-text-secondary font-semibold">
                  Currently pursuing my B.Sc in Computer Science and Engineering
                  at SUST
                </span>
                , I'm passionate about creating efficient and scalable
                solutions.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                My focus is on full-stack development, with expertise in the
                MERN stack and various programming languages. I combine
                problem-solving skills with quick learning ability to tackle
                complex technical challenges and deliver high-quality software
                solutions.
              </motion.p>

              {/* Enhanced Quote Section */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-xl p-6 border-l-4 border-blue-500">
                  <blockquote className="space-y-4">
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "I believe in writing clean, maintainable code and following
                      design principles. My experience includes working with modern
                      technologies like React, Node.js, and various databases. I'm
                      always eager to learn new technologies and contribute to
                      innovative projects."
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">TK</span>
                      </div>
                      <div>
                        <cite className="block font-semibold text-white text-lg">
                          Tahmid Kabir
                        </cite>
                        <span className="gradient-text-primary font-medium">
                          Software Engineer
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      className="glass rounded-lg p-4 text-center group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.label}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
