import React from 'react'
import { Images } from "../../images.js";
const OurMission = () => {
  return (
    <>
     <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 py-[95px] xl:py-[145px]" id='mission'>
          <div className="bg-white sm:px-4 md:px-8 lg:px-0 rounded-[32px] commited_card min-h-[388px] sm:min-h-[366px] flex justify-center items-center flex-col relative">
            <img
              src={Images.commonIcon2}
              alt="common-hero-img-2"
              className="absolute bottom-0 end-0 w-[13%]"
            />
              <img
              src={Images.our_Work_start}
              alt="common-hero-img-1"
              className="absolute top-[-10%] sm:top-[unset] sm:bottom-[-20%] lg:bottom-[-30%] z-[-1] start-[-11%] w-[22%]"
            />
            <div className="max-w-[793px] mx-auto px-[30px]">
              <p className="uppercase font-medium text-xs text-center sm:text-sm text-deep-blue mb-[10px] sm:mb-2">
              OUR MISSION
              </p>
              <h2 className="text-[32px] leading-none px-4 lg:text-6xl text-center font-normal mb-5 sm:mb-[22px] text-black ff_Jakarta xl:leading-[110%]">
              Our
                <span className="font-semibold"> Mission </span>
              </h2>
              <p className="ff_inter text-black text-sm font-normal leading-[167%] opacity-70 text-center">
              Yoomi is a digital health company with a vision of improving the standard of care in physical therapy. Our goal is to enhance the capabilities of physical therapists by providing patients with an exciting and interactive experience to improve rehabilitation outcomes.
              </p>
            
            </div>
          </div>
        </div>
    </>
  )
}

export default OurMission