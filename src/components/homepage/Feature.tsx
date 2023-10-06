import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../images.js";

const Feature = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1.1,
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
    <>
      <section className="py-7 lg:py-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-sm font-medium uppercase text-center mb-2">
            Features
          </p>
          <h2 className="text-black ff_Jakarta md:text-[36px] sm:text-5xl text-3xl lg:text-6xl font-normal text-center mb-[10px] leading-[110%]">
            Explore Our <span className=" font-semibold">Amazing Features</span>
          </h2>
          <p className="font-normal text-sm opacity-70 text-center max-w-[724px] mx-auto md:mb-5 xl:mb-28">
            Yoomi is more than just a regular remote monitoring solution. Our
            product supports patients and providers through every step of the
            rehabilitation process
          </p>
          <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between CommonCardShado py-10 lg:py-14 ps-4 pe-4 lg:pe-0">
            <div className="lg:w-5/12">
              <p className="text-deep-blue text-sm font-medium uppercase mb-0 pt-3 sm:pt-6">
                Library
              </p>
              <h3 className="text-black ff_Jakarta lg:text-[32px] md:text-4xl sm:text-[26px] text-2xl font-normal leading-[110%]">
                Extensive Exercise
                <span className=" font-semibold"> Library</span>
              </h3>
              <div className="flex sm:pt-5 pt-3 pb-3">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4 mb-0">
                  Utilize Yoomi’s HEP templates to quickly create and assign
                  programs to your patients
                </p>
              </div>
              <div className="flex">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4 mb-2">
                  Choose from our library of exercises for all patient cases
                </p>
              </div>
              <div className="flex sm:mb-9 mb-5">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-sm opacity-70 ps-4">
                  Use Yoomi’s industry-leading exercise generation tool to
                  create your own exercises that track adherence and form in
                  seconds
                </p>
              </div>
              <button className="rounded hover:bg-transparent hover:text-deep-blue hover:border-deep-blue transition duration-300 h-[51px] px-4 bg-deep-blue text-white font-semibold text-sm border border-transparent">
                View the Library
              </button>
            </div>
            <div className="lg:w-6/12 w-full FeatureSlider relative">
              <img
                className="absolute hidden md:block top-[-10%] end-0"
                src={Images.sliderBgImg}
                alt="dark-green-Rectangle"
              />
              <Slider {...settings} ref={first}>
                <div className="lg:px-[18px] px-3">
                  <img
                    className="rounded w-full min-h-[161px]"
                    src={Images.sliderPersonOne}
                    alt="men"
                  />
                </div>
                <div className="lg:px-[18px] px-3">
                  <img
                    className="rounded w-full min-h-[161px]"
                    src={Images.sliderPersonTwo}
                    alt="men"
                  />
                </div>
                <div className="lg:px-[18px] px-3">
                  <img
                    className="rounded w-full min-h-[161px]"
                    src={Images.sliderPersonOne}
                    alt="men"
                  />
                </div>
              </Slider>
              <div className="flex gap-5 lg:mt-4 mt-3 justify-center lg:justify-start">
                <div
                  className="slider_arrow sm:h-[34px] sm:w-[34px] h-[30px] w-[30px]  transition duration-300 flex justify-center items-center rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
                  onClick={() => first.current.slickNext()}>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.05726 1.18284L1.67187 5.56823L6.05726 9.95361"
                      stroke="black"
                      stroke-width="1.75416"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className="slider_arrow sm:h-[34px] sm:w-[34px] h-[30px] w-[30px] flex justify-center transition duration-300 items-center rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
                  onClick={() => first.current.slickPrev()}>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.15953 1.18284L5.54492 5.56823L1.15953 9.95361"
                      stroke="black"
                      stroke-width="1.75416"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
