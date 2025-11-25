import { FaArrowRight } from "react-icons/fa";

const GoogleReviewButton = () => {
  const reviewUrl =
    "https://www.google.com/maps/place/Wedding+Store/@19.9609902,73.7913495,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddeb596b5ee7e9:0x1b278777883cdae!8m2!3d19.9609902!4d73.7939244!16s%2Fg%2F11zhyzs9c6?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="flex justify-center items-center py-5">
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black px-6 py-2 rounded-lg font-bold 
                 transition-all duration-300 ease-in-out 
                 border-2 border-pink-500 
                 hover:bg-gradient-to-r from-pink-600 to-pink-700 hover:text-white 
                 transform hover:-translate-y-1 hover:scale-105 
                 shadow-md hover:shadow-orange-500/30 
                 flex items-center gap-2 group"
      >
        Write a Review
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default GoogleReviewButton;
