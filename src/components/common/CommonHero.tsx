import React from "react";

const CommonHero = ({
  headlineTitle,
  subHeadlineTitle,
  subHeadlineTitle2,
  para,
}) => {
  return (
    <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
      <div className="bg-white rounded-[32px] shadow-lg shadow-[0px_26px_27px_0px_rgba(0, 0, 0, 0.04)] min-h-[215px] sm:min-h-[276px] flex justify-center items-center flex-col mt-24">
        <h2 className="uppercase font-medium text-xs sm:text-sm text-deep-blue">
          {headlineTitle}
        </h2>
        <h3 className="text-[32px] sm:text-6xl text-black">
          {subHeadlineTitle}{" "}
          <span className="font-semibold">{subHeadlineTitle2}</span>
        </h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default CommonHero;
