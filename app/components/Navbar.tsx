"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-[#0A2540]/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        <h1 className="text-2xl font-poppins font-bold">Affix AI</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] px-4 py-2 rounded-lg font-medium text-sm">
          Get a Demo
        </button>
      </div>
    </motion.nav>
  );
}
