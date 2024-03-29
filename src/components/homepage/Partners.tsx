import React from "react";
import { Images } from "../../images.js";

const Partners = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 text-center py-[30px] sm:py-10 lg:py-[56px] xl:py-[118px] mb-[60px] sm:my-10 lg:my-0">
        <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase">
          Partners
        </p>
        <p className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal mb-2 lg:px-40 leading-[120%]">
          Recognized by Leading
          <span className="font-semibold"> Healthcare Institutions</span>
        </p>
        <div className="flex justify-center xl:justify-between mt-4 sm:mt-[55px] gap-5 flex-wrap">
          <div className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white duration-300 ease-linear">
            <img
              src={Images.partnerIconOne}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white duration-300 ease-linear">
            <img
              src={Images.partnerIconTwo}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white duration-300 ease-linear">
            <img
              src={Images.partnerIconThree}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white duration-300 ease-linear">
            <img
              src={Images.partnerIconFour}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white duration-300 ease-linear">
            <img
              src={Images.partnerIconFive}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
