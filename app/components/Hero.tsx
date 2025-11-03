"use client";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
return (
<section
id="home"
className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#212121] via-[#222222] to-[#1f1f1f] overflow-hidden px-6 pt-24"
>
{/* Subtle background pattern */}
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 0.4 }}
transition={{ duration: 2 }}
className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.02),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent_60%)]"
></motion.div>


{/* Heading */}
<motion.h1
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight"
>
Automate Conversations. <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
Elevate Customer Experience.
</span>
</motion.h1>
<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.3 }}
className="relative z-10 mt-6 max-w-2xl text-gray-300 text-lg"
>
Empower your business with next-generation AI chatbots, voice agents,
and intelligent automation that engages customers and scales support
effortlessly.
</motion.p>


{/* Buttons */}
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.6 }}
className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10"
>
{/* Primary Button */}
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
className="bg-white text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:bg-gray-100"
>
Book a Free Consultation
<ArrowRight className="w-5 h-5" />
</motion.button>


{/* Secondary Button */}
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#2a2a2a] transition-all duration-200"
>
<PlayCircle className="w-5 h-5 text-gray-300" />
Watch Demo
</motion.button>
</motion.div>


{/* Glow */}
<motion.div
animate={{ opacity: [0.15, 0.45, 0.15] }}
transition={{ duration: 6, repeat: Infinity }}
className="absolute bottom-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] blur-[180px] rounded-full"
></motion.div>
</section>
);
}