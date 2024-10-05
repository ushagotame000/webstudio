"use client";
import { useState } from "react";

function Wonder() {
  const questions = [
    "Why should I choose a Logo Design company in Nepal?",
    "What is the price for a custom logo design?",
    "Can you create a custom logo for my business?",
    "Do you offer custom logo design packages?",
    "How to ensure the logo aligns with my brand?",
  ];

  const details = [
    "Yes we provide custom software development and design services tailored to meet the unique needs of each client, ensuring effective solutions.",
    "Absolutely! We specialize in developing both web and mobile applications, utilizing the least technologies to deliver high quality, user-friendly solutions.",
    "You should choose Web Studio Nepal for our commitment to excellence, timely delivery, and personalized service that meets the specific needs of your business.",
    "We handle updates and upgrades by implementing a structured process that includes regular assessments and client feedback to ensure continuous improvement and functionality.",
    "Yes, we offer a set number of revisions to ensure you're satisfied with the design.",
  ];

  // State to manage which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="main bg-[#1E1E1E]"
      style={{
        backgroundImage: "url('/Mapbg.png')",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center pt-14">
        <h2 className="text-4xl mb-4 text-white">
          Things You Might Be Wondering
        </h2>
        <div className="dropdown p-5">
          <div id="accordion-collapse" data-accordion="collapse">
            {questions.map((question, index) => (
              <div key={index} className="mb-5 ">
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-600 rounded-lg hover:bg-gray-600 gap-3  ${
                      openIndex === index ? "bg-gray-600" : "bg-[#444444]"
                    }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`accordion-collapse-body-${index}`}
                  >
                    <span>{question}</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        openIndex === index ? "" : "rotate-180"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                {/* Details displayed within the same div as the question */}
                <div
                  id={`accordion-collapse-body-${index}`}
                  className={`transition-max-height duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-screen"
                      : "max-h-0 overflow-hidden"
                  }`}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div
                    className={`p-5 border border-b-0 border-gray-600 bg-[#444444]`}
                  >
                    <p className="text-white">{details[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wonder;
