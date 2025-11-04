"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Retail",
    result: "65% boost in engagement.",
    desc: "Contextual chat and CTA-driven flows that capture intent and convert browsers into buyers across web & WhatsApp.",
    highlights: [
      "Product lookups + quick checkout help",
      "CRM sync for personalized follow-ups",
      "Handles promo spikes without extra headcount",
    ],
  },
  {
    title: "Healthcare",
    result: "80% appointments automated.",
    desc: "Voice + chat automation that books, reschedules, and reminds patients — with safe human handoff for clinical queries.",
    highlights: [
      "Two-way SMS/voice confirmations",
      "Integration with scheduling systems",
      "Reduced admin hours and fewer no-shows",
    ],
  },
  {
    title: "E-Commerce",
    result: "70% faster response times.",
    desc: "Omnichannel order-status automation that answers tracking, returns and refund questions instantly, and creates tickets for exceptions.",
    highlights: [
      "Order backend integration",
      "Smart routing to agents for complex cases",
      "Prebuilt quick-reply templates for peak events",
    ],
  },
  {
    title: "Education",
    result: "60% better interaction.",
    desc: "Knowledge-driven assistant for admissions, course queries and scheduling that improves student engagement and advisor efficiency.",
    highlights: [
      "Course recommendations & FAQ flows",
      "Advisor booking automation",
      "Integrates with calendars & student CRM",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-[#212121]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Case Studies & Results
        </h2>
        <p className="text-gray-300 mb-12">
          See how automation transformed customer experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-8 bg-[#262626] border border-gray-700 rounded-2xl shadow-sm hover:shadow-lg text-left"
              aria-label={`${c.title} case study`}
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-gray-300 mb-4">{c.result}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{c.desc}</p>

              <ul className="mb-6 text-sm text-gray-400 space-y-2 list-inside">
                {c.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
