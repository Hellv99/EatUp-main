import React from "react";

/**
 * Brand-aligned About section with warm palette blocks.
 */
export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-soft">
          <img
            src="/images/about-image.jpg"
            alt="AfroDelightBites kitchen"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4b352a]">
            Our Story
          </h2>
          <p className="mt-4 text-[#4b352a]/80">
            From pop-up to neighborhood favorite, AfroDelightBites celebrates home-style
            Nigerian cooking with a modern touch. Our chefs respect tradition
            while crafting flavors that feel like Sunday at home.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <p className="text-2xl font-bold text-[#ca7842]">15+</p>
              <p className="text-sm text-[#4b352a]/70">Dishes</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <p className="text-2xl font-bold text-[#ca7842]">5k+</p>
              <p className="text-sm text-[#4b352a]/70">Happy Guests</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-soft">
              <p className="text-2xl font-bold text-[#ca7842]">Daily</p>
              <p className="text-sm text-[#4b352a]/70">Fresh Produce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
