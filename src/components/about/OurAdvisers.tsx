import React from "react";
import { ourAdviser } from "../common/Helper";
import Slider from "react-slick";
const OurAdvisers = () => {
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
      <div className="bg-white lg:pb-[142px] py-12 lg:pt-[120px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <h2 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal text-center leading-[110%] mb-5 lg:mb-[50px]">
            Our
            <span className="font-semibold">Advisors</span>
          </h2>

          <div className="hidden sm:block">
            <div className="flex flex-wrap">
              {ourAdviser.map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12 h-full">
                    <div>
                      <div className="m-[10px]">
                        <img
                          className="w-full"
                          src={OurData.AdvisedCard}
                          alt="team-member"
                        />
                        <div className="bg-[#E6F0F3] py-[30px] px-8">
                          <h4 className="text-center text-black mb-[6px] text-[24px] font-bold leading-[140%] ff_Jakarta">
                            {OurData.Heading}
                          </h4>
                          <p className="text-center text-black ff_inter text-[24px] font-normal leading-normal opacity-70 mb-0">
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
          <div className="sm:hidden">
            <Slider {...settings} ref={first}>
              {ourAdviser.map((OurData, i) => {
                return (
                  <div key={i} className="lg:w-4/12 sm:w-6/12">
                    <div>
                      <div className="m-[10px]">
                        <img
                          className="w-full"
                          src={OurData.AdvisedCard}
                          alt="team-member"
                        />
                        <div className="bg-[#E6F0F3] py-[30px]">
                          <h4 className="text-center text-black  mb-[6px] text-[24px] font-bold leading-[140%] ff_Jakarta">
                            {OurData.Heading}
                          </h4>
                          <p className="text-center text-black ff_inter text-[24px] font-normal leading-normal opacity-70 mb-0">
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
              onClick={() => first.current?.slickNext()}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
              onClick={() => first.current?.slickPrev()}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
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

export default OurAdvisers;
