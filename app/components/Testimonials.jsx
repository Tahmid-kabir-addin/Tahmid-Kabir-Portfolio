"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Testimonials = () => {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "Tech Solutions Inc.",
      content: "Tahmid's attention to detail and problem-solving skills are exceptional. He consistently delivers high-quality code and is always eager to learn new technologies.",
      rating: 5,
      avatar: "SJ",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager",
      company: "Digital Innovations",
      content: "Working with Tahmid has been a pleasure. His ability to understand complex requirements and translate them into efficient solutions is remarkable.",
      rating: 5,
      avatar: "MC",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Engineer",
      company: "StartupXYZ",
      content: "Tahmid brings fresh perspectives to every project. His knowledge of modern web technologies and best practices makes him a valuable team member.",
      rating: 5,
      avatar: "ER",
      gradient: "from-pink-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Testimonials from colleagues and collaborators who have worked with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass rounded-2xl p-6 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                  <span className="text-white font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Want to work together? Let's create something amazing!
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
