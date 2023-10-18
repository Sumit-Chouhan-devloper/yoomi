import React from "react";
import { StartNews } from "../common/Helper";
const NewsStart = () => {
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 md:mt-[230px] mt-[150px]">
        {StartNews.map((data, i) => {
          return (
            <div
              className="flex md:items-center justify-between flex-wrap border border-[rgba(0,0,0,0.10)] rounded mb-[36px]"
              key={i}
            >
              <div className="lg:w-4/12 md:w-5/12 w-full">
                <img src={data.newsImage} alt="news" className="w-full" />
              </div>
              <div className="lg:w-7/12 md:w-7/12 w-full lg:ps-0 md:ps-5 sm:p-[14px] p-[10px] pb-[14px]">
                <p className="text-[#000] lg:text-[32px] text-[28px] font-normal leading-[120%] lg:mb-4 mb-[11px]">
                  Yoomi and Rutger’s partner to Improve{" "}
                  <span className=" font-semibold">
                    physical therapy adherence
                  </span>
                </p>
                <p className="lg:mb-[34px] mb-[25px] text-sm font-normal opacity-70 leading-[150%]">
                  Yoomi and Rutgers Robert Wood Johnson Medical School explore
                  how technology can mobilize patients effectively in physical
                  therapy programs.
                </p>
                <div className="flex items-center">
                  <button className="flex justify-center items-center overflow-hidden h-[47px] w-[122px] text-sm text-white font-semibold rounded-[4px] bg-[#076787] border-solid border-[2px] border-[#076787] duration-300 ease-linear hover:text-[#076787]  hover:bg-white">
                    Marketting
                  </button>
                  <p className="sm:text-sm text-[15px] font-normal leading-[normal] text-[#000] ms-[21px]">
                    January 5, 2023
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsStart;
