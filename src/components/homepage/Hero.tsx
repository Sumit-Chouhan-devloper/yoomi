import React from "react";
import { Images } from "../../images.js";

const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center max-[639.98px]:min-h-[62vh] min-h-[60vh] lg:min-h-screen hero_custom_height">
        <div className="container 2xl:flex 2xl:flex-col 2xl:justify-center xl:max-w-[1140px] mx-auto px-5 xl:px-0 text-center max-[576px]:pt-4 max-[1024px]:pt-8 max-[1440px]:pt-20 max-[1619px]:pt-10 2xl:pt-40">
          <div className="2xl:mt-[-400px]">
            <h1 className="text-[26px] sm:text-5xl md:text-6xl xl:!text-8xl 2xl:!text-[64px] font-normal max-[639.98px]:pt-8 text-black ff_Jakarta sm:px-10 lg:px-36 2xl:px-20 xl:leading-[110%] heading_size_custom">
              <span className="font-extrabold">Next Generation </span> Patient
              Engagement and RTM Solution
              <img
                className="inline-block h-[30px] sm:h-[40px] lg:h-[50px]"
                src={Images.herostar}
                alt="start"
              />
            </h1>
            <p className="text-xs sm:text-2xl font-normal text-black opacity-70 capitalize pt-2 sm:pt-4 para_size_custom hero_text_custom_padding">
              Industry leading AI motion-tracking technology
            </p>
            <form className="w-[340px] sm:w-[429px] h-[45px] sm:h-[57.24px] bg-white rounded-[4px] py-[5px] pr-[5px] pl-4 mt-[15px] sm:mt-[56px] mx-auto flex justify-between hero_input_shadow hero_custom_margin">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white pr-2 w-[70%] focus-visible:outline-none text-sm font-medium text-black placeholder:text-black opacity-70"
                required
              />
              <button className="w-[122px] h-[35px] sm:h-[47px] text-xs sm:text-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-deep-blue shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-deep-blue hover:bg-white duration-300 ease-linear hero_btn_custom_height">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
