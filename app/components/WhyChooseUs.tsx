"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "🕒 24/7 Support Automation",
    desc: "Instantly respond to customers any time of day without human intervention.",
  },
  {
    title: "🔧 Customizable Workflows",
    desc: "Easily tailor AI bots and voice agents to suit your business process and tone.",
  },
  {
    title: "🔗 Easy Integrations",
    desc: "Connect seamlessly with WhatsApp, CRM, and websites in minutes.",
  },
  {
    title: "🔒 Scalable & Secure",
    desc: "Reliable and data-protected solutions that grow with your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-bold text-gray-900"
        >
          Why Businesses Choose Affix AI
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          We help businesses deliver smarter, faster, and more personalized
          customer experiences with our intelligent AI automation solutions.
        </motion.p>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600">{b.desc}</p>
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
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800 transition">
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
