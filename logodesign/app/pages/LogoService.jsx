"use client";
import React from "react";
import Button from "../component/Button";

const LogoService = () => {
  const handleClick = (message) => () => alert(message);

  return (
    <div className="w-full">
      {" "}
      {/* Full-width container */}
      <div className="services w-full text-center relative mt-3">
        <div className="blueside absolute transform -rotate-45 -top-14 -left-10">
          <img src="/Vector/bluedot.png" alt="" className="" />
        </div>
        <div className="blueside absolute transform -rotate-6 right-0 -top-11">
          <img src="/Vector/bluedot.png" alt="" className="" />
        </div>
        <div className="heading p-2">
          <span className="text-4xl font-semibold ">
            Professional Logo Design Service - Best Logo Designers
          </span>
          <br />
          <div className="text-lg p-5 text-center  z-10">
            Craft a Distinctive Brand Identity
          </div>
        </div>
        <div className="vector w-40 relative -mt-16 pl-12">
          <img src="/Vector/bluering.png" alt="" />
        </div>
        <div className="description  text-start px-40 ">
          <p className="pb-3 z-10 -mt-9">
            A well-designed logo expresses a brand's identity, history, and core
            principles immediately. Being a top logo design company, we
            specialize in making powerful logos that are both eye-catching and
            emotionally compelling. Our skilled designers use fonts, symbols,
            and creative aspects to create logos that are memorable and increase
            brand awareness and client loyalty.
          </p>
          <p>
            We are known as a leading logo design company in Nepal. With more
            than 5+ years of experience, we offer services for creating unique
            logos that are suited to your requirements. As a reputable logo
            design company in Nepal, we have successfully designed unique logos
            for customers all over the world, making brands memorable and
            helping businesses stand out.
          </p>
        </div>

        {/* Background image section */}
        <div
          className="frame w-full h-[500px]" // Full width and fixed height for the frame
          style={{
            backgroundImage: "url('/graphics/frame.png')",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the full container
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="designer z-40 flex justify-center items-center w-full h-full">
            <img
              src="/graphics/designerLogo.png"
              alt="designerLogo"
              className="h-full w-auto" // Ensures the logo fits the height and scales proportionally
            />
          </div>
          <div className="vector w-40 relative -mt-60 -mr-">
            <img src="/Vector/bluering.png" alt="" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-8 p-6">
          <Button
            label="Request a Quote"
            variant="filled"
            onClick={handleClick("Request a Quote is clicked!")}
          />
          <Button
            label="Our Packages"
            variant="outlined"
            onClick={handleClick("Our Packages is clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoService;
