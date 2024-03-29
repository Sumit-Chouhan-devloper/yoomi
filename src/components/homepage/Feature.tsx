import React from "react";
import Slider from "react-slick";
import { Images } from "../../images.js";

const Feature = () => {
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
      <div className="py-[30px] sm:py-10 lg:py-12">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase text-center mb-2 leading-normal">
            Features
          </p>
          <h2 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal text-center mb-[10px] leading-[110%]">
            Explore Our <span className="font-semibold">Amazing Features</span>
          </h2>
          <p className="font-normal text-xs sm:text-sm opacity-70 text-center max-w-[724px] mx-auto md:mb-5 xl:mb-[80px] leading-normal">
            Yoomi is more than just a regular remote monitoring solution. Our
            product supports patients and providers through every step of the
            rehabilitation process
          </p>
          <div className="flex xl:h-[550px] flex-wrap flex-col-reverse items-center lg:flex-row justify-between CommonCardShado py-8 sm:py-10 lg:pt-[70px] lg:pb-[56px] xl:py-[80px] sm:ps-[34px] px-4 sm:pe-[34px] lg:pe-0">
            <div className="lg:w-6/12 lg:pe-10" data-aos="fade-right">
              <p className="text-deep-blue text-xs sm:text-sm font-medium uppercase mb-2 leading-normal pt-5 sm:pt-6 lg:pt-0">
                Library
              </p>
              <h3 className="text-black ff_Jakarta lg:text-[32px] md:text-4xl ms-[-2px] sm:text-[26px] text-2xl font-normal leading-[110%]">
                Extensive Exercise
                <span className="font-semibold"> Library</span>
              </h3>
              <div className="flex sm:pt-5 pt-3 pb-[11px]">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 mb-0 text-black">
                  Utilize Yoomi’s HEP templates to quickly create and assign
                  programs to your patients
                </p>
              </div>
              <div className="flex">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 mb-[9px] text-black ">
                  Choose from our library of exercises for all patient cases
                </p>
              </div>
              <div className="flex lg:mb-[37px] mb-5">
                <img src={Images.checkIcon} alt="check-box" />
                <p className="font-normal text-xs sm:text-sm opacity-70 ps-4 text-black xl:pe-10">
                  Use Yoomi’s industry-leading exercise generation tool to
                  create your own exercises that track adherence and form in
                  seconds
                </p>
              </div>
              <button className="border-solid border-[2px] border-deep-blue rounded hover:bg-white hover:text-deep-blue duration-300 ease-linear h-[47px] px-4 bg-deep-blue text-white font-semibold text-xs sm:text-sm">
                View the Library
              </button>
            </div>
            <div className="lg:w-6/12 w-full FeatureSlider relative md:mt-[30px] lg:mt-0">
              <img
                className="absolute hidden md:block md:top-[-15.2%] lg:top-[-10%] end-0"
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
              <div className="flex gap-[10px] mt-[10px] justify-center lg:justify-start">
                <div
                  className="slider_arrow sm:h-[34px] sm:w-[34px] h-[30px] w-[30px]  transition duration-300 relative rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
                  onClick={() => first.current?.slickNext()}>
                  <svg
                    className="absolute top-1/2 left-1/2 translate-x-[-70%]  translate-y-[-50%]"
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
                  className="slider_arrow sm:h-[34px] sm:w-[34px] h-[30px] w-[30px] relative transition duration-300 rounded-full border border-solid border-black hover:bg-deep-blue hover:border-hidden cursor-pointer"
                  onClick={() => first.current?.slickPrev()}>
                  <svg
                    className="absolute top-1/2 left-1/2 translate-x-[-36%]  translate-y-[-50%]"
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
        </div>
      </div>
    </>
  );
};

export default Feature;
