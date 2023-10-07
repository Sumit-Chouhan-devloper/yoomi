import React from "react";
import { Images } from "../../images.js";
import { plateFormData } from "../common/Helper.tsx";

const OurPlatForm = () => {
  return (
    <>
      <div className=" xl:py-[80px] py-[30px] sm:py-10 bg-[#F5F8F9] relative">
        <img
          className="absolute end-0 hidden lg:block top-[2%]"
          src={Images.ourPlateformSide}
          alt="box-group"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase text-center mb-2">
            Platform
          </p>
          <h2 className="ff_Jakarta text-black md:text-[36px] sm:text-5xl text-3xl lg:text-6xl font-normal text-center leading-[110%] mb-4">
            Through<span className="font-semibold"> Our Platform</span>
          </h2>
          <p className="font-normal text-xs sm:text-sm opacity-70 text-center text-black">
            We’ve helped out partners and patients achieve
          </p>
          <div
            className="flex flex-wrap sm:pt-8 pt-7 xl:pt-[60px] max-w-[861px] justify-center mx-auto gap-[24px] sm:gap-0"
            data-aos="zoom-in">
            {plateFormData.map((OurData, i) => {
              return (
                <div className="sm:w-1/2 w-11/12 md:w-4/12" key={i}>
                  <div
                    className={`box sm:py-10 py-8 mx-4 group h-full rounded relative  ${
                      i === 0
                        ? "bg-green px-12"
                        : i === 1
                        ? "bg-skyblue px-3"
                        : "bg-deep-blue sm:mt-8 md:mt-0"
                    }`}>
                    <img
                      className="absolute bottom-0 end-0"
                      src={Images.plateformBoxVacter}
                      alt="box-group"
                    />
                    <h2 className="text-7xl group-hover:scale-110 transition duration-300 text-white leading-[110%] text-center font-semibold">
                      {OurData.heading}
                    </h2>
                    <p className="text-white text-center text-xl font-normal">
                      {OurData.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPlatForm;
