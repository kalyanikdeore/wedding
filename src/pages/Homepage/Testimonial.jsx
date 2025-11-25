import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const clientTestimonials = [
  {
    name: "Hitesh Maurya",
    project: "Wedding Entrance Decor",
    quote:
      "Absolutely stunning torans for our wedding entrance! The team was incredibly helpful and their attention to detail was evident. The flowers were fresh and beautifully arranged. Highly recommend for weddings, festivals, and any special event.",
    rating: 5,
  },
  {
    name: "Mamta Deshmukh",
    project: "Festival Home Decoration",
    quote:
      "I am so happy with my purchase for our Diwali celebrations. The flower toran and pot decorations were exquisite. The quality of the sustainable materials and the craftsmanship made my home feel so warm and elegant. ",
    rating: 5,
  },
  {
    name: "Ketan Patil",
    project: "Anniversary Gift",
    quote:
      "The toran I bought for my wife's anniversary gift was not like any other; it felt special and thoughtfully made. The natural beauty and traditional elegance truly brought a piece of art into our entrance. it felt special and thoughtfully made.",
    rating: 5,
  },
  {
    name: "Amisha Bhamre",
    project: "Interior Enhancement",
    quote:
      "The floral creations are superb and the quality is exceptional. If you are looking to adorn your home with natural beauty and traditional elegance. The pot decoration I bought has enhanced my living space perfectly.",
    rating: 5,
  },
];
const TestimonialSection = () => {
  const clientsRef = useRef(null);

  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Client Testimonials */}
        <div className="mt-28">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-10"
              variants={itemVariants}
            >
              Client <span className="text-pink-500">Testimonial</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            <button
              onClick={() => scrollClients("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-0 bg-gray-300 hover:bg-pink-200 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollClients("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-0 bg-gray-300 hover:bg-pink-200 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={clientsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            >
              {clientTestimonials.map((client, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] sm:min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {client.name}
                        </h4>
                        <p className="text-sm text-pink-600">
                          {client.project}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">"{client.quote}"</p>
                    <div className="flex gap-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < client.rating ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
