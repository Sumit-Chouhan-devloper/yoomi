import React, { useEffect, useState } from "react";
import { ourAdviser } from "../common/Helper";
import { Images } from "../../images.js";
const OurAdvisers = () => {
  const [showLess, setShowLess] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 639) {
      setShowLess(2);
    } else {
      setShowLess(ourAdviser.length);
    }
  }, []);
  return (
    <>
      <div
        className="bg-white pb-6 lg:pb-0 pt-[94px] xl:pt-[120px] relative"
        id="vision"
      >
        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute end-[-4%] bottom-0 sm:bottom-[-6%] lg:bottom-[15%] w-[16%] lg:w-[19%]"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <h2 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal text-center leading-[110%] mb-10 lg:mb-[50px]">
            Our
            <span className="font-semibold"> Advisors</span>
          </h2>

          <div>
            <div className="flex flex-wrap justify-center sm:justify-start">
              {ourAdviser.slice(0, showLess).map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12 w-full max-w-[480px] sm:max-w-[unset]">
                    <div>
                      <div className="my-[10px] sm:m-[10px] group bg-[#E6F0F3] pt-3 pb-3 sm:pb-0 rounded-[5px] sm:min-h-[410px] md:min-h-[440px] xl:min-h-[465px]">
                        <div className="overflow-hidden mx-3 rounded-[5px]">
                          <img
                            className="w-full group-hover:scale-105 transition duration-300"
                            src={OurData.AdvisedCard}
                            alt="team-member"
                          />
                        </div>
                        <div className="md:px-2 lg:px-[10px] xl:px-[30px] rounded-b-[5px] pt-5 pb-5 md:pb-0">
                          <h4 className="text-center text-black text-[24px] font-bold leading-[140%] ff_Jakarta">
                            {OurData.Heading}
                          </h4>
                          <p className="text-center text-black ff_inter text-[24px] font-normal leading-[120%] opacity-70 mb-0">
                            {OurData.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
               <div className="sm:hidden pt-3">
                <button
                  onClick={() => setShowLess(ourAdviser.length)}
                  className=" bg-deep-blue text-white rounded-[5px] h-[47px] w-[130px] text-sm font-semibold ff_inter"
                >
                  Show {showLess === 3 ? "More" : "Less"}
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAdvisers;
