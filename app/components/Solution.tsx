"use client";
import { motion } from "framer-motion";

const solutions = [
  { title: "💬 AI Chatbots", desc: "Human-like chatbots that answer questions, book meetings, and convert visitors - 24/7." },
  { title: "🎙️ Voice Agents", desc: "Automated voice agents that answer calls, book appointments, and route customers natural-sounding and reliable." },
  { title: "⚙️ Custom AI", desc: "Custom models and automation that integrate into your systems: intent routing, document understanding, recommendation engines, and bespoke workflows." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-[#212121]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4"
        >
          Our Solutions
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Intelligent systems that automate and simplify communication.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#262626] p-8 border border-gray-700 shadow-sm hover:shadow-md"
              role="article"
              aria-label={s.title}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>

              {/* Optional CTA inside each card (uncomment if needed) */}
              {/* <div className="mt-6">
                <button className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 hover:bg-[#2a2a2a]">
                  Learn More
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
