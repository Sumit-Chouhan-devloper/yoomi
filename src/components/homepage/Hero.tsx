import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 text-center">
        <h1 className="text-8xl font-normal text-black ff_Jakarta px-36 leading-[55px]">
          <span className="font-extrabold">Next Generation </span> Patient
          Engagement and RTM Solution<span className="font-semibold">✨</span>
        </h1>
        <p className="text-2xl font-normal text-black opacity-70 capitalize pt-4">
          Industry leading AI motion-tracking technology
        </p>
        <form className="w-[429px] h-[57px] bg-white rounded-[4px] shadow-lg shadow-[0px_4px_15px_0px_rgba(7,103,135,0.15) py-[5px] pr-[5px] pl-[11px] mt-[50px] mx-auto flex justify-between">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[70%] focus-visible:outline-none text-sm font-medium text-black opacity-70"
            required
          />
          <button className="w-[122px] h-[45px] font-sm font-semibold text-white rounded-[4px] bg-dark-green shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)]">
            Get Started
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
