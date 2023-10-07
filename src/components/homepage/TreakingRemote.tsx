import React from "react";
import { Images } from "../../images.js";
const TreakingRemote = () => {
  return (
    <>
      <div className="relative py-[30px] sm:py-10 lg:pt-12 xl:pb-[166px]">
        <img
          className="absolute hidden md:block bottom-[4%] start-0 z-[-1]"
          src={Images.feedbackVectorImg}
          alt="box-img"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap items-center xl:h-[550px] px-4 sm:px-[34px] CommonCardShado py-10  xl:py-[87px] justify-center lg:justify-start">
            <div className="lg:w-6/12 mx-auto sm:w-10/12">
              <img
                className="w-full min-h-[207px] drop-shadow-lg"
                src={Images.trackingImg}
                alt="tracking"
              />
            </div>
            <div className="lg:w-6/12 lg:px-4 lg:ps-12 lg:pb-12">
              <p className="text-deep-blue text-sm font-medium uppercase mb-2 pt-5 md:pt-0">
                TRACKING
              </p>
              <h3 className="text-black ff_Jakarta lg:text-[32px] md:text-4xl sm:text-[26px] text-2xl font-normal sm:mb-4 mb-3 leading-[110%] lg:pe-12">
                Remote Therapeutic
                <span className="font-semibold mb-0">
                  Monitoring + Billing
                </span>
              </h3>
              <p className="font-normal text-sm opacity-70 sm:mb-8 mb-5 text-black">
                Enhance patient care with remote monitoring, and enable
                providers to generate over $160 per patient per month in
                additional revenue
              </p>
              <button className="border-solid border-[2px] border-deep-blue rounded hover:bg-white hover:text-deep-blue duration-300 ease-linear h-[51px] px-4 bg-deep-blue text-white font-semibold text-sm">
                Check Out the Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreakingRemote;
