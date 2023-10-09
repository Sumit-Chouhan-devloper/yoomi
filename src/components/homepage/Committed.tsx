import React from "react";
import { Images } from "../../images.js";
const Committed = () => {
  return (
    <>
      <div className="lg:py-[104px] xl:pt-[123px] py-[30px] sm:py-10">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-center lg:justify-between w-full items-center">
            <div className="lg:w-5/12" data-aos="fade-right">
              <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase mb-[9px] leading-normal">
                The Best for you
              </p>
              <h3 className="text-black md:text-[36px] sm:text-5xl text-3xl lg:text-6xl ff_Jakarta  mb-4 font-normal leading-[120%]">
                Committed to Industry-Standard
                <span className="font-semibold"> Compliance and Safety</span>
              </h3>
              <p className="font-normal text-xs sm:text-sm opacity-70 lg:pe-5 text-black">
                Yoomi has signed the American Physical Therapy Association
                Digital Transparency pledge, illustrating our commitment to the
                fact that digital "physical therapy" services are only performed
                or directed by licensed physical therapists in accordance with
                all regulations and APTA’s Standards of Practice for Physical
                Therapy.
              </p>
            </div>
            <div className="xl:w-5/12 lg:w-6/12" data-aos="fade-left">
              <div className="flex lg:items-center  flex-col md:flex-row mt-9 lg:mt-0">
                <div className="md:me-[34px] sm:flex lg:flex-col md:gap-0 sm:gap-[34px]">
                  <div className="h-[170px] w-[170px] sm:h-[208px] sm:w-[208px] flex justify-center items-center commited_card rounded bg-white border border-solid border-[#E6F0F3] duration-300 ease-linear">
                    <img src={Images.committedLogoHippa} alt="logo" />
                  </div>
                  <div className="sm:h-[208px] h-[170px] w-[170px] lg:mt-[34px] mt-6 sm:mt-0 md:ms-[34px] commited_card lg:ms-0 flex justify-center items-center sm:w-[208px] rounded bg-white border border-solid border-[#E6F0F3] duration-300 ease-linear">
                    <img src={Images.committedLogoFda} alt="logo" />
                  </div>
                </div>
                <div className="flex justify-center mt-6 sm:mt-[34px] md:mt-0">
                  <div className="sm:h-[208px] h-[170px] w-[170px] sm:w-[208px] flex justify-center commited_card items-center rounded bg-white border border-solid border-[#E6F0F3] duration-300 ease-linear">
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
