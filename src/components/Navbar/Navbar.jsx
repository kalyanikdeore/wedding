import React, { useState } from "react";
import {
  FiUsers,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Top Fixed Navbar */}
      <div className="bg-pink-600 text-white fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-10 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <FiMail /> <span>weddingstorensk@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <FiPhone /> <span>+91 7030050044</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiFacebook className="hover:text-gray-300 cursor-pointer" />
            <FiInstagram className="hover:text-gray-300 cursor-pointer" />
            <FiTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="h-10"></div>

      {/* Main Navbar */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky top-10 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold text-black cursor-pointer tracking-wide">
              the<span className="text-pink-600">Knot</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-600 font-medium text-sm tracking-wide hover:text-pink-600 transition duration-300
                  relative after:absolute after:w-0 after:h-[2px] after:bg-pink-600 after:left-0 after:-bottom-1
                  hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center">
              <button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90">
                Enquiry Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-800"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t mt-2 rounded-lg shadow-sm py-3 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 px-4 py-2 text-sm hover:text-pink-600 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 px-4 py-2 text-sm hover:text-pink-600 transition"
              >
                <FiUsers /> Find a couple
              </a>

              <div id="contact" className="px-4 mt-2">
                <button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white w-full px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90">
                  Enquiry Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
