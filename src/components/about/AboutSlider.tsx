import React from "react";
import Slider from "react-slick";
import { Images } from "../../images.js";
const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
  const first = React.useRef();
  return (
    <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 py-14">
      <div className="about_top_slids relative">
        <Slider {...settings} ref={first}>
          <div>
            <img src={Images.aboutTopSlider1} alt="doctor with patient" />
          </div>
          <div>
            <img src={Images.aboutTopSlider2} alt="doctor with patient" />
          </div>
          <div>
            <img src={Images.aboutTopSlider1} alt="doctor with patient" />
          </div>
          <div>
            <img src={Images.aboutTopSlider2} alt="doctor with patient" />
          </div>
        </Slider>
        <div className="flex justify-center gap-2 sm:gap-4 md:gap-5 pt-[25px]">
          <div
            className="sm:h-[34px]  lg:absolute lg:top-1/2 slider_arrow  lg:bottom-[-30%]  lg:translate-y-[-50%] lg:left-[-4%] sm:w-[34px] flex justify-center items-center h-[25px] w-[25px] transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
            onClick={() => first.current.slickNext()}
          >
            <span></span>
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
          className="sm:h-[34px] sm:w-[34px] lg:absolute slider_arrow lg:top-1/2 lg:bottom-[-30%] lg:translate-y-[-50%] lg:end-[-4%]  h-[25px] w-[25px] flex justify-center items-center  transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
          onClick={() => first.current.slickPrev()}
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
  );
};

export default AboutSlider;
