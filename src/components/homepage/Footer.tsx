import React from "react";
import img_logo_footer from "../../images/svg/logoFooter.svg";
import msgIcon from "../../images/svg/Gmail-logo.svg";
import telIcon from "../../images/svg/tele-logo.svg";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="bg-[#000111] pt-[213px] border-b-[1px] border-solid border-b-[rgba(255,255,255,0.20)]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap justify-between pb-12">
            <div className="w-3/12">
              <img
                className="w-[192px] h-[48px]"
                src={img_logo_footer}
                alt=""
              />
              <p className=" text-white font-light text-xs leading-[150%] max-w-[277px] py-[30px]">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text”{" "}
              </p>
              <a
                href="mailto:contact@yoomi.com"
                className="flex font-light text-sm text-white gap-[18px] pb-4">
                <img src={msgIcon} alt="gmail icon" />
                contact@yoomi.com
              </a>
              <a
                href="tel:+123 456 789"
                className="flex font-light text-sm text-white gap-[18px]">
                <img src={telIcon} alt="tel icon" />
                +123 456 789
              </a>
            </div>
            <div className="w-4/12">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <h3 className=" text-xs font-semibold leading-[normal] text-white">
                    About Us
                  </h3>
                  <ul className="flex flex-col gap-y-[18px] pt-[18px]">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
                        href="#team">
                        Meet the Team
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
                        href="#team">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
                        href="#team">
                        Our Vision{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-3/12">
                  <h3 className=" text-xs font-semibold leading-[normal] text-white">
                    Contact Us
                  </h3>
                  <ul className="flex flex-col gap-y-[18px] pt-[18px]">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
                        href="#team">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
                        href="#team">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
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
                  <ul className="flex flex-col gap-y-[18px] pt-[18px] items-end">
                    <li>
                      <a
                        className=" text-xs font-normal leading-[normal] text-white  transition-all ease-linear hover:text-[#808080] "
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
      <div className="py-[22px] bg-[#000111] ">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <ul className="flex gap-x-[23px] justify-end">
            <li>
              <a
                href="#trems"
                aria-label="Trems link"
                className="text-xs font-normal leading-[normal] text-[#808080] transition-all ease-linear hover:text-white ">
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#Privacy"
                aria-label="Privacy link"
                className="text-xs font-normal leading-[normal] text-[#808080] transition-all ease-linear hover:text-white ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#Cookies"
                aria-label="Cookies link"
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