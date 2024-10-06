"use client";
import React from "react";
import Button from "../component/Button";

const Outstanding = () => {
  const handleClick = (message) => () => alert(message);

  const sections = [
    {
      title: "In-intensity Brand Insight",
      description:
        "We use our logo design method to examine your brand’s identity comprehensively.",
      icon: "/penDesign.png",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Various programs are designed to fulfill distinctive business emblem needs at inexpensive charges.",
      icon: "/Money.png",
    },
    {
      title: "Veteran Designers",
      description:
        "Since 2019, our designers have been creating bespoke, incredible logos.",
      icon: "/Designers.png",
    },
    {
      title: "Diverse Design Options",
      description:
        "We offer an extensive range of design standards, allowing our customers to choose the ideal representation for their emblem.",
      icon: "/Money.png",
    },
  ];

  return (
    <div className="main">
      <div className="text-center justify-center w-full h-full relative flex ">
        <div className="flex flex-col space-y-8 justify-center items-center text-center w-3/5">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between border-2 border-blue-300 border-dashed rounded-full bg-white shadow-md"
            >
              {/* Conditional rendering for left/right positioning */}
              {index % 2 === 0 ? (
                <>
                  {/* Text on left */}
                  <div
                    className="flex-1 p-6 h-full"
                    style={{ marginRight: "-50px" }}
                  >
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        index === 1
                          ? "text-blue-500"
                          : index >= 2
                          ? "text-violet-500"
                          : "text-blue-500"
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>

                  {/* Circle container with icon on right */}
                  <div
                    className={`rounded-full border-8 flex items-center justify-center bg-white ${
                      index === 0
                        ? "border-blue-400"
                        : index === 1
                        ? "border-blue-500"
                        : "border-violet-400"
                    }`}
                    style={{ height: "150px", width: "150px" }} // Adjust circle size
                  >
                    <img
                      src={section.icon}
                      alt={section.title}
                      className="object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Circle container with icon on left */}
                  <div
                    className={`rounded-full border-8 flex items-center justify-center bg-white ${
                      index === 0
                        ? "border-blue-400"
                        : index === 1
                        ? "border-blue-500"
                        : "border-violet-400"
                    }`}
                    style={{ height: "150px", width: "150px" }} // Adjust circle size
                  >
                    <img
                      src={section.icon}
                      alt={section.title}
                      className="object-cover"
                    />
                  </div>

                  {/* Text on right */}
                  <div
                    className="flex-1 p-6 h-full"
                    style={{ marginLeft: "-50px" }}
                  >
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        index === 1
                          ? "text-blue-500"
                          : index >= 2
                          ? "text-violet-500"
                          : "text-blue-500"
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="btn p-3 justify-center flex">
        <Button
          label="Logo Design Packages"
          variant="filled"
          onClick={handleClick("Request a Quote is clicked!")}
        />
      </div>
    </div>
  );
};

export default Outstanding;
