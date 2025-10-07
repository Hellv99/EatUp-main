import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4b352a] text-[#f0f2bd]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg">AfroDelightBites</h3>
          <p className="mt-2 text-[#f0f2bd]/80">
            Comfort food, Nigerian soul. Thanks for dining with us.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Visit</h4>
          <p className="mt-2 text-[#f0f2bd]/80">
            123 Food Street, Ikeja, Lagos
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-[#f0f2bd]/80">+234 812 345 6789</p>
          <p className="text-[#f0f2bd]/80">hello@AfroDelightBites.ng</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[#f0f2bd]/70 text-sm">
        © {new Date().getFullYear()} AfroDelightBites. All rights reserved.
      </div>
    </footer>
  );
}
