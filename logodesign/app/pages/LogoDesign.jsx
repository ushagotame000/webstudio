"use client";
import React from "react";
import Button from "../component/Button";

const LogoDesign = () => {
  const handleClick = (message) => () => alert(message);

  return (
    <div className="text-justify">
      <div
        className="w-full min-h-screen flex flex-col justify-between text-center"
        style={{
          backgroundImage: "url('/LogoDesignCompany.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-grow flex flex-col justify-center items-center pt-10">
          <span className="text-3xl ">
            Logo Design Company Nepal - Best Logo Designers
          </span>
          <div className="m-5 p-2 text-justify">
            <p className="text-sm sm:text-base md:text-lg">
              Being a top logo design company in Nepal and a professional logo
              design company we specialize in making unique and standout logos
              for companies of all kinds. Our skilled logo designers have
              created unique logos for global small and large businesses in a
              variety of sectors, including real estate, technology, fashion,
              hospitality, food, and education. We provide a variety of packages
              for our custom logo design services that adjust to the unique
              requirements of each company. Get in touch with us to go over the
              specifications for your brand and collaborate with the top logo
              designers in the business.
            </p>
          </div>
          <div className="img w-full flex justify-center">
            <img
              src="/graphics/BestLogoDesigners.png"
              alt="Best Logo Designers"
              className="w-full h-auto object-contain"
              style={{ maxHeight: "400px", margin: "0 auto" }} // Adjust the max height for small screens
            />
          </div>
        </div>
        <div className="flex justify-center pb-8 -mt-3">
          <Button
            className=""
            label="Talk To Us"
            variant="outlined"
            onClick={handleClick("Talk To us clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoDesign;
