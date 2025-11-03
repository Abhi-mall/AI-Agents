"use client";
import { motion } from "framer-motion";


export default function CTABanner() {
return (
<section className="py-24 text-center bg-gradient-to-r from-[#212121] to-[#2b2b2b] text-white relative overflow-hidden">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="relative z-10 max-w-3xl mx-auto px-6"
>
<h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
Ready to Bring <span className="text-gray-200">AI Power</span> to Your Business?
</h2>
<p className="text-gray-300 mb-8 text-lg">
Automate conversations and enhance experiences with Affix AI.
</p>


<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.97 }}
className="bg-white text-black px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
>
Get Started Now
</motion.button>
</motion.div>
</section>
);
}