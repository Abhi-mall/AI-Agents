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

  // Choose classes that change based on scroll state
  const navBgClass = scrolled ? "backdrop-blur-md bg-white/80 shadow-lg" : "bg-transparent";
  const linkColorClass = "text-[#0A2540]"; // use dark text both before and after scroll for visibility
  const subtleShadow = "drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]";

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <h1 className={`text-2xl font-extrabold font-poppins ${linkColorClass} ${subtleShadow}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3]">
            Affix
          </span>{" "}
          AI
        </h1>

        {/* Desktop Nav */}
        <div className={`hidden md:flex gap-8 text-sm font-medium ${linkColorClass}`}>
          <a href="#home" className="hover:text-[#4F9CF9] transition-colors">
            Home
          </a>
          <a href="#solutions" className="hover:text-[#4F9CF9] transition-colors">
            Solutions
          </a>
          <a href="#about" className="hover:text-[#4F9CF9] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#4F9CF9] transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <button
          className="hidden md:flex items-center bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] hover:from-[#5FAAFB] hover:to-[#00D7C0] text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform hover:scale-105"
          aria-label="Get a Demo"
        >
          Get a Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${linkColorClass}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 py-6 bg-gradient-to-b from-white/95 to-[#F0FFF9]/95 backdrop-blur-md text-[#0A2540] font-medium"
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#4F9CF9]">
            Home
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)} className="hover:text-[#4F9CF9]">
            Solutions
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#4F9CF9]">
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#4F9CF9]">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] text-white px-6 py-2 rounded-lg font-semibold shadow-md"
          >
            Get a Demo
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
