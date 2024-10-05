"use client";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Celynn",
      country: "USA",
      image: "DesigningCreativity.png",
      message:
        "Thank you again for the excellent customer service! It has been a pleasure working with you and your team. I will definitely refer you to other people who are looking for a logo design.",
    },
    {
      name: "John",
      country: "UK",
      image: "DesigningCreativity.png",
      message:
        "The logo design is amazing! Your team exceeded my expectations. I'll certainly recommend your services to others in need of branding solutions.",
    },
    {
      name: "Maria",
      country: "Australia",
      image: "DesigningCreativity.png",
      message:
        "Working with you was a wonderful experience. The logo truly represents my brand, and your professionalism made the process easy.",
    },
    {
      name: "Ali",
      country: "UAE",
      image: "DesigningCreativity.png",
      message:
        "Superb logo design! Thanks for the fast delivery and high-quality service. I’m recommending your company to my colleagues.",
    },
  ];

  const handleClick = (message) => () => alert(message);

  return (
    <div className="bg-[rgba(43,43,43,1)] pb-9 ">
      <div className="text-white text-4xl text-center pt-9 mt-5 ">
        Client Testimonials
      </div>
      {/* Flex container */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 pb-8 px-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full sm:w-64 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${
              index % 2 !== 0 ? "mt-8" : "mt-0"
            }`}
          >
            <div
              className={`h-16 flex items-center justify-center ${
                index % 2 === 0
                  ? "bg-gradient-to-b"
                  : "bg-gradient-to-r from-gray-00 to-slate-700"
              }`}
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(180deg, rgba(41, 170, 225, 1) 0%, rgba(17, 129, 184, 1) 100%)"
                    : undefined, // Use default styling for odd index
              }}
            ></div>

            {/* Wrapper div for name, country, and message with gradient */}
            <div
              className="p-5 flex flex-col justify-center"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(180deg, #4F4F4F 9.15%, #2B2B2B 93.94%)"
                    : "linear-gradient(180deg, #2B2B2B 9.15%, #4F4F4F 93.94%)",
              }}
            >
              <div className="sec2 justify-center flex p-2">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-3">
                  {/* Gradient text for name */}
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(41, 170, 225, 1) 0%, rgba(17, 129, 184, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    {testimonial.name}
                  </span>
                  {/* Gradient text for country */}
                  <div
                    className="text-blue-200"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(41, 170, 225, 1) 0%, rgba(17, 129, 184, 1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    {testimonial.country}
                  </div>{" "}
                </div>
              </div>
              <p className="text-white mt-3 text-sm text-justify">
                {testimonial.message}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex justify-center">
                <button
                  onClick={handleClick("View More is clicked!")}
                  className="mb-5 text-cyan-300 border border-cyan-300 rounded-lg px-4 py-2 transition-all duration-300"
                  style={{
                    borderColor: "rgba(41, 170, 225, 1)",
                    color: "rgba(41, 170, 225, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(41, 170, 225, 1)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "rgba(41, 170, 225, 1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "rgba(41, 170, 225, 1)";
                  }}
                >
                  View More
                </button>
              </div>
            </div>
            {index % 2 !== 0 ? (
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #29AAE1 0%, #1181B8 100%)",
                }}
                className="h-16 flex items-center justify-center"
              ></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
