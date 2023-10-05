import React from "react";

const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  return (
    <>
      <div
        className={`fixed lg:hidden hero_bg_color top-0 h-full flex flex-col justify-center transition-all duration-200 ease-in items-center z-[41] w-full bg-white ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <ul className="text-center flex flex-col items-center">
          <li>
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="#about-us"
              className="text-black text-xl font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-deep-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              About Us
            </a>
          </li>
          <li className="py-5">
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="#news"
              className="text-black text-xl font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-deep-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              News
            </a>
          </li>
          <li>
            <a
              onClick={() => setActiveNavOverlay(false)}
              href="#contact-us"
              className="text-black text-xl font-medium after:transition-all after:rounded-sm after:duration-300 after:ease-linear relative after:absolute after:bottom-0 after:left-0 after:bg-deep-blue after:w-0 hover:after:w-full after:h-[2px]"
            >
              Contact Us
            </a>
          </li>
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setActiveNavOverlay(false)}
              aria-current="page"
            >
              <button className="lg:hidden overflow-hidden flex justify-center items-center h-[40px] w-[122px] text-sm text-white hover:text-deep-blue font-semibold rounded-[4px] bg-deep-blue hover:bg-[#fff] after:bg-[#fff] border-solid border-[2px] border-[#076787] z-20 relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
                Get Started
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
