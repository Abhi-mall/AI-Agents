"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Retail Company",
    result: "Boosted customer engagement by 65% using our AI Chatbot.",
  },
  {
    title: "Healthcare Provider",
    result: "Automated 80% of appointment bookings via AI Voice Agents.",
  },
  {
    title: "E-Commerce Brand",
    result: "Reduced support response time by 70% through smart automation.",
  },
  {
    title: "Education Platform",
    result: "Increased student interaction and query resolution efficiency by 60%.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F9FBFD]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-[#0A2540]"
        >
          Case Studies & Results
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Real success stories from businesses that embraced Affix AI for automation,
          customer experience, and operational excellence.
        </motion.p>

        {/* Case Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all text-left"
            >
              <h3 className="text-xl font-semibold text-[#0A2540] mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{c.result}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="bg-gradient-to-r from-[#4F9CF9] to-[#00C4B3] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
            See More Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
