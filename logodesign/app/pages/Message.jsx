"use client";
import React from "react";
import Button from "../component/Button";

const Message = () => {
  const handleClick = (message) => () => alert(message);
  return (
    <div className="bg-black flex justify-between flex-col md:flex-row items-center relative w-full">
      {/* Image Section */}
      <div className="img flex px-7 w-2/5">
        <img
          src="/graphics/meeting.png"
          alt="Meeting Graphic"
          className="w-full h-auto max-h-72 md:max-h-96 object-contain" // Responsive image
        />
      </div>

      {/* Text Section */}
      <div className="text-white w-3/5 relative z-10 flex flex-col">
        <h1 className="text-3xl">What Can WE Do For You?</h1>
        <p className="mt-4">
          We would be happy to discuss the project with you in person.
        </p>
        <div className="cal flex flex-wrap lg:gap-[25%] md:gap-[15%] gap-10 py-6 mt-5 justify-start items-center">
          <p>Call Us: +977 9703958747</p>
          <Button
            label="Drop In A Message"
            variant="filled"
            onClick={handleClick("Drop in a Message is clicked!")}
          />
        </div>
      </div>

      {/* Vector Graphics Section - Hidden on small screens */}
      <div className="vector animated-image absolute right-0 top-0 bottom-0 h-full w-3/5 z-0 hidden md:block overflow-hidden">
        <div className="relative flex flex-col items-end justify-center w-auto h-full mr-8">
          {/* Blue Ring */}
          <img
            src="/Vector/bluering.png"
            alt="Blue Ring"
            className="max-h-1/3 max-w-1/3 md:max-h-1/2 md:max-w-1/2 object-contain"
          />
          {/* Blue Dot */}
          <img
            src="/vector/bluedot.png"
            alt="Blue Dot"
            className="transform rotate-180 max-h-1/3 max-w-1/3 md:max-h-1/2 md:max-w-1/2 object-contain mr-12"
          />
        </div>

        {/* Blue Side Footer */}
        <div className="side flip-x absolute bottom-0 right-0 overflow-hidden">
          <img
            src="/Vector/bluesidefooter.png"
            alt="Blue Side Footer"
            className="max-h-96 md:max-h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
