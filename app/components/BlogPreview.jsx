"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import EnhancedButton from "./ui/enhanced-button";

const BlogPreview = () => {
  const sectionRef = useScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Explore advanced patterns and best practices for creating maintainable React applications that can grow with your team and requirements.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      id: 2,
      title: "Optimizing Database Performance in Node.js Applications",
      excerpt: "Learn practical techniques for improving database query performance, connection pooling, and caching strategies in Node.js applications.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Backend",
      gradient: "from-green-500 to-teal-500",
      tags: ["Node.js", "Database", "Performance"]
    },
    {
      id: 3,
      title: "Implementing Clean Code Principles in JavaScript",
      excerpt: "A comprehensive guide to writing clean, readable, and maintainable JavaScript code following industry best practices and SOLID principles.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "JavaScript",
      gradient: "from-purple-500 to-pink-500",
      tags: ["JavaScript", "Clean Code", "SOLID"]
    }
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary">
              Technical Blog
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices from my development journey
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-medium mb-4`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Blog Coming Soon!
            </h3>
            <p className="text-gray-400 mb-6">
              I'm currently working on launching my technical blog where I'll share in-depth tutorials, 
              best practices, and insights from my development experience. Stay tuned for regular updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Get Notified
              </EnhancedButton>
              <EnhancedButton
                variant="outline"
                onClick={() => window.open('https://github.com/Tahmid-kabir-addin', '_blank')}
              >
                Follow on GitHub
              </EnhancedButton>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogPreview;
