"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = scrolled
    ? "backdrop-blur-md bg-[#212121]/80 shadow-lg"
    : "bg-transparent";

  const navItems = ["Home", "Solutions", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="inline-flex items-center gap-2">
          <Image src="/FOXAI LOGO.png" alt="FoxAI Logo" width={100} height={100} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#demo"
            className="items-center bg-white text-black px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-gray-100 transition"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.18 }}
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center gap-4 py-6 bg-[#1f1f1f] text-white font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
            role="button"
          >
            Get a Demo
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
