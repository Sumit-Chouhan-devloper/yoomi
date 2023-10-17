import React from "react";
import { Images } from "../../images";

const SignUp = () => {
  return (
    <div>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        {" "}
        <div
          className=" py-7 md:py-9 px-6 md:px-12 lg:px-[84px] bg-[#076787] rounded-[32px] translate-y-16 md:translate-y-[100px] lg:translate-y-[130px] relative z-10"
          id="news"
        >
          <img
            className=" absolute bottom-0 right-0 min-w-[140px] max-w-[15%]"
            src={Images.Yoomi_translatecard_icon}
            alt="Yoomi_translatecard_icon"
          />
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-6/12">
              <div className="flex flex-col justify-center h-full">
                {" "}
                <div>
                  {" "}
                  <img
                    className="w-44 sm:w-[200px] h-[45px] md:w-[228px] md:h-[55px]"
                    src={Images.img_logo_footer}
                    alt="Logo Yoomi"
                  />
                </div>{" "}
                <h2 className="ff_Jakarta text-[18px] sm:text-3xl xl:text-4xl font-normal text-white pt-3 sm:pt-4 lg:pt-7 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
                  Sign Up to Join
                  <span className=" font-semibold"> Our Newsletter</span>
                </h2>
                <form className="w-full sm:w-[429px] h-[45px] sm:h-[57px] bg-white rounded-[4px] shadow-lg shadow-[0px_4px_15px_0px_rgba(7,103,135,0.15) flex items-center">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="pr-3 rounded-[5px] md:pr-2 pl-4 md:py-4 w-[70%] focus-visible:outline-none text-xs sm:text-sm font-medium text-[#110163] placeholder:text-[#110163] opacity-70"
                    required
                  />
                  <button className="w-[122px] h-[35px] sm:h-[47px] text-xs sm text-xs:sm:text-sm font-semibold text-white rounded-[4px] border-solid border-[2px] border-[#076787] bg-deep-blue shadow-[0px_4px_25px_0px_rgba(129,72,142,0.23)] hover:text-deep-blue hover:bg-white duration-300 ease-linear mr-1">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full mt-12 lg:mt-0 lg:w-4/12 flex justify-center">
              <img
                className="max-[600px]:w-[75%]"
                src={Images.yomiFooterNewesCharacter}
                alt="Your Browser is Not Support This Formate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
