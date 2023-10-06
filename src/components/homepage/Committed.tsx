import React from "react";
import { Images } from "../../images.js";
const Committed = () => {
  return (
    <>
      <div className=" lg:py-[83px] py-7">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-center lg:justify-between w-full items-center">
            <div className="lg:w-5/12">
              <p className="text-deep-blue text-sm font-medium uppercase mb-2 lg:mb-0">
                The Best for you
              </p>
              <h3 className="text-black md:text-[36px] sm:text-5xl text-3xl lg:text-6xl ff_Jakarta  mb-4 font-normal leading-[120%]">
                Committed to Industry-Standard
                <span className="font-semibold"> Compliance and Safety</span>
              </h3>
              <p className="font-normal text-sm opacity-70 lg:pe-5">
                Yoomi has signed the American Physical Therapy Association
                Digital Transparency pledge, illustrating our commitment to the
                fact that digital "physical therapy" services are only performed
                or directed by licensed physical therapists in accordance with
                all regulations and APTA’s Standards of Practice for Physical
                Therapy.
              </p>
            </div>
            <div className="xl:w-5/12 lg:w-6/12">
              <div className="flex lg:items-center flex-col md:flex-row mt-9 lg:mt-0">
                <div className="md:me-[34px] sm:flex lg:flex-col md:gap-0 sm:gap-[34px]">
                  <div className="h-[208px] shadow-lg shadow-[0px 26px 27px 0px rgba(0, 0, 0, 0.04), 0px -16px 27px 0px rgba(0, 0, 0, 0.04)] flex justify-center items-center w-[208px] rounded bg-white border border-solid border-[#E6F0F3] hover:shadow-[unset] duration-300 ease-linear">
                    <img src={Images.committedLogoHippa} alt="logo" />
                  </div>
                  <div className="h-[208px] shadow-lg shadow-[0px 26px 27px 0px rgba(0, 0, 0, 0.04), 0px -16px 27px 0px rgba(0, 0, 0, 0.04)] lg:mt-[34px] mt-[34px] sm:mt-0 md:ms-[34px] lg:ms-0 flex justify-center items-center w-[208px] rounded bg-white border border-solid border-[#E6F0F3] hover:shadow-[unset] duration-300 ease-linear">
                    <img src={Images.committedLogoFda} alt="logo" />
                  </div>
                </div>
                <div className="flex justify-center mt-[34px] md:mt-0">
                  <div className="h-[208px] shadow-lg shadow-[0px 26px 27px 0px rgba(0, 0, 0, 0.04), 0px -16px 27px 0px rgba(0, 0, 0, 0.04)] w-[208px] flex justify-center items-center rounded bg-white border border-solid border-[#E6F0F3] hover:shadow-[unset] duration-300 ease-linear">
                    <img src={Images.committedLogoApta} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committed;
