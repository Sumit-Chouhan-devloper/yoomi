import React from "react";
import { ourTeamData } from "../common/Helper.tsx";
import { Images } from "../../images.js";
const OurTeam = () => {
  return (
    <>
      <div className="bg-[#F5F8FA]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 py-14">
          <p className="text-deep-blue ff_inter text-sm font-medium leading-normal text-center uppercase">
            OUR team
          </p>
          <h2 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal text-center leading-[110%] mb-[22px]">
            The Amazing Team
            <span className="font-semibold"> Behind Our Company</span>
          </h2>
          <p className="text-black text-center ff_inter text-[24px] font-normal opacity-70">
            We’re a dedicated group of individuals
          </p>
      
           <div className="flex flex-wrap">{ourTeamData.map((OurData, i) => {
              return (
                <div key={i} className="lg:w-3/12 md:w-4/12 sm:w-6/12">
                  <div className="px-[10px]">
                      <div>
                        <img src={Images.ourTeamCard1} alt="team-member" />
                        <div className="bg-white">
                            <h4 className="text-center text-black text-[24px] font-bold leading-[140%] ff_Jakarta">{OurData.Heading}</h4>
                            <p className="text-center">{OurData.para}</p>
                        </div>
                      </div>
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

export default OurTeam;
