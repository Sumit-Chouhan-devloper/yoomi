import React from "react";
import { Images } from "../../images.js";
const NewsHero = () => {
  return (
    <div className="bg-light-sky translate-y-[-15%] z-0">
      <div className="relative translate-y-[50%]">
        <div className="bg-deep-blue w-full h-[25px] absolute top-[50%] translate-y-[-50%] pointer-events-none"></div>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 relative z-10">
          <div className="bg-white rounded-[32px] shadow-lg shadow-[0px_26px_27px_0px_rgba(0, 0, 0, 0.04)] min-h-[215px] sm:min-h-[276px] flex justify-center items-center flex-col relative">
            <img
              src={Images.commonIcon}
              alt="common-hero-img-1"
              className="absolute bottom-0 start-0 sm:block hidden pointer-events-none"
            />
            <img
              src={Images.commonIcon}
              alt="common-hero-img-1"
              className="absolute bottom-[5px] start-0 sm:hidden w-[45px] h-[43px] pointer-events-none"
            />
            <img
              src={Images.commonIcon2}
              alt="common-hero-img-2"
              className="absolute bottom-0 end-0 sm:block hidden pointer-events-none"
            />
            <img
              src={Images.commonIcon2}
              alt="common-hero-img-2"
              className="absolute bottom-0 end-0 sm:hidden w-[40px] h-[43px] pointer-events-none"
            />
            <h2 className="uppercase font-medium text-xs sm:text-sm text-deep-blue">
              Latest News
            </h2>
            <h3 className="text-[32px] sm:text-6xl text-black text-center ff_Jakarta">
              News &<span className="font-semibold"> Updates</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
