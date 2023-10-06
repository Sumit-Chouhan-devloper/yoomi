import React from "react";
import { Images } from "../../images.js";

const ReportingAnylats = () => {
  return (
    <>
      <div className="py-7 lg:py-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:h-[550px] CommonCardShado pt-12 pb-10 lg:pb-0 lg:items-center relative">
            <img
              className="absolute bottom-0 start-0 hidden lg:block"
              src={Images.reportingVectorImg}
              alt="cube"
            />
            <div className="lg:w-5/12 lg:ps-[34px] lg:pe-9 px-4">
              <p className="text-deep-blue text-sm font-medium uppercase mb-2 pt-5 sm:pt-0">
                report
              </p>
              <h3 className="text-black ff_Jakarta lg:text-[32px] md:text-4xl sm:text-[26px] text-2xl font-normal sm:mb-5 mb-3 leading-[110%]">
                Reporting +<span className="font-semibold"> Analytics</span>
              </h3>
              <p className="font-normal text-sm opacity-70 sm:mb-9 mb-5 relative">
                Track patient progress over time with compliance, pain, RPE, ROM
                and other key metrics
              </p>
              <button className="rounded hover:bg-transparent hover:text-deep-blue hover:border-deep-blue transition duration-300 sm:h-[51px] sm:w-[171px] px-4 sm:px-0 h-[45px] bg-deep-blue text-white font-semibold text-sm border border-transparent">
                View the Matrics
              </button>
            </div>
            <div className="lg:w-7/12 mx-auto sm:w-10/12">
              <img
                className="w-full min-h-[228px]"
                src={Images.reportingImg}
                alt="tracking"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportingAnylats;
