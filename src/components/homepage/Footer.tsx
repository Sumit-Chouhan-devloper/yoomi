import React from "react";
import img_logo_footer from "../../images/svg/logoFooter.svg";
import msgIcon from "../../images/svg/Gmail-logo.svg";
import telIcon from "../../images/svg/tele-logo.svg";
const Footer = () => {
  return (
    <div className="bg-[#000111] pt-[213px]">
      {" "}
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        <div className="">
          <img className="w-[192px] h-[48px]" src={img_logo_footer} alt="" />
          <p className=" text-white font-light text-xs leading-[150%] max-w-[277px] py-[30px]">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text”{" "}
          </p>
          <a
            href="mailto:contact@yoomi.com"
            className="flex font-light text-sm text-white">
            <img src={msgIcon} alt="gmail icon" />
            contact@yoomi.com
          </a>
          <a
            href="tel:+123 456 789"
            className="flex font-light text-sm text-white">
            <img src={telIcon} alt="tel icon" />
            +123 456 789
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
