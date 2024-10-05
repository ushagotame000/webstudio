"use client";
import React from "react";
import Button from "../component/Button";

const Blog = () => {
  const handleClick = (message) => () => alert(message);

  return (
    <div className="bg-black text-white flex flex-col md:flex-row border-y-8 border-x-white">
      <div className="imgsection flex w-full md:w-1/2 justify-center border-y-8 border-x-white relative">
        <div className="side ml-20 align-bottom h-full">
          <img src="/footerSide.png" alt="" className="animated-image" />
        </div>
        <div className="main relative z-10 rounded-md overflow-hidden h-auto">
          <img src="/footerMain.png" alt="" />
          {/* Button positioned at the bottom right of footerMain */}
          <div className="bg-slate-900 absolute bottom-0 right-0 p-3 md:p-5 rounded-t-2xl  md:w-auto">
            {/* Adjusting width for responsiveness */}
            <Button
              label="Read Blog Post"
              variant="filled"
              onClick={handleClick("Read Blog Post is clicked!")}
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="description border-y-8 border-x-white w-full md:w-1/2  flex flex-col justify-center text-justify px-14">
        <p className="text-3xl font-semibold mb-4">FROM OUR BLOG</p>
        <p className="text-xl font-bold mb-4">
          12 Modern Logo Design Trends for 2024
        </p>
        <p className="text-sm leading-relaxed text-justify ">
          Being the top SEO company in Nepal, we provide customized search
          engine optimization services that are made to fit your specific
          demands, whether you run a small business or a larger corporation. Our
          SEO strategies are based on in-depth analysis of SEO algorithms and a
          great deal of study, guaranteeing that we offer practical ways to
          improve your online presence. With our in-depth knowledge of SEO in
          Nepal, we can help you accomplish your company's objectives and
          increase targeted traffic to your website.
        </p>
      </div>
    </div>
  );
};

export default Blog;
