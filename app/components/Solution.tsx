const solutions = [
  {
    title: "🗨️ AI Chatbots",
    desc: "Smart, human-like chatbots that handle queries 24/7 on your website and social platforms.",
  },
  {
    title: "🎙️ AI Voice Agents",
    desc: "Natural voice assistants that schedule meetings, handle bookings, and support your customers via calls.",
  },
  {
    title: "⚙️ Custom AI Solutions",
    desc: "Tailored automation for your business operations — built to optimize workflows and boost ROI.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0A2540] mb-12">
          Our Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-[#F9FBFD] rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
