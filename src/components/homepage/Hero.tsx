import React from "react";
const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 text-center max-[576px]:pt-4 max-[1024px]:pt-8 max-[1440px]:pt-20 max-[1619px]:pt-10 min-[1620px]:pt-40">
          <h1 className="text-xl sm:text-5xl min-[1200px]:text-8xl font-normal text-black ff_Jakarta sm:px-10 lg:px-36 min-[1200px]:leading-[55px] animate__animated animate__zoomIn">
            <span className="font-extrabold">Next Generation </span> Patient
            Engagement and RTM Solution<span className="font-semibold">✨</span>
          </h1>
          <p className="text-xs sm:text-2xl font-normal text-black opacity-70 capitalize pt-2 sm:pt-4 animate__animated animate__zoomIn">
            Industry leading AI motion-tracking technology
          </p>
          <form className="w-[340px] sm:w-[429px] h-[45px] sm:h-[56.24px] bg-white rounded-[4px] py-[5px] pr-[5px] pl-4 mt-[15px] sm:mt-[50px] mx-auto flex justify-between hero_input_shadow animate__animated animate__zoomIn">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white pr-2 w-[70%] focus-visible:outline-none text-sm font-medium text-black placeholder:text-black opacity-70"
              required
            />
            <button className="w-[122px] h-[35px] sm:h-[46.2px] text-xs sm:text-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-deep-blue shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-deep-blue hover:bg-white duration-300 ease-linear">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
