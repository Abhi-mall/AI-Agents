"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = scrolled ? "backdrop-blur-md bg-white/80 shadow-lg" : "bg-transparent";

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold font-poppins text-black">
          <span className="text-gray-700">Affix</span> AI
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-black">
          {["Home", "Solutions", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-600">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:flex items-center bg-black text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-gray-800">
          Get a Demo
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-black"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 py-6 bg-white/95 text-black font-medium"
        >
          {["Home", "Solutions", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-800"
          >
            Get a Demo
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
