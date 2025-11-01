export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-poppins font-bold text-xl mb-3">Affix AI</h3>
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
          <p className="text-gray-300 text-sm">support@affixai.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-3">
            🌐 🐦 💼
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-8">
        © 2025 Affix AI. All rights reserved.
      </p>
    </footer>
  );
}
