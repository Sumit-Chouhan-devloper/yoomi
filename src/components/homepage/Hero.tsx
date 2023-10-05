import React from "react";
import HeroLeftIcon from "../../images/png/hero-left-icon.png";
import HeroRightIcon from "../../images/png/hero-right-icon.png";
import HeroLeftPot from "../../images/png/hero-left-side-pot.png";
import HeroRightPot from "../../images/png/hero-right-side-pot.png";
import { Images } from "../../images";
const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          src={HeroLeftIcon}
          alt="hero-left-icon"
          className="absolute top-24"
        />
        <img
          src={Images.heroImg}
          alt="hero-left-icon"
          className="absolute top-24"
        />
        <img
          src={HeroRightIcon}
          alt="hero-right-icon"
          className="absolute end-0 top-36"
        />
        <img
          src={HeroLeftPot}
          alt="hero-right-icon"
          className="absolute start-8 top-[45%] hero-right-icon"
        />
        <img
          src={HeroRightPot}
          alt="hero-right-icon"
          className="absolute end-[18%] top-[48%] hero-left-icon"
        />

        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 text-center py-32 3xl:pt-56">
          <h1 className="text-8xl font-normal text-black ff_Jakarta px-36 leading-[55px]">
            <span className="font-extrabold">Next Generation </span> Patient
            Engagement and RTM Solution<span className="font-semibold">✨</span>
          </h1>
          <p className="text-2xl font-normal text-black opacity-70 capitalize pt-4">
            Industry leading AI motion-tracking technology
          </p>
          <form className="w-[429px] h-[57px] bg-white rounded-[4px] shadow-lg shadow-[0px_4px_15px_0px_rgba(7,103,135,0.15) py-[5px] pr-[5px] pl-[11px] mt-[50px] mx-auto flex justify-between">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-[70%] focus-visible:outline-none text-sm font-medium text-black placeholder:text-black opacity-70"
              required
            />
            <button className="w-[122px] h-[45px] font-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-dark-green shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-dark-green hover:bg-white duration-300 ease-linear">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
