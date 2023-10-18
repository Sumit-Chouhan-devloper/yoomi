import React from "react";
import { Images } from "../../images";
import Slider from "react-slick";
import { aboutUsSlider } from "../common/Helper.tsx";
import SignUp from "../common/SignUp.tsx";
const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const thirdSlider = React.useRef<Slider | null>(null);

  return (
    <>
      <div className="lg:pt-0 xl:pt-[73.3px] pb-5 relative" id="about-us">
        <img
          className=" absolute top-0 left-0 sm:w-24 md:w-28 xl:w-40 -z-10"
          src={Images.yomiAboutPlusICO}
          alt="Your Browser is Not Support This Formate"
        />
        <img
          className="absolute bottom-[38%] right-[0px] translate-x-[0%] sm:w-24 md:w-28 xl:w-40 min-w-[100px] max-w-[6%] "
          src={Images.yomiAboutPlusICOsec}
          alt="Your Browser is Not Support This Formate"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 items-center">
          <h3 className="text-xs sm:text-sm font-medium text-deep-blue text-center pb-2 uppercase">
            CLIENT review
          </h3>
          <h2 className="text-[30px] md:text-[36px] lg:text-6xl MainHeading text-center pb-8 sm:pb-12 lg:pb-[52px]">
            What are Client Think
            <span className=" font-semibold"> About Us</span>
          </h2>
          <Slider {...settings} ref={thirdSlider}>
            {aboutUsSlider.map((data, i) => (
              <div
                className="!flex !justify-center bg-white rounded-[5px] sm:mx-3"
                key={i}>
                <div className="mx-3 mx-sm-0 py-12 lg:pt-[76px] lg:pb-[60px] hero_input_shadow mt-2 inline-block px-6  sm:px-[68px] md:px-[100px] lg:px-[150px] xl:px-[163px] mb-[26px] rounded-[5px] ">
                  <div className=" flex flex-col justify-center items-center ">
                    <img
                      className="w-[74px]"
                      src={data.clientImage}
                      alt="Review by Clint"
                    />
                    <h2 className=" text-xl text-black font-medium leading-[normal] flex items-center pt-[10px]">
                      {data.clientName}{" "}
                      <span className="ps-[6px] text-xs">
                        {data.clientLocation}
                      </span>
                    </h2>
                    <h3 className="py-[6px] text-xs text-[#82B2C2] leading-[normal]">
                      {data.clientPost}
                    </h3>
                    <div className="relative">
                      <img
                        src={Images.commaUp}
                        className=" absolute !hidden sm:!block top-0 left-0 translate-x-[-100%] translate-y-[-50%]"
                        alt=" Comma upepr"
                      />
                      <img
                        src={Images.commaDown}
                        className=" absolute !hidden sm:!block bottom-0 right-0 translate-x-[100%] translate-y-[50%]"
                        alt="Comma down"
                      />
                      <p className="text-black text-center max-w-[504px] text-xs sm:text-sm leading-[150%] font-normal opacity-70">
                        {data.clientReview}
                      </p>
                    </div>
                    <span className="pt-4">
                      <img src={data.clientStarReview} alt="Star Grup Images" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center items-center gap-3">
            <span>
              <svg
                onClick={() => thirdSlider.current?.slickPrev()}
                className="cursor-pointer group"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  className=" group-hover:fill-[#076787] group-hover:stroke-[#076787]"
                  cx="17.6947"
                  cy="17.4227"
                  r="16.8655"
                  stroke="black"
                  strokeWidth="0.877078"
                />
                <path
                  className=" group-hover:stroke-[#fff]"
                  d="M19.4479 13.0383L15.0625 17.4237L19.4479 21.8091"
                  stroke="black"
                  strokeWidth="1.75416"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              onClick={() => thirdSlider.current?.slickNext()}
              className=" rotate-180">
              <svg
                className="cursor-pointer group"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  className=" group-hover:fill-[#076787] group-hover:stroke-[#076787]"
                  cx="17.6947"
                  cy="17.4227"
                  r="16.8655"
                  stroke="black"
                  strokeWidth="0.877078"
                />
                <path
                  className=" group-hover:stroke-[#fff]"
                  d="M19.4479 13.0383L15.0625 17.4237L19.4479 21.8091"
                  stroke="black"
                  strokeWidth="1.75416"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
