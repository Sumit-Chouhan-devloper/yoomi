import React from "react";
import { Images } from "../../images.js";

const Partners = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 text-center sm:py-10 py-[30px] lg:py-[56px] xl:py-[118px]">
        <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase pt-5 sm:pt-0">
          Partners
        </p>
        <p className="text-black ff_Jakarta text-[20px] sm:text-6xl font-normal mb-2 lg:px-40 leading-[120%]">
          Recognized by Leading
          <span className="font-semibold"> Healthcare Institutions</span>
        </p>
        <div className="flex justify-center min-[1025px]:justify-between] mt-4 sm:mt-[55px] gap-5 flex-wrap">
          <div
            className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white hover:shadow-[unset] duration-300 ease-linear"
            data-aos="zoom-in">
            <img
              src={Images.partnerIconOne}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div
            className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white hover:shadow-[unset] duration-300 ease-linear"
            data-aos="zoom-in">
            <img
              src={Images.partnerIconTwo}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div
            className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white hover:shadow-[unset] duration-300 ease-linear"
            data-aos="zoom-in">
            <img
              src={Images.partnerIconThree}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div
            className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white hover:shadow-[unset] duration-300 ease-linear"
            data-aos="zoom-in">
            <img
              src={Images.partnerIconFour}
              alt="partner-icon-1"
              className="w-[50%] sm:w-[100px]"
            />
          </div>
          <div
            className="mt-2sm:mt-4 flex justify-center items-center w-[150px] sm:w-[207px] h-[110px] sm:h-[137px] rounded-[4px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.10)] shadow-lg shadow-[0px_13px_18px_0px_rgba(0, 0, 0, 0.06)] bg-white hover:shadow-[unset] duration-300 ease-linear"
            data-aos="zoom-in">
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
