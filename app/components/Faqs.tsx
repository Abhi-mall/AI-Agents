"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is FoxAI?",
      answer:
        "FoxAI is an AI-powered automation platform that helps businesses improve customer communication through intelligent chatbots, voice agents, and custom AI solutions. It automates routine support tasks, reduces response times, and increases customer satisfaction.",
    },
    {
      question: "How does FoxAI’s chatbot work?",
      answer:
        "Our AI chatbots use advanced natural language understanding (NLU) to respond to customer queries instantly. They can answer FAQs, capture leads, schedule appointments, and even connect users to a live agent when needed — available 24/7.",
    },
    {
      question: "What industries can benefit from FoxAI?",
      answer:
        "FoxAI is designed for businesses across retail, healthcare, e-commerce, education, and customer service. We also customize solutions for other industries based on your communication needs and workflow.",
    },
    {
      question: "Can FoxAI integrate with my existing tools?",
      answer:
        "Yes. FoxAI easily integrates with platforms like WhatsApp, CRM systems, websites, and scheduling tools. Our solutions are built to work seamlessly with your current tech stack.",
    },
    {
      question: "Are voice agents fully automated?",
      answer:
        "Yes. FoxAI’s voice agents can handle incoming calls, schedule or reschedule appointments, route queries, and provide real-time updates — all with a natural, human-like tone.",
    },
        {
      question: "Can I customize the chatbot or voice tone?",
      answer:
        "Yes. You can fully customize your chatbot’s or voice agent’s tone, script, and personality to align with your brand voice and customer communication style.",
    },
    {
      question: "How long does it take to set up FoxAI?",
      answer:
        "Most implementations take just a few days depending on the level of customization required. Our team assists you through setup, integration, and training for a smooth deployment.",
    },
            {
      question: "Do you offer support after setup?",
      answer:
        "Yes. We provide continuous technical support, system updates, and optimization assistance to ensure your AI continues to perform effectivel",
    },
    {
      question: "How can I get started with FoxAI?",
      answer:
        "You can book a free consultation or request a demo through our website. Our experts will walk you through the setup process and tailor a solution for your business needs.",
    },
  ];

  return (
    <section id="faq" className="relative bg-[#212121] text-white py-24 px-6 md:px-20 overflow-hidden">
    

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-[3px] mx-auto bg-white rounded-full shadow-[0_0_15px_#9CFF1E]" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Quick answers to common questions about our services, pricing, and more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#1f1f1f] rounded-xl overflow-hidden bg-[#262626] hover:bg-[#262626] transition-all  ${
                openIndex === index ? "bg-[#262626]" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#141414] transition"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-white transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-300 border-t border-[#1f1f1f]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 border-t border-[#1f1f1f] pt-10">
          <p className="text-gray-400">
            Still have a question?{" "}
            <a
              href="https://calendly.com/carefoxai/30min"
              className="text-white font-semibold hover:underline hover:text-white transition"
            >
              Chat with our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
