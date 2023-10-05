import React from "react";
import { Images } from "../../images.js";
const TreakingRemote = () => {
  return (
    <>
      <div className="relative pb-12 sm:py-12">
        <img
          className="absolute hidden lg:block bottom-[4%] start-0 z-[-1]"
          src={Images.feedbackVectorImg}
          alt="box-img"
        />
        <div className="container lg:mb-12 xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap items-center CommonCardShado py-10 lg:py-14 justify-center lg:justify-start">
            <div className="lg:w-6/12 mx-auto sm:w-10/12">
              <img
                className="w-full min-h-[207px]"
                src={Images.trackingImg}
                alt="tracking"
              />
            </div>
            <div className="lg:w-6/12 px-4 lg:ps-12">
              <p className="text-deep-blue text-sm font-medium uppercase mb-2 pt-5 sm:pt-0">
                TRACKING
              </p>
              <h3 className="text-black lg:text-[32px] md:text-4xl sm:text-[26px] text-2xl font-normal sm:mb-5 mb-3 leading-[110%] lg:pe-12">
                Remote Therapeutic
                <span className="font-semibold"> Monitoring + Billing</span>
              </h3>
              <p className="font-normal text-sm opacity-70 sm:mb-9 mb-5">
                Enhance patient care with remote monitoring, and enable
                providers to generate over $160 per patient per month in
                additional revenue
              </p>
              <button className="rounded hover:bg-transparent hover:text-deep-blue hover:border-deep-blue transition duration-300 h-[51px] px-4 bg-deep-blue text-white font-semibold text-sm border border-transparent">
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
