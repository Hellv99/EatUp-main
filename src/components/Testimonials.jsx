import React from "react";

const quotes = [
  {
    name: "Chinedu O.",
    text: "That smoky jollof took me straight back home. Easily the best I’ve had in Lagos.",
  },
  {
    name: "Aisha K.",
    text: "Suya is perfectly spiced. Friendly team, cozy vibe. New favorite spot!",
  },
  {
    name: "Tomi A.",
    text: "Egusi was rich and comforting. Portions are generous too — love it.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#4b352a]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          What Guests Say
        </h2>
        <p className="text-white/80 text-center mt-2 max-w-2xl mx-auto">
          Real feedback from people who eat with us every week.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="bg-white rounded-2xl p-6 shadow-soft hover:-translate-y-1 transition"
            >
              <p className="text-[#4b352a]/90 italic">“{q.text}”</p>
              <p className="mt-4 font-semibold text-[#4b352a]">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
