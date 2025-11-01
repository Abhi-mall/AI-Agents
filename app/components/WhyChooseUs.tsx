export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-[#F9FBFD]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/ai-illustration.svg"
          alt="AI Illustration"
          className="w-full rounded-xl"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0A2540] mb-6">
            Why Businesses Choose Affix AI
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ 24/7 Support Automation</li>
            <li>✅ Customizable AI to fit your workflow</li>
            <li>✅ Seamless Integration (CRM, WhatsApp, Website, etc.)</li>
            <li>✅ Scalable & Secure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
