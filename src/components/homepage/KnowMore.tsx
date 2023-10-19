import React, { useState } from "react";
import Slider from "react-slick";
import { Images } from "../../images";

const KnowMore: React.FC = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const sliderSettings1 = {
    asNavFor: nav2 || undefined,
    fade: true,
    speed: 500,
  };

  const sliderSettings2 = {
    asNavFor: nav1 || undefined,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          focusOnSelect: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:pt-12 lg:pb-0 sm:py-10">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase text-center mb-4">
            Know More
          </p>
          <h3 className="text-black text-center text-[30px] md:text-[36px] lg:text-6xl ff_Jakarta font-normal leading-[120%]">
            And Used by the Biggest
            <span className="font-semibold ps-1">
              Figures <span className="block"> in Sports and Rehab</span>
            </span>
          </h3>
          <div>
            <div className="slider-for max-w-[946px] mx-auto lg:mt-[65px] mt-8">
              <Slider {...sliderSettings1} ref={(slider) => setNav1(slider)}>
                {" "}
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img-1"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar2}
                    alt="seminar-img-2"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar}
                    alt="seminar-img-3"
                  />
                </div>
                <div>
                  <img
                    className="w-full"
                    src={Images.knowMoreBigSeminar2}
                    alt="seminar-img-4"
                  />
                </div>
              </Slider>
            </div>
            <div
              className="slider-nav max-w-[700px] mx-auto mb-4 md:mb-0"
              id="small_images">
              <Slider {...sliderSettings2} ref={(slider) => setNav2(slider)}>
                <div className="px-3 sm:pt-12 lg:pt-[52px] pt-5 pb-6 cursor-pointer">
                  <img
                    className="w-full min-h-[70px] sm:pl-2"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 sm:pt-12 lg:pt-[52px] pt-5 pb-6  cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide1}
                    alt="hospital-room"
                  />
                </div>
                <div className="px-3 sm:pt-12 lg:pt-[52px] pt-5 pb-6 cursor-pointer">
                  <img
                    className="w-full min-h-[70px]"
                    src={Images.knowMoreSlide2}
                    alt="seminar-img"
                  />
                </div>
                <div className="px-3 sm:pt-12 lg:pt-[52px] pt-5 pb-6 cursor-pointer">
                  <img
                    className="w-full min-h-[70px] sm:pr-2"
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
