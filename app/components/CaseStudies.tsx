const cases = [
  "Retail Company boosted customer engagement by 65% using our AI Chatbot.",
  "Healthcare provider automated 80% of appointment bookings via voice agents.",
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0A2540] mb-12">
          Case Studies & Results
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="p-6 bg-[#F9FBFD] rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
