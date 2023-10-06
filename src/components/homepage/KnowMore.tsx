import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../images";
const KnowMore = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <div className="py-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-sm font-medium uppercase text-center">
            Know More
          </p>
          <h3 className="text-black text-center md:text-[36px] sm:text-5xl text-3xl lg:text-6xl ff_Jakarta font-normal leading-[120%]">
            And Used by the Biggest
            <span className="font-semibold">
              Figures <span className=" block">in Sports and Rehab</span>
            </span>
          </h3>
          <div>
            <div className="slider-for max-w-[946px] mx-auto lg:mt-16 mt-12">
              <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
              </Slider>
            </div>
            <div className="slider-nav max-w-[700px] mx-auto" id="small_images">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                infinite={false}
              >
                <div className="px-3 pt-10 cursor-pointer">
                  <img
                    className="w-[152px] h-[114px]"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 pt-10 cursor-pointer">
                  <img
                    className="w-[152px] h-[114px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div>
                <div className="px-3 pt-10 cursor-pointer">
                  <img
                    className="w-[152px] h-[114px]"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 pt-10 cursor-pointer">
                  <img
                    className="w-[152px] h-[114px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div>
                {/* <div className="px-3 pt-10">
                  <img
                    className="w-[152px] h-[114px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
