"use client";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#E3F2FD] via-white to-[#F0FFF9] overflow-hidden px-6 pt-24"
    >
      {/* Background gradient animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,156,249,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,196,179,0.25),transparent_60%)]"
      ></motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-6xl font-poppins font-extrabold text-[#0A2540] leading-tight"
      >
        Automate Conversations. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3]">
          Elevate Customer Experience.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mt-6 max-w-2xl text-gray-600 text-lg"
      >
        Empower your business with next-generation AI chatbots, voice agents,
        and intelligent automation that engages customers and scales support
        effortlessly.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10"
      >
        {/* Primary Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] hover:from-[#5FAAFB] hover:to-[#00D7C0] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-200"
        >
          Book a Free Consultation
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Secondary Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="border border-[#4F9CF9] text-[#0A2540] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#EAF5FF] transition-all duration-200"
        >
          <PlayCircle className="w-5 h-5 text-[#4F9CF9]" />
          Watch Demo
        </motion.button>
      </motion.div>

      {/* Decorative Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] blur-[180px] rounded-full"
      ></motion.div>
    </section>
  );
}
