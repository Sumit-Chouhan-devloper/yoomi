import React from "react";
import { Images } from "../../images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  const thirdSlider = React.useRef(null);
  return (
    <>
      <div className=" pt-[73.3px] pb-[62.5px]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 items-center">
          <h3 className="SubHeading text-center pb-2">CLIENT review</h3>
          <h2 className="MainHeading text-center pb-[52px]">
            What are Client Think
            <span className=" font-semibold">About Us</span>
          </h2>
          <Slider {...settings} ref={thirdSlider}>
            <div className=" !flex !justify-center ">
              <div className="pt-[76px] pb-[60px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] inline-block px-[168px] mb-[26px] ">
                <div className=" flex flex-col justify-center items-center ">
                  <img
                    className="w-[74px]"
                    src={Images.clintReview1}
                    alt="Review by Clint"
                  />
                  <h2 className=" text-xl text-black font-medium leading-[normal] flex items-center pt-[10px]">
                    Joy Robert <span className="ps-[6px] text-xs">( USA )</span>
                  </h2>
                  <h3 className="py-[6px] text-xs text-[#82B2C2] leading-[normal]">
                    CEO ( yoomi )
                  </h3>
                  <div className="relative">
                    <img
                      src={Images.commaUp}
                      className=" absolute top-0 left-0 translate-x-[-100%] translate-y-[-50%]"
                      alt=" Comma upepr"
                    />
                    <img
                      src={Images.commaDown}
                      className=" absolute bottom-0 right-0 translate-x-[100%] translate-y-[50%]"
                      alt="Comma down"
                    />
                    <p className="text-black text-center max-w-[504px] text-sm leading-[150%] font-normal opacity-70">
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </p>
                  </div>
                  <span className="pt-4">
                    <img src={Images.starGrup} alt="Star Grup Images" />
                  </span>
                </div>
              </div>
            </div>
            <div className=" !flex !justify-center ">
              <div className="pt-[76px] pb-[60px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] inline-block px-[168px] mb-[26px] ">
                <div className=" flex flex-col justify-center items-center ">
                  <img
                    className="w-[74px]"
                    src={Images.clintReview1}
                    alt="Review by Clint"
                  />
                  <h2 className=" text-xl text-black font-medium leading-[normal] flex items-center pt-[10px]">
                    Joy Robert <span className="ps-[6px] text-xs">( USA )</span>
                  </h2>
                  <h3 className="py-[6px] text-xs text-[#82B2C2] leading-[normal]">
                    CEO ( yoomi )
                  </h3>
                  <div className="relative">
                    <img
                      src={Images.commaUp}
                      className=" absolute top-0 left-0 translate-x-[-100%] translate-y-[-50%]"
                      alt=" Comma upepr"
                    />
                    <img
                      src={Images.commaDown}
                      className=" absolute bottom-0 right-0 translate-x-[100%] translate-y-[50%]"
                      alt="Comma down"
                    />
                    <p className="text-black text-center max-w-[504px] text-sm leading-[150%] font-normal opacity-70">
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </p>
                  </div>
                  <span className="pt-4">
                    <img src={Images.starGrup} alt="Star Grup Images" />
                  </span>
                </div>
              </div>
            </div>
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
                  className=" group-hover:fill-[#076787] group-hover:stroke-none"
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
                  className=" group-hover:fill-[#076787] group-hover:stroke-none"
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
          <div className="py-[78px] px-[84px] bg-[#076787] rounded-[32px]">
            <div className="">
              <img src={Images.img_logo_footer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
