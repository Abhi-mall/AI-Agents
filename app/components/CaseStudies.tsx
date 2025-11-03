"use client";
import { motion } from "framer-motion";


const cases = [
{ title: "Retail", result: "65% boost in engagement." },
{ title: "Healthcare", result: "80% appointments automated." },
{ title: "E-Commerce", result: "70% faster response times." },
{ title: "Education", result: "60% better interaction." },
];


export default function CaseStudies() {
return (
<section className="py-20 bg-[#212121]">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
Case Studies & Results
</h2>
<p className="text-gray-300 mb-12">
See how automation transformed customer experience.
</p>


<div className="grid md:grid-cols-2 gap-8">
{cases.map((c, i) => (
<motion.div
key={i}
whileHover={{ scale: 1.02 }}
className="p-8 bg-[#262626] border border-gray-700 rounded-2xl shadow-sm hover:shadow-lg"
>
<h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
<p className="text-gray-300">{c.result}</p>
</motion.div>
))}
</div>
</div>
</section>
);
}