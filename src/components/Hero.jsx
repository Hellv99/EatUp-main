import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/slider-image1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Taste the Warmth of <span className="text-[#ca7842]">Nigeria</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#f0f2bd]/90">
            At <span className="font-semibold">AfroDelightBites</span>, we serve soulful
            Nigerian classics— smoky jollof, spicy suya, rich soups—made fresh
            with locally sourced ingredients.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#ca7842] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Explore Menu <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#4b352a] border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4b352a]/20 transition"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
