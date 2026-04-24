"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HEADER_HEIGHT = 80;
    const sectionIds = ["home", "about", "skills", "experience", "education", "projects", "contact"];

    // Set initial active from URL hash or scroll position
    const getActiveSection = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + 10;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      return current;
    };

    const hash = window.location.hash.replace("#", "");
    setActiveLink(hash || getActiveSection());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const active = getActiveSection();
      setActiveLink(active);
      const newHash = active === "home" ? "" : `#${active}`;
      history.replaceState(null, "", `/${newHash}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home",       icon: FaHome,         text: "Home",       path: "/" },
    { id: "about",      icon: FaHome,         text: "About",      path: "/#about" },
    { id: "skills",     icon: FaCode,         text: "Skills",     path: "/#skills" },
    { id: "experience", icon: FaBriefcase,    text: "Experience", path: "/#experience" },
    { id: "education",  icon: FaGraduationCap,text: "Education",  path: "/#education" },
    { id: "projects",   icon: FaLaptopCode,   text: "Projects",   path: "/#projects" },
    { id: "contact",    icon: FaEnvelope,     text: "Contact",    path: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(212,175,55,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Top gold accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Brand mark */}
            <Link
              href="/"
              onClick={() => setActiveLink("home")}
              className="group relative flex items-center gap-3"
              aria-label="Home"
            >
              {/* Diamond emblem */}
              <span
                className="w-5 h-5 rotate-45 border border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-300 flex-shrink-0"
                aria-hidden="true"
              />
              <span
                style={{ fontFamily: "var(--font-marcellus)" }}
                className="text-[#D4AF37] tracking-[0.18em] text-sm uppercase hidden sm:block"
              >
                Tahmid Kabir
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(({ id, text, path }) => (
                <Link
                  key={id}
                  href={path}
                  onClick={() => setActiveLink(id)}
                  className={`relative px-4 py-2 text-xs tracking-[0.18em] uppercase font-semibold transition-colors duration-300 group ${
                    activeLink === id
                      ? "text-[#D4AF37]"
                      : "text-[#888888] hover:text-[#F2F0E4]"
                  }`}
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {text}
                  {/* Gold underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#D4AF37] transition-all duration-300 ${
                      activeLink === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-[#D4AF37]/40 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </div>

        {/* Bottom gold accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-20" />
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-sm transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Decorative crosshatch bg */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,175,55,0.05) 0px, rgba(212,175,55,0.05) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.05) 0px, rgba(212,175,55,0.05) 1px, transparent 1px, transparent 12px)",
          }}
          aria-hidden="true"
        />

        <nav className="relative z-10 flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {/* Decorative top rule */}
          <div className="flex items-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-60" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-60" />
          </div>

          {navLinks.map(({ id, icon: Icon, text, path }) => (
            <Link
              key={id}
              href={path}
              onClick={() => {
                setActiveLink(id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center gap-3 text-base tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
                activeLink === id ? "text-[#D4AF37]" : "text-[#888888] hover:text-[#F2F0E4]"
              }`}
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              <Icon className="text-sm" aria-hidden="true" />
              {text}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-4" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-60" />
            <div className="w-2 h-2 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-60" />
          </div>
        </nav>
      </div>
    </>
  );
}
