import React from "react";
import { ourTeamData } from "../common/Helper";
import Slider from "react-slick";
import { Images } from "../../images.js";
const OurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1.03,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const first = React.useRef<Slider | null>(null);
  return (
    <>
      <div className="bg-[#F5F8FA] lg:pb-[91px] pt-8 pb-6 sm:py-12 lg:pt-[76px] relative">
        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute top-[30%] end-[-13%] z-[0] hidden lg:block w-[19%]"
        />

        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute start-[-10%] xl:bottom-[-3%] lg:bottom-[-2.5%] md:bottom-[-2%]  hidden md:block w-[16%]"
        />
        <img
          src={Images.our_Work_start}
          alt="common-hero-img-1"
          className="absolute top-[40%] start-[-13%] hidden lg:block w-[16%]"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue ff_inter text-xs sm:text-sm font-medium leading-normal text-center uppercase mb-[10px] sm:mb-2">
            OUR team
          </p>
          <h2 className="text-black ff_Jakarta text-[32px] md:text-[36px] lg:text-6xl font-normal text-center leading-[110%] mb-5 sm:mb-[22px]">
            The Amazing Team
            <span className="font-semibold"> Behind Our Company</span>
          </h2>
          <p className="text-black text-center ff_inter text-[20px] sm:text-[24px] font-normal opacity-70 mb-[40px] sm:mb-12">
            We’re a dedicated group of individuals
          </p>
          <div className="hidden sm:block">
            <div className="flex flex-wrap">
              {ourTeamData.map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12">
                    <div>
                      <div className="m-[10px]">
                        <img
                          className="w-full"
                          src={OurData.CardImages}
                          alt="team-member"
                        />
                        <div className="bg-white py-[30px] rounded-b-[5px]">
                          <h4 className="text-center text-black  mb-[6px] text-xl sm:text-[24px] font-bold leading-[140%] ff_Jakarta">
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
            </div>
          </div>
          <div className="sm:hidden relative">
            <img
              src={Images.our_Work_start}
              alt="common-hero-img-1"
              className="absolute bottom-[-30%] w-[25%] start-[-20%]"
            />
            <Slider {...settings} ref={first}>
              {ourTeamData.map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12">
                    <div>
                      <div className="m-[10px]">
                        <img
                          className="w-full"
                          src={OurData.CardImages}
                          alt="team-member"
                        />
                        <div className="bg-white py-[30px] rounded-b-[5px]">
                          <h4 className="text-center text-black  mb-[6px] text-xl sm:text-[24px] font-bold leading-[140%] ff_Jakarta">
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
            </Slider>
          </div>
          <div className="flex gap-[10px] mt-[28px] justify-center sm:hidden">
            <div
              className="slider_arrow h-[25px] w-[25px] flex justify-center items-center transition duration-300 relative rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
              onClick={() => first.current?.slickNext()}
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.05726 1.18284L1.67187 5.56823L6.05726 9.95361"
                  stroke="black"
                  strokeWidth="1.75416"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="slider_arrow h-[25px] w-[25px] flex justify-center items-center relative transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
              onClick={() => first.current?.slickPrev()}
            >
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15953 1.18284L5.54492 5.56823L1.15953 9.95361"
                  stroke="black"
                  strokeWidth="1.75416"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
