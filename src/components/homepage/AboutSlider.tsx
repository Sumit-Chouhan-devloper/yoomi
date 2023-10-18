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
  };
  // const first = React.useRef();
  const sliderRef = React.useRef<Slider | null>(null);
  return (
    <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 py-32">
      <div className="about_top_slids relative">
        <Slider {...settings} ref={sliderRef}>
          <div className="">
            <img src={Images.aboutTopSlider1} alt="doctor with patient" />
          </div>
          <div className="">
            <img src={Images.aboutTopSlider2} alt="doctor with patient" />
          </div>
          <div className="">
            <img src={Images.aboutTopSlider1} alt="doctor with patient" />
          </div>
          <div className="">
            <img src={Images.aboutTopSlider2} alt="doctor with patient" />
          </div>
        </Slider>
        <div
          className="sm:h-[34px] absolute top-1/2 slider_arrow translate-y-[-50%] left-[-4%] sm:w-[34px] flex justify-center items-center h-[30px] w-[30px] transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
          onClick={() => sliderRef.current?.slickNext()}>
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
          className="sm:h-[34px] sm:w-[34px] absolute slider_arrow top-1/2 translate-y-[-50%] end-[-4%]  h-[30px] w-[30px] flex justify-center items-center  transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
          onClick={() => sliderRef.current?.slickPrev()}>
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
  );
};

export default AboutSlider;
