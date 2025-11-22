import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ws1, ws2, ws3 } from "../../assets";

const Hero = () => {
  const navigate = useNavigate();

  const images = [ws1, ws2, ws3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left & Right Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
      >
        <FaChevronRight />
      </button> */}

      {/* Text Content */}
      <div className="relative max-w-4xl px-6 py-8 text-center text-white  rounded-xl shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to Wedding Store Collection
        </h1>

        <p className="text-lg md:text-xl mt-6 font-medium drop-shadow-md">
          where every piece is crafted to make your special day
          <br />
          unforgettable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get In Touch
          </button>

          <button
            onClick={scrollToProducts}
            className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-50 hover:scale-105 transition-transform"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 flex gap-2 justify-center w-full">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
