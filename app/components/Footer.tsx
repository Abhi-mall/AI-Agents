import Image from "next/image";

export default function Footer() {
return (
<footer className="bg-[#212121] text-white py-10">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<Image src="/FOXAI LOGO.png" alt="FoxAI Logo" width={120} height={120} />
<p className="text-gray-300 text-sm">
Intelligent Automation for Businesses.
</p>
</div>
<div>
<h4 className="font-semibold mb-2">Solutions</h4>
<ul className="text-gray-300 text-sm space-y-1">
<li>AI Chatbots</li>
<li>Voice Agents</li>
<li>Custom AI</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-2">Contact</h4>
<p className="text-gray-300 text-sm">carefoxai@gmail.com</p>
</div>
<div>
<h4 className="font-semibold mb-2">Follow Us</h4>
<div className="flex gap-3">🌐 🐦 💼</div>
</div>
</div>
<p className="text-center text-gray-400 text-sm mt-8">
© 2025 FoxAI. All rights reserved.
</p>
</footer>
);
}