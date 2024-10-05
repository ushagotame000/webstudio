"use client";
import React from "react";
import Button from "../component/Button";

const LogoDesign = () => {
  const handleClick = (message) => () => alert(message);

  return (
    <div className="text-justify">
      <div
        className="w-full h-screen flex flex-col justify-between text-center"
        style={{
          backgroundImage: "url('/LogoDesignCompany.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-10">
          <span className="text-4xl">
            Logo Design Company Nepal - Best Logo Designers{" "}
          </span>
          <div className="m-5 pl-2 pr-2 text-justify ">
            Being a top logo design company in Nepal and a professional logo
            design company we specialize in making unique and standout logos for
            companies of all kinds. Our skilled logo designers have created
            unique logos for global small and large businesses in a variety of
            sectors, including real estate , technology, fashion, hospitality,
            food, and education. We provide a variety of packages for our custom
            logo design services that adjust to the unique requirements of each
            company. Get in touch with us to go over the specifications for your
            brand and collaborate with the top logo designers in the business.
          </div>
          <div className="img w-full h-auto">
            <img src="/graphics/BestLogoDesigners.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center pb-10">
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
