"use client";
import { motion } from "framer-motion";

const solutions = [
  { title: "💬 AI Chatbots", desc: "Human-like chatbots available 24/7." },
  { title: "🎙️ Voice Agents", desc: "Automated call-based customer support." },
  { title: "⚙️ Custom AI", desc: "Tailored automation for your workflow." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-black mb-4"
        >
          Our Solutions
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Intelligent systems that automate and simplify communication.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-gray-50 p-8 border border-gray-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-black mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
