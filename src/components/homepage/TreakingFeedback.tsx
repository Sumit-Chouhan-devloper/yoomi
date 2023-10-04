import React from "react";
import check_icon from "../assets/images/svg/check_icon.svg";
import tracking_img from "../assets/images/webp/tracking-main-img.webp";
import box_img from "../assets/images/png/feedback_top-vecter.png"
const TrackingFeedback = () => {
  return (
    <>
      <section className="relative sm:py-12 py-8">
        <img className="absolute hidden lg:block top-[-24%] start-0 z-[-1]" src={box_img} alt="box-img" />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 relative">
        <img className="absolute hidden lg:block bottom-[-38%] end-[-10%] z-[-1]" src={box_img} alt="box-img" />
          <div className="flex flex-wrap items-center common_card_shado py-10 lg:py-14">
            <div className="lg:w-6/12 mx-auto sm:w-10/12 lg:pe-5">
                <img className="w-full min-h-[195px]" src={tracking_img} alt="tracking" />
            </div>
            <div className="lg:w-6/12 px-4">
              <p className="ff_Jakarta text-deep-blue text-sm font-semibold uppercase mb-0">
                TRACKING
              </p>
              <h3 className="text-black text-4xl sm:text-5xl font-normal leading-[120%]">
                Cutting Edge Motion
                <span className="font-semibold"> Tracking/ Feedback</span>
              </h3>
              <div className="flex pt-5 lg:pe-20">
                <img src={check_icon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4 mb-0">
                  Provides a holistic, real-time analysis of patient exercise
                  form, capturing 300+ data points and critical metrics.
                </p>
              </div>
              <div className="flex pt-[9px]  lg:pe-20">
                <img src={check_icon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4 mb-0">
                  Delivers immediate feedback and guidance to correct and
                  improve exercise form
                </p>
              </div>
              <div className="flex pt-[9px]  lg:pe-20">
                <img src={check_icon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4">
                  Supported by the most accurate motion-tracking model designed
                  for rehabilitation, Yoomi Vision
                </p>
              </div>
              <div className="flex pb-9 pt-[9px]">
                <img src={check_icon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4 mb-0">
                  Requires no custom hardware, sensors, or equipment
                </p>
              </div>
              <button className="common_button">Test it Yourself</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackingFeedback;
