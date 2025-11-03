"use client";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "🗨️ AI Chatbots",
    desc: "Smart, human-like chatbots that handle queries 24/7 on your website and social platforms.",
  },
  {
    title: "🎙️ AI Voice Agents",
    desc: "Natural voice assistants that schedule meetings, handle bookings, and support your customers via calls.",
  },
  {
    title: "⚙️ Custom AI Solutions",
    desc: "Tailored automation for your business operations — built to optimize workflows and boost ROI.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren", duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 110, damping: 16 } },
  hover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-[#0A2540] mb-4"
        >
          Our Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-600 mb-12"
        >
          We build intelligent systems that automate communication, improve customer experience,
          and enhance business efficiency.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="rounded-2xl bg-[#F9FBFD] p-8 shadow-sm border border-gray-200 transition-shadow"
              // we set a neutral border by default; framer will apply inline styles for hover if needed
              style={{ willChange: "transform, box-shadow, border-color" }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{s.desc}</p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-gray-200 hover:border-gray-300 transition-all"
                    aria-label={`Get started with ${s.title}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </a>

                  <button
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label={`Learn more about ${s.title}`}
                    onClick={() => {
                      const el = document.getElementById("contact");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
