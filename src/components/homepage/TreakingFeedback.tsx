import React from "react";
import { Images } from "../../images.js";
const TrackingFeedback = () => {
  return (
    <>
      <div className="relative sm:py-10 lg:py-12">
        <img
          className="absolute hidden md:block md:top-[-15%] lg:top-[-24%] start-0 z-[-1]"
          src={Images.feedbackVectorImg}
          alt="box-img"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 relative">
          <img
            className="absolute hidden md:block md:bottom-[-20%] lg:bottom-[-38%] end-[-10%] z-[-1]"
            src={Images.feedbackVectorImg}
            alt="box-img"
          />
          <div className="flex flex-wrap items-center justify-between xl:h-[550px] CommonCardShado py-8 sm:py-10 lg:py-14 px-4 sm:px-[34px]">
            <div className="lg:w-6/12 mx-auto sm:w-10/12 lg:pe-10 xl:pe-0">
              <img
                className="w-full min-h-[195px] drop-shadow-lg xl:ml-[-20px]"
                src={Images.trackingFeedbackImg}
                alt="tracking"
              />
            </div>
            <div className="lg:w-6/12 xl:ps-[65px]" data-aos="fade-left">
              <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase mb-2 mt-5 lg:mt-0">
                TRACKING
              </p>
              <h3 className="text-black ff_Jakarta lg:text-[32px] md:text-4xl sm:text-[26px] text-[24px] font-normal leading-[120%]">
                Cutting Edge Motion
                <span className="font-semibold"> Tracking/ Feedback</span>
              </h3>
              <div className="flex pt-3 sm:pt-5 xl:pe-6">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 mb-0 text-black">
                  Provides a holistic, real-time analysis of patient exercise
                  form, capturing 300+ data points and critical metrics.
                </p>
              </div>
              <div className="flex pt-[9px] xl:pe-6">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 mb-0 text-black">
                  Delivers immediate feedback and guidance to correct and
                  improve exercise form
                </p>
              </div>
              <div className="flex pt-[9px] xl:pe-6">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4">
                  Supported by the most accurate motion-tracking model designed
                  for rehabilitation, Yoomi Vision
                </p>
              </div>
              <div className="flex lg:mb-[37px] mb-5 pt-[9px]">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 mb-0 text-black">
                  Requires no custom hardware, sensors, or equipment
                </p>
              </div>
              <button className="border-solid border-[2px] border-deep-blue rounded hover:bg-white hover:text-deep-blue duration-300 ease-linear h-[45px] sm:h-[47px] px-4 sm:px-0 sm:w-[180px] bg-deep-blue text-white font-semibold text-xs sm:text-sm">
                Test it Yourself
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingFeedback;
