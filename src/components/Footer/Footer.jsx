import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 py-16 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-700/40">
        {/* Logo */}
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 tracking-wide drop-shadow-lg">
            Wedding Store
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
            Crafting unforgettable celebrations with elegance & love ✨
          </p>
        </div>

        {/* Menu */}
        {/* Menu */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", link: "#home" },
              { name: "Products", link: "#products" },
              { name: "Gallery", link: "#gallery" },
              { name: "Contact", link: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-pink-400 transition duration-300 hover:translate-x-1 inline-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-pink-500" /> +91 70300 50044
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-pink-500" />
              weddingstorensk@gmail.com
            </li>
            <li className="flex items-start gap-3 hover:text-white transition leading-relaxed">
              <FaMapMarkerAlt className="text-pink-500 mt-1" />
              DREAM GARDEN, Wadala Gaon,
              <br /> Nashik, Maharashtra 422006
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <p className="text-sm mb-5">Join our wedding community 🤍</p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full
                bg-gradient-to-r from-pink-600 to-rose-500
                shadow-xl
                hover:shadow-pink-600/50
                hover:scale-125
                transition-all duration-300 flex items-center justify-center"
              >
                <Icon className="text-white text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center ">
        <p className="text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Wedding Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
