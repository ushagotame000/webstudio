import React from "react";

const Portfolio = () => {
  const images = [
    "/DesigningCreativity.png",
    "/GraphicCreat.png",
    "/Relaxation.png",
    "/Sajilo.png",
  ];

  return (
    <div className="mt-9 pt-3">
      <div className="text-4xl text-center mb-8">Our Logo Design Portfolio</div>

      {/* Responsive Grid Container */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-12 mx-auto px-14 max-w-7xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative p-6 md:p-8 lg:p-12 bg-gray-200 rounded-md overflow-hidden shadow-lg ${
              index === images.length - 1 ? "shadow-none" : "" // Optional shadow for the last item
            }`}
            style={{
              background: `linear-gradient(to top, rgba(231, 231, 231, 1), rgba(246, 246, 246, 0))`,
            }}
          >
            <img
              src={image}
              alt={`Logo ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Shadow Line at the Bottom */}
      <div className="h-2 bg-gradient-to-b from-transparent to-gray-400 shadow-md mt-6" />
    </div>
  );
};

export default Portfolio;
