"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 leading-tight">
          Ready to Bring <span className="text-white/90">AI Power</span> to Your Business?
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Let’s automate your conversations, enhance customer experience, and scale your success with smart AI solutions.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-[#0A2540] px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition"
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </section>
  );
}
