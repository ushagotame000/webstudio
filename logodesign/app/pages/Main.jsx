"use client";
import React from "react";
import Button from "../component/Button";

const Main = () => {
  const handleClick = (message) => () => alert(message);

  return (
    <div
      className="main text-center text-white h-screen relative"
      style={{
        height: "80vh",
        backgroundColor: "#000033",
      }}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: "url('/Main.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "  ",
          opacity: 0.2,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="heading font-bold text-4xl mt-10">PROFESSIONAL</div>
        <div className="heading font-bold text-4xl">LOGO DESIGN SERVICES</div>

        <span className="mt-2">
          Make a Memorable Impact with Your First Impression
        </span>

        <div className="description m-4 text-lg max-w-3xl">
          <span>
            WebStudio Nepal is a leading software development company in Nepal,
            recognized as one of the best IT companies in the country. As a top
            tech company in Nepal, we offer top-tier custom software development
            tailored for startups, small-to-midsize businesses (SMBs), and large
            enterprises.
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-10 justify-center p-6 mt-4">
          <Button
            label="Quick Enquiry"
            variant="filled"
            onClick={handleClick("Quick Enquiry clicked!")}
          />
          <Button
            label="See Our Work"
            variant="outlined"
            onClick={handleClick("See Our Work clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
