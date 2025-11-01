"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#F9FBFD] to-white px-6 pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-poppins font-bold text-[#0A2540]"
      >
        Automate Conversations. <br /> Elevate Customer Experience.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 max-w-2xl text-gray-600"
      >
        Empower your business with AI-powered Chatbots, Voice Agents, and custom
        automation that drives engagement and saves time.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] text-white px-6 py-3 rounded-lg font-medium">
          Book a Free Consultation
        </button>
        <button className="border border-[#4F9CF9] text-[#0A2540] px-6 py-3 rounded-lg font-medium">
          Watch Demo
        </button>
      </div>
    </section>
  );
}
