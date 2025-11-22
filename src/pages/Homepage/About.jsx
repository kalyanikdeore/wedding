import React from "react";
import { ws1, ws2, ws3 } from "../../assets";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-black">
            About <span className="text-pink-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            We offer an exclusive collection of luxurious jewelry designed to
            make every wedding moment unforgettable. Our craftsmanship reflects
            elegance, love, and tradition with a modern touch.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Explore a wide range of Rings, Earrings, Bangles, and Bridal Sets
            that are crafted to perfection to enhance your beauty and grace.
          </p>

          <button className="mt-4 bg-pink-500 text-white px-7 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all">
            Explore Collection
          </button>
        </div>

        {/* Right Images - Staggered Style */}
        <div className="relative flex justify-center items-center">
          <img
            src={ws1}
            className="w-56 h-72 object-cover rounded-2xl shadow-xl transform translate-x-6 hover:scale-105 transition-all duration-300"
            alt="jewelry-img1"
          />

          <img
            src={ws2}
            className="w-56 h-72 object-cover rounded-2xl shadow-xl transform -translate-y-10 -translate-x-6 hover:scale-105 transition-all duration-300"
            alt="jewelry-img2"
          />

          <img
            src={ws3}
            className="w-56 h-72 object-cover rounded-2xl shadow-xl transform translate-y-10 hover:scale-105 transition-all duration-300"
            alt="jewelry-img3"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
