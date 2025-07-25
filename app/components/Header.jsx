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
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial active link based on current path
    const path = window.location.pathname.substring(1) || "home";
    setActiveLink(path);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 md:bg-transparent">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient-x">
          <nav className="glass md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link href="/" className="text-white font-bold">
                Portfolio
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    href={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 hover:scale-105
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white shadow-lg"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
