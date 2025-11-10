import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/FOXAI LOGO.png" alt="FoxAI Logo" width={100} height={100} />
          <p className="text-gray-300 text-sm">
            Intelligent Automation for Businesses.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-2">Solutions</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>AI Chatbots</li>
            <li>Voice Agents</li>
            <li>Custom AI</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-300 text-sm">helpfoxai@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-gray-300 text-2xl">
            <a
              href="https://www.instagram.com/foxai.automation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/foxai-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/foxaiautomation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-8">
        © 2025 Foxai AI. All rights reserved.
      </p>
    </footer>
  );
}
