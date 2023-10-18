import React from "react";
import { Images } from "../../images.js";
const AboutHero = () => {
  return (
    <div className="bg-light-sky translate-y-[-15%] z-0">
      <div className="relative translate-y-[25%] sm:translate-y-[35%]">
        <img
          src={Images.commonIcon}
          alt="common-hero-img-1"
          className="absolute sm:hidden start-0 top-[16%] z-[11] w-[13%]"
        />
        <div className="bg-deep-blue w-full h-[25px] absolute top-[50%] translate-y-[-50%]"></div>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 relative z-10">
          <div className="bg-white px-[6px] sm:px-4 md:px-8 lg:px-0 rounded-[32px] shadow-lg shadow-[0px_26px_27px_0px_rgba(0, 0, 0, 0.04)] min-h-[606px] sm:min-h-[432px] flex justify-center items-center flex-col relative">
            <img
              src={Images.commonIcon}
              alt="common-hero-img-1"
              className="absolute bottom-0 start-0 w-[13%]"
            />

            <img
              src={Images.commonIcon2}
              alt="common-hero-img-2"
              className="absolute bottom-0 end-0 w-[13%]"
            />
            <div className="max-w-[793px] mx-auto">
              <p className="uppercase font-medium text-xs text-center sm:text-sm text-deep-blue mb-[10px] sm:mb-2">
                About us
              </p>
              <h2 className="text-[32px] leading-none px-4 lg:text-6xl text-center font-normal mb-5 sm:mb-[22px] text-black ff_Jakarta xl:leading-[110%]">
                Our story starts
                <span className="font-extrabold"> with you </span>
                <img
                  className="inline-block h-[30px] sm:h-[40px] lg:h-[50px]"
                  src={Images.herostar}
                  alt="start"
                />
              </h2>
              <p className="ff_lexend text-black text-sm font-normal leading-normal opacity-70 text-center mb-4">
                Our CEO Ben grew up playing soccer his whole life. In his senior
                year of high school he tore 3 ligaments in his ankle. He went
                through physical therapy, but was never able to fully recover
                and play the sport he loved in college due to a
                <span className="font-semibold">
                  {" "}
                  poor physical therapy experience.
                </span>
              </p>
              <p className="ff_lexend text-black text-sm font-normal leading-normal opacity-70 text-center">
                effectively supports patients, while providing physical{" "}
                <span className="font-semibold">therapists with the tools</span>{" "}
                and data they need to improve care. The goal is to ensure that
                no patients goes through the experience Ben and others go
                through again, and become the{" "}
                <span className="font-semibold">
                  go-to solution for physical therapy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
