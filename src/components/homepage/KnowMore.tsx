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
      <div className="pb-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-sm font-medium uppercase text-center mb-0 ">
            Know More
          </p>
          <h3 className="text-black text-center md:text-[36px] sm:text-5xl mt-4 text-3xl lg:text-6xl ff_Jakarta font-normal leading-[120%]">
            And Used by the Biggest
            <span className="font-semibold ps-1">
              Figures <span className="block"> in Sports and Rehab</span>
            </span>
          </h3>
          <div>
            <div className="slider-for max-w-[946px] mx-auto lg:mt-16 mt-8">
              <Slider asNavFor={nav2}fade={true} ref={(slider1) => setNav1(slider1)}>
                <div>
                  <img
                    className="w-full min-h[160px]"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full min-h[160px]"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full min-h[160px]"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img"
                  />
                </div>
                <div>
                  <img
                    className="w-full min-h[160px]"
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
                arrows={false}
                responsive= {[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow:3,
                        swipeToSlide:true,
                        focusOnSelect:true,
                        dots:true,
                      }
                    },
                  ]}
              >
                <div className="px-3 sm:pt-12 pt-5 cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 sm:pt-12 pt-5  cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div>
                <div className="px-3 sm:pt-12 pt-5 cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 sm:pt-12 pt-5 cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
