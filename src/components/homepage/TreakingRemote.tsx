import React from "react";
import tracking_img from "../../assets/images/webp/tracking-with-graff.webp";
import box_img from "../../assets/images/png/feedback_top-vecter.png";
const TreakingRemote = () => {
  return (
    <>
      <section className="relative py-8 sm:py-12 mb-40">
        <img
          className="absolute hidden lg:block bottom-[-10%] start-0 z-[-1]"
          src={box_img}
          alt="box-img"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap items-center common_card_shado py-10 lg:py-14 justify-center lg:justify-start">
            <div className="lg:w-6/12 mx-auto sm:w-10/12">
              <img
                className="w-full min-h-[207px]"
                src={tracking_img}
                alt="tracking"
              />
            </div>
            <div className="lg:w-6/12 px-4 lg:ps-12">
              <p className="ff_Jakarta text-deep-blue text-sm font-semibold uppercase mb-2 pt-5 sm:pt-0">
                TRACKING
              </p>
              <h3 className="text-black text-4xl sm:text-5xl font-normal sm:mb-5 mb-3 leading-[110%] lg:pe-12">
                Remote Therapeutic
                <span className="font-semibold"> Monitoring + Billing</span>
              </h3>
              <p className="font-normal text-sm opacity-70 mb-5 sm:mb-9">
                Enhance patient care with remote monitoring, and enable
                providers to generate over $160 per patient per month in
                additional revenue
              </p>
              <button className="common_button">Check Out the Demo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreakingRemote;
