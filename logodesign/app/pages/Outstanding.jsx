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
    <div className="main pt-5 shadow-lg">
      <div className="heading text-4xl text-center pt-5">
        Our Outstanding Logo Design
      </div>
      <div className="intro text-md flex text-justify p-5">
        A powerful logo is critical for growing your emblem's visibility and
        attracting extra users. At Webstudio Nepal, a top-of-the-line brand
        layout company in Nepal, we craft compelling trademarks that raise your
        emblem's fee while preserving cost-effectiveness. Our skilled emblem
        designers hire state-of-the-art photograph factors, vibrant color
        schemes, elegant calligraphy, and fantastic layout strategies to ensure
        your logo captures interest.
      </div>

      <div className="flex justify-between w-full h-full relative space-x-8 ">
        {/* Left column for odd-indexed items */}
        <div className="flex flex-col w-1/2 space-y-16">
          {sections.map((section, index) =>
            index % 2 !== 0 ? (
              <div
                key={index}
                className="relative flex items-center justify-end border-2 border-blue-300 border-dashed rounded-full bg-white shadow-md"
              >
                {/* Main content aligned to the left of the circle */}
                <div
                  className="flex-1 p-6 h-full"
                  style={{ marginRight: "20px" }} // Added a little space between content and circle
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

                {/* Circle container aligned to the right */}
                <div
                  className={`rounded-full border-8 flex items-center justify-center bg-white ${
                    index === 1 ? "border-blue-500" : "border-violet-400"
                  }`}
                  style={{ height: "150px", width: "150px" }}
                >
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Right column for even-indexed items */}
        <div className="flex flex-col w-1/2 space-y-16">
          {sections.map((section, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className="relative flex items-center justify-start border-2 border-blue-300 border-dashed rounded-full bg-white shadow-md mt-14 flex-wrap"
              >
                {/* Circle container aligned to the left */}
                <div
                  className={`rounded-full border-8 flex items-center justify-center  bg-white ${
                    index === 0 ? "border-blue-400" : "border-violet-400"
                  }`}
                  style={{ height: "150px", width: "150px" }}
                >
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="object-cover"
                  />
                </div>

                {/* Main content aligned to the right of the circle */}
                <div
                  className="flex-1 p-6 h-full"
                  style={{ marginLeft: "20px" }} // Added a little space between circle and content
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
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Keep the button in a separate div */}
      <div className="flex justify-center gap-8 p-6">
        <Button
          label="Logo Design Packages"
          variant="filled"
          onClick={handleClick("Logo Design Packages")}
        />
      </div>
    </div>
  );
};

export default Outstanding;
