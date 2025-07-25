"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Target, Code, Users, Zap, BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Achievements = () => {
  const sectionRef = useScrollReveal();

  const achievements = [
    {
      id: 1,
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintaining high GPA while pursuing B.Sc in Computer Science and Engineering at SUST",
      metric: "3.8+ GPA",
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      icon: Code,
      title: "Project Portfolio",
      description: "Successfully completed multiple full-stack projects using modern technologies",
      metric: "10+ Projects",
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: Zap,
      title: "Problem Solving",
      description: "Solved complex algorithmic challenges and optimized application performance",
      metric: "100+ Problems",
      color: "text-purple-400",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Team Collaboration",
      description: "Worked effectively in team environments and contributed to collaborative projects",
      metric: "5+ Teams",
      color: "text-green-400",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Database Design", level: 75 },
    { name: "System Architecture", level: 70 },
    { name: "DevOps/AWS", level: 65 }
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={sectionRef}
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary">
              Achievements
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my growth and dedication
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                className="glass rounded-2xl p-6 text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Metric */}
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* Skills Progress Section */}
        <motion.div
          className="glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-2">
              Technical Proficiency
            </h3>
            <p className="text-gray-400">
              Current skill levels based on project experience and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always looking for opportunities to grow, learn, and contribute to meaningful projects. 
              Let's discuss how we can work together!
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
