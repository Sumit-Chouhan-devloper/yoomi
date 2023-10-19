import React from "react";
import { Images } from "../../images.js";
const ContactHero = () => {
  return (
    <div className="bg-light-sky sm:translate-y-[-15%] translate-y-[-35%] z-10">
      <div className="relative translate-y-[50%] z-20">
        <div className="bg-deep-blue w-full h-[25px] absolute top-[50%] translate-y-[-50%] pointer-events-none"></div>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 relative z-10">
          <div className="bg-white rounded-[32px] shadow-[0px_26px_27px_0px_rgba(0,0,0,0.04)] min-h-[215px] sm:h-[340px] flex justify-center items-center flex-col relative h-[364px] px-5">
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
            <h2 className="uppercase font-medium text-xs sm:text-sm text-deep-blue mb-1">
              Lets work together
            </h2>
            <h3 className="text-[30px] sm:text-6xl text-black text-center ff_Jakarta md:mb-[33px] mb-5 leading-[110%] px-[29px]">
              How Can We<span className="font-semibold"> Help You?</span>
            </h3>
            <p className=" text-center text-[#000] text-sm font-normal leading-[150%] opacity-70 max-w-[633px]">
              Hoping to have a question answered? Curious about using Yoomi for
              your practice?
            </p>
            <p className=" text-center text-[#000] text-sm font-normal leading-[150%] opacity-70 max-w-[633px] px-[29px]">
              Reach out to our team for a quick response!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
