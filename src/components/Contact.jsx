import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b352a]">
              Get in Touch
            </h2>
            <p className="mt-3 text-[#4b352a]/80">
              Reservations, catering, or feedback — we’d love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#ca7842]" />
                <p className="text-[#4b352a]/90">
                  123 Food Street, Ikeja, Lagos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[#ca7842]" />
                <p className="text-[#4b352a]/90">+234 812 345 6789</p>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#ca7842]" />
                <p className="text-[#4b352a]/90">hello@eatup.ng</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-4 shadow-soft">
              <p className="font-semibold text-[#4b352a]">Opening Hours</p>
              <ul className="mt-2 text-[#4b352a]/85 space-y-1">
                <li>Mon: Closed</li>
                <li>Tue–Fri: 10:00 – 21:00</li>
                <li>Sat–Sun: 11:00 – 22:00</li>
              </ul>
            </div>
          </div>

          {/* Form (non-functional placeholder; hook to your backend if needed) */}
          <form
            className="bg-white rounded-2xl p-6 shadow-soft"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="border border-[#4b352a]/20 rounded-lg p-3"
                placeholder="Full Name"
              />
              <input
                className="border border-[#4b352a]/20 rounded-lg p-3"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <input
              className="mt-4 w-full border border-[#4b352a]/20 rounded-lg p-3"
              placeholder="Subject"
            />
            <textarea
              className="mt-4 w-full border border-[#4b352a]/20 rounded-lg p-3 h-32"
              placeholder="Message"
            />
            <button className="mt-4 bg-[#ca7842] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
