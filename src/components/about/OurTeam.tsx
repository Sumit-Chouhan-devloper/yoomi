import React, { useEffect, useState } from "react";
import { ourTeamData } from "../common/Helper";
import { Images } from "../../images.js";
const OurTeam = () => {
  const [showLess, setShowLess] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 639) {
      setShowLess(3);
    } else {
      setShowLess(ourTeamData.length);
    }
  }, []);

  return (
    <>
      <div
        className="bg-[#F5F8FA] lg:pb-[91px] py-10 sm:py-12 lg:pt-[76px] relative"
        id="team"
      >
        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute top-[30%] end-[-10%] z-[0] hidden lg:block w-[19%]"
        />

        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute z-10 bottom-[-8%] sm:bottom-[-3%] start-[-4%] md:start-[-10%] xl:bottom-[-3%] lg:bottom-[-2.5%] md:bottom-[-2%]  w-[16%]"
        />
        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute top-[52%] start-[-13%] hidden lg:block w-[16%]"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue ff_inter text-xs sm:text-sm font-medium leading-normal text-center uppercase mb-[10px] sm:mb-[6px]">
            OUR team
          </p>
          <h2 className="text-black ff_Jakarta text-[32px] lg:text-6xl font-normal text-center leading-[110%] mb-4 sm:mb-[14px]">
            The Amazing Team
            <span className="font-semibold">Behind Our Company</span>
          </h2>
          <p className="text-black text-center ff_inter text-sm sm:text-[24px] font-normal opacity-70 mb-[40px]">
            We’re a dedicated group of individuals
          </p>
          <div>
            <div className="flex flex-wrap">
              {ourTeamData.slice(0, showLess).map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12">
                    <div>
                      <div className="mx-[11px] bg-white my-[10px] px-3 pt-3 group transition duration-300 rounded-[5px]">
                        <div>
                          <div className="overflow-hidden rounded-[5px]">
                            <img
                              className="w-full group-hover:scale-105 rounded-b-[5px] transition duration-300"
                              src={OurData.CardImages}
                              alt="team-member"
                            />
                          </div>
                        </div>
                        <div className="py-[15px] rounded-b-[5px]">
                          <h4 className="text-center text-black  text-xl sm:text-[24px] font-bold leading-[140%] ff_Jakarta">
                            {OurData.Heading}
                          </h4>
                          <p className="text-center text-black ff_inter text-xl sm:text-[24px] font-normal leading-normal opacity-90 mb-0">
                            {OurData.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="sm:hidden">
                <button
                  onClick={() => setShowLess(ourTeamData.length)}
                  className=" bg-deep-blue text-white rounded-[5px] h-[47px] w-[130px] text-sm font-semibold ff_inter"
                >
                  Show {showLess === 3 ? "More" : "Less"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
