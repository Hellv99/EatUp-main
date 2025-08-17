// App.jsx - wires all sections together in order and provides section IDs for nav
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      {/* 1) Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* 2) About */}
      <section id="about">
        <About />
      </section>

      {/* 4) Menu */}
      <section id="menu">
        <Menu />
      </section>

      {/* 5) Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 6) Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* 7) Footer */}
      <Footer />
    </>
  );
}
