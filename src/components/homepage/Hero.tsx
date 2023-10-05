import React from "react";
const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 text-center max-[576px]:pt-4 max-[1024px]:pt-8 max-[1440px]:pt-20 max-[1619px]:pt-10 min-[1620px]:pt-40">
          <h1 className="text-xl sm:text-5xl min-[1200px]:text-8xl font-normal text-black ff_Jakarta sm:px-10 lg:px-36 min-[1200px]:leading-[55px]">
            <span className="font-extrabold">Next Generation </span> Patient
            Engagement and RTM Solution<span className="font-semibold">✨</span>
          </h1>
          <p className="text-xs sm:text-2xl font-normal text-black opacity-70 capitalize pt-2 sm:pt-4">
            Industry leading AI motion-tracking technology
          </p>
          <form className="w-[340px] sm:w-[429px] h-[45px] sm:h-[57px] bg-white rounded-[4px] shadow-lg shadow-[0px_4px_15px_0px_rgba(7,103,135,0.15) py-[5px] pr-[5px] pl-[11px] mt-[15px] sm:mt-[50px] mx-auto flex justify-between">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="pr-2 w-[70%] focus-visible:outline-none text-sm font-medium text-black placeholder:text-black opacity-70"
              required
            />
            <button className="w-[122px] h-[35px] sm:h-[45px] text-xs sm:text-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-dark-green shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-dark-green hover:bg-white duration-300 ease-linear">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
