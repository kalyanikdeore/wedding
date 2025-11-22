import React from "react";
import { ws1, ws2, ws3 } from "../../assets";

const AboutUs = () => {
  const scrollToContact = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <section id="about" className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            About <span className="text-pink-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full mx-auto md:mx-0"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            We dedicate ourselves to crafting exquisite flower torans and pot
            decorations that bring traditional elegance and natural beauty into
            your spaces.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Sustainable materials and attention to detail, our creations are
            perfect for adorning your entrance, enhancing your interiors, or
            celebrating special festivals and weddings.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-4 bg-pink-500 text-white px-7 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all"
          >
            Explore Collection
          </button>
        </div>

        {/* Right Images - Mobile Responsive */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            src={ws1}
            className="w-48 h-64 md:w-56 md:h-72 object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
            alt="jewelry-img1"
          />

          <img
            src={ws2}
            className="w-48 h-64 md:w-56 md:h-72 object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 md:-translate-y-10"
            alt="jewelry-img2"
          />

          <img
            src={ws3}
            className="w-48 h-64 md:w-56 md:h-72 object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 md:translate-y-10"
            alt="jewelry-img3"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
