import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill all the fields.");
      return;
    }

    const whatsappNumber = "917030050044";
    const whatsappMessage = `Hello Wedding Store,%0A%0AName: ${firstName} ${lastName}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-white flex justify-center items-center py-20 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <div className="text-black space-y-5 text-center md:text-left">
          <span className="text-5xl text-pink-500">📩</span>

          <h3 className="text-3xl font-extrabold leading-snug">
            For any inquiries or custom <br /> orders ✨
          </h3>

          <p className="text-lg opacity-80 font-medium">Email us anytime:</p>
          <p className="text-xl font-bold text-pink-600 underline underline-offset-4 break-all">
            weddingstorensk@gmail.com
          </p>

          <p className="text-lg opacity-80 font-medium">Contact No.</p>
          <p className="text-xl font-bold text-pink-600 underline underline-offset-4">
            +91 70300 50044
          </p>
        </div>

        {/* Right Form */}
        <form
          className="space-y-8 text-black font-medium"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-extrabold">Contact Us</h2>
          <div className="w-24 h-1 bg-pink-500 mb-3 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-black/50 p-2 focus:outline-none focus:border-pink-500 transition-all"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-black/50 p-2 focus:outline-none focus:border-pink-500 transition-all"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-black/50 p-2 w-full focus:outline-none focus:border-pink-500 transition-all"
            required
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-black/50 p-2 w-full focus:outline-none focus:border-pink-500 transition-all"
            required
          />

          <button
            type="submit"
            className="w-full md:w-auto mt-6 bg-pink-600 hover:bg-pink-700 text-white px-12 py-3 rounded-full font-semibold tracking-wide transition-all hover:scale-105 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
