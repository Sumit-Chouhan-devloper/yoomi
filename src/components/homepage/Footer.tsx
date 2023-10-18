import React from "react";
import { Images } from "../../images.js";
const Footer = () => {
  return (
    <>
      <div
        className="bg-[#000] pt-[100px]  md:pt-[150px] lg:pt-[190px]  xl:pt-[213px] border-b-[1px] border-solid border-b-[rgba(255,255,255,0.20)] relative"
        id="contact-us">
        <img
          className="absolute left-[-1px] top-[55%] hidden sm:block"
          src={Images.footerSideicon}
          alt="icon"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-between pb-12">
            <div className="w-full mb-6 md:mb-0 md:w-6/12 lg:w-3/12">
              <a href="/">
                <img
                  className="w-[192px] h-[48px]"
                  src={Images.img_logo_footer}
                  alt="logo"
                />
              </a>
              <p className="text-white font-light text-xs leading-[150%] sm:max-w-[277px] py-5 md:py-6 lg:py-[30px]">
                I&apos;m a paragraph. Click here to add your own text and edit
                me. It&apos;s easy. Just click “Edit Text”
              </p>
              <a
                href="mailto:contact@yoomi.com"
                className="flex font-light text-sm text-white gap-[18px] pb-4  transition-all ease-linear hover:text-[#ddd8d8]">
                <img src={Images.msgIcon} alt="gmail icon" />
                contact@yoomi.com
              </a>
              <a
                href="tel:+123 456 789"
                className="flex font-light text-sm text-white gap-[18px] HoverTeleIcon  transition-all ease-linear hover:text-[#ddd8d8]">
                <img src={Images.telIcon} alt="tel icon" />
                +123 456 789
              </a>
            </div>
            <div className="max-[450px]:w-full w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <h3 className=" text-xs font-semibold leading-[normal] text-white">
                    About Us
                  </h3>
                  <ul className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-[18px] pt-3 md:pt-[18px]">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8] "
                        href="#team">
                        Meet the Team
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Our Vision
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-3/12">
                  <h3 className=" text-xs font-semibold leading-[normal] text-white whitespace-nowrap">
                    Contact Us
                  </h3>
                  <ul className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-[18px] pt-3 md:pt-[18px]">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-3/12 flex flex-col items-end">
                  <h3 className=" text-xs font-semibold leading-[normal] text-white pe-2">
                    News
                  </h3>
                  <ul className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-[18px] pt-3 md:pt-[18px] items-end">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#ddd8d8]"
                        href="#team">
                        Recent
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[10px] pb-3 sm:py-3 md:py-4 lg:py-[22px] bg-[#000]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <ul className="flex gap-x-4 md:gap-x-[23px] justify-center lg:justify-end">
            <li>
              <a
                href="#trems"
                aria-label="Trems section"
                className="text-xs font-normal leading-[normal] text-[#808080] transition-all ease-linear hover:text-white ">
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#Privacy"
                aria-label="Privacy section"
                className="text-xs font-normal leading-[normal] text-[#808080] transition-all ease-linear hover:text-white ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#Cookies"
                aria-label="Cookies section"
                className="text-xs font-normal leading-[normal] text-[#808080] transition-all ease-linear hover:text-white ">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
