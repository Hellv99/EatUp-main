import React, { useEffect, useState } from "react";
import { FaUtensils } from "react-icons/fa";

/**
 * Sticky navbar:
 * - Transparent (white text) over hero
 * - Turns solid with [#f0f2bd] background and [#4b352a] text after scroll
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm";
  const transparent = "bg-transparent text-white";
  const solid = "text-[#4b352a] shadow-soft";

  const linkStyle =
    "px-3 py-2 rounded-md font-medium hover:text-[#ca7842] transition";

  return (
    <nav className={`${base} ${scrolled ? solid : transparent}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => (window.location.hash = "#home")}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <FaUtensils />
            AfroDelightBites
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#home" className={linkStyle}>
              Home
            </a>
            <a href="#about" className={linkStyle}>
              About
            </a>

            <a href="#menu" className={linkStyle}>
              Menu
            </a>
            <a href="#testimonials" className={linkStyle}>
              Reviews
            </a>
            <a href="#contact" className={linkStyle}>
              Contact
            </a>
            <a
              href="#menu"
              className="ml-2 inline-block bg-[#ca7842] text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Order Now
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden ${
            scrolled ? "bg-[#f0f2bd]" : "bg-black/60 text-white"
          } px-6 py-3`}
        >
          <div className="flex flex-col gap-2">
            <a href="#home" onClick={() => setOpen(false)} className="py-2">
              Home
            </a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">
              About
            </a>

            <a href="#menu" onClick={() => setOpen(false)} className="py-2">
              Menu
            </a>
            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Reviews
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">
              Contact
            </a>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block bg-[#ca7842] text-white px-4 py-2 rounded-full font-semibold"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
