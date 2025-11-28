"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Tahmid-kabir-addin",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tahmid-kabir-addin/",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:tahmidkabiraddin@gmail.com",
      icon: FaEnvelope,
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/tahmidkabiraddin/",
      icon: SiLeetcode,
    },
  ];

  return (
    <footer className="relative bg-[#04081A] border-t border-gray-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Tahmid Kabir
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building high-impact & scalable solutions. Specialized in Next.js,
              React, and performance optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tahmid Kabir. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with Next.js, React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
