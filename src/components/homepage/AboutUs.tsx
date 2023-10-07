import React from "react";
import { Images } from "../../images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aboutUsSlider } from "../common/Helper.tsx";
const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const thirdSlider = React.useRef(null);
  return (
    <>
      <div
        className=" pt-10 md:pt-16 lg:pt-[73.3px] pb-5 relative"
        id="contact-us">
        <img
          className=" absolute top-0 left-0 sm:w-24 md:w-28 xl:w-40 -z-10 "
          src={Images.yomiAboutPlusICO}
          alt=""
        />
        <img
          className=" absolute bottom-[38%] right-[0px] translate-x-[0%] sm:w-24 md:w-28 xl:w-40 min-w-[100px] max-w-[6%] "
          src={Images.yomiAboutPlusICOsec}
          alt=""
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 items-center">
          <h3
            className="SubHeading text-center pb-2 uppercase"
            data-aos="fade-down">
            CLIENT review
          </h3>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl MainHeading text-center pb-8 sm:pb-12 lg:pb-[52px]"
            data-aos="fade-down">
            What are Client Think
            <span className=" font-semibold"> About Us</span>
          </h2>
          <Slider {...settings} ref={thirdSlider}>
            {aboutUsSlider.map((data, i) => (
              <>
                <div className="!flex !justify-center bg-white rounded-[5px] mx-3">
                  <div className="py-12 lg:pt-[76px] lg:pb-[60px] hero_input_shadow mt-2 inline-block px-6  sm:px-[68px] md:px-[100px] lg:px-[150px] xl:px-[163px] mb-[26px] rounded-[5px] ">
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
                        <p className="text-black text-center max-w-[504px] text-sm leading-[150%] font-normal opacity-70">
                          {data.clientReview}
                        </p>
                      </div>
                      <span className="pt-4">
                        <img
                          src={data.clientStarReview}
                          alt="Star Grup Images"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
          <div className=" flex justify-center items-center gap-3">
            <span className="">
              <svg
                onClick={() => thirdSlider?.current?.slickPrev()}
                className=" group"
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
                  stroke-width="0.877078"
                />
                <path
                  className=" group-hover:stroke-[#fff]"
                  d="M19.4479 13.0383L15.0625 17.4237L19.4479 21.8091"
                  stroke="black"
                  stroke-width="1.75416"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span
              onClick={() => thirdSlider?.current?.slickNext()}
              className=" rotate-180">
              <svg
                className=" group"
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
                  stroke-width="0.877078"
                />
                <path
                  className=" group-hover:stroke-[#fff]"
                  d="M19.4479 13.0383L15.0625 17.4237L19.4479 21.8091"
                  stroke="black"
                  stroke-width="1.75416"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div
            className=" py-7 md:py-9 px-6 md:px-12 lg:px-[84px] bg-[#076787] rounded-[32px] translate-y-16 md:translate-y-[100px] lg:translate-y-[130px] relative z-10"
            id="news">
            <img
              className=" absolute bottom-0 right-0 min-w-[140px] max-w-[15%]"
              src={Images.Yoomi_translatecard_icon}
              alt="Yoomi_translatecard_icon"
            />
            <div className="flex flex-wrap justify-between">
              <div className="lg:w-6/12">
                <div className="flex flex-col justify-center h-full">
                  {" "}
                  <div data-aos="fade-right">
                    {" "}
                    <img
                      className="w-44 sm:w-[200px] h-[45px] md:w-[228px] md:h-[55px]"
                      src={Images.img_logo_footer}
                      alt="Logo Yoomi"
                    />
                  </div>{" "}
                  <h2
                    className="ff_Jakarta text-[19px] sm:text-3xl xl:text-4xl font-normal text-white pt-3 sm:pt-4 lg:pt-7 pb-4 sm:pb-6 md:pb-8 lg:pb-12"
                    data-aos="fade-right">
                    Sign Up to Join
                    <span className=" font-semibold"> Our Newsletter</span>
                  </h2>
                  <form
                    className="w-full sm:w-[429px] h-[45px] sm:h-[57px] bg-white rounded-[4px] shadow-lg shadow-[0px_4px_15px_0px_rgba(7,103,135,0.15) flex items-center"
                    data-aos="fade-right">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="pr-3 rounded-[5px] md:pr-2 pl-3 md:py-4 w-[70%] focus-visible:outline-none text-sm font-medium text-black placeholder:text-black opacity-70"
                      required
                    />
                    <button className="w-[122px] h-[35px] sm:h-[45px] text-xs sm:text-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-deep-blue shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-deep-blue hover:bg-white duration-300 ease-linear mr-1">
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="w-full mt-12 lg:mt-0 lg:w-4/12 flex justify-center"
                data-aos="fade-left">
                <img
                  className="max-[600px]:w-[75%]"
                  src={Images.yomiFooterNewesCharacter}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
