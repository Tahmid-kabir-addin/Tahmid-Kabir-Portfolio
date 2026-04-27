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
    { name: "GitHub", href: "https://github.com/Tahmid-kabir-addin", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/tahmid-kabir-44b4671b1/", icon: FaLinkedin },
    { name: "Email", href: "mailto:tahmidkabiraddin@gmail.com", icon: FaEnvelope },
    { name: "LeetCode", href: "https://leetcode.com/u/tahmidkabiraddin/", icon: SiLeetcode },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Crosshatch pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />

      {/* Top ornamental divider */}
      <div className="relative flex items-center gap-0" aria-hidden="true">
        <div className="flex-1 h-px bg-[#D4AF37] opacity-30" />
        <div className="flex items-center gap-3 px-6 py-3">
          <div className="h-px w-12 bg-[#D4AF37] opacity-60" />
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
          <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
          <div className="h-px w-12 bg-[#D4AF37] opacity-60" />
        </div>
        <div className="flex-1 h-px bg-[#D4AF37] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            {/* Diamond monogram */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rotate-45 border-2 border-[#D4AF37] flex items-center justify-center">
                <span className="-rotate-45 text-[#D4AF37] text-[10px] font-bold tracking-widest" aria-hidden="true">TK</span>
              </div>
              <h3
                className="text-[#D4AF37] tracking-[0.2em] text-base uppercase"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Tahmid Kabir
              </h3>
            </div>
            <p
              className="text-[#888888] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Full-Stack Software Engineer crafting high-impact, scalable solutions.
              Specialized in Next.js, React, and performance engineering.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 flex items-center justify-center border border-[#D4AF37]/30 text-[#888888] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4
              className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-marcellus)" }}
            >
              Navigation
            </h4>
            {/* Gold rule */}
            <div className="h-px w-10 bg-[#D4AF37] opacity-50" aria-hidden="true" />
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#D4AF37] text-xs tracking-[0.12em] uppercase transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    <span
                      className="w-1 h-1 rotate-45 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4
              className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-marcellus)" }}
            >
              Correspondence
            </h4>
            <div className="h-px w-10 bg-[#D4AF37] opacity-50" aria-hidden="true" />
            <div className="space-y-3">
              <a
                href="mailto:tahmidkabiraddin@gmail.com"
                className="block text-[#888888] hover:text-[#D4AF37] text-xs tracking-wider transition-colors duration-300"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                tahmidkabiraddin@gmail.com
              </a>
              <p
                className="text-[#888888] text-xs tracking-wider"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Dhaka, Bangladesh
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="deco-btn text-xs"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8">
          {/* Ornamental rule */}
          <div className="flex items-center gap-4 mb-6" aria-hidden="true">
            <div className="flex-1 h-px bg-[#D4AF37] opacity-20" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] opacity-50" />
            <div className="flex-1 h-px bg-[#D4AF37] opacity-20" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p
              className="text-[#888888] text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              © {currentYear} Tahmid Kabir — All Rights Reserved
            </p>
            <p
              className="text-[#888888]/50 text-xs tracking-wider"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Crafted with Next.js &amp; TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
