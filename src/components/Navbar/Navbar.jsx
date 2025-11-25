import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiShoppingCart,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  const handleCartClick = () => {
    cart.toggleCart();
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Top Fixed Navbar - Fully Responsive */}
      <div className="bg-pink-600 text-white fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-10 text-xs sm:text-sm">
            {/* Contact Info */}
            <div className="flex items-center gap-3 flex-wrap max-w-[70%] sm:max-w-full">
              <div className="flex items-center gap-1 min-w-max">
                <FiMail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate max-w-[100px] sm:max-w-none">
                  weddingstorensk@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-1 min-w-max">
                <FiPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+91 7030050044</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <FiFacebook className="hover:text-gray-300 cursor-pointer w-3 h-3 sm:w-4 sm:h-4" />
              <FiInstagram
                className="hover:text-gray-300 cursor-pointer w-3 h-3 sm:w-4 sm:h-4"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/wedding_store_nashik/",
                    "_blank"
                  )
                }
              />
              <FiTwitter className="hover:text-gray-300 cursor-pointer w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-10"></div>

      {/* Main Navbar */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky top-10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            {/* <div className="text-2xl md:text-3xl font-bold text-black cursor-pointer tracking-wide">
              Wedding<span className="text-pink-600">Store</span>
            </div> */}
            <a
              href="#home"
              className="text-2xl md:text-3xl font-bold text-black cursor-pointer tracking-wide flex"
              onClick={() => setIsOpen(false)}
            >
              Wedding<span className="text-pink-600">Store</span>
            </a>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-600 font-medium text-sm tracking-wide hover:text-pink-600 transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-pink-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Side - Cart & Button */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Shopping Cart */}
              <button
                onClick={handleCartClick}
                className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
                {cart.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.itemCount}
                  </span>
                )}
              </button>

              {/* Enquiry Button */}
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
              >
                Enquiry Now
              </button>
            </div>

            {/* Mobile Right Side - Cart & Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Shopping Cart */}
              <button
                onClick={handleCartClick}
                className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
                {cart.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cart.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className="text-gray-800 p-2 hover:text-pink-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
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
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 mt-2 rounded-lg shadow-lg py-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 px-4 py-3 text-base hover:bg-pink-50 hover:text-pink-600 transition-all rounded-md mx-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
