import React from "react";
import SignUp from "../common/SignUp";
import { newsData, mainNewsContent } from "../common/Helper";
const MainNews = () => {
  return (
    <div className=" pt-[150px]">
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 items-center">
        <div className="mb-14 xl:mb-20">
          {mainNewsContent.slice(0, 1).map((data, i) => (
            <>
              <div key={i}>
                {" "}
                <img
                  className="w-full"
                  style={{ minHeight: "179px" }}
                  src={data.newsMainImage}
                  alt="hall "
                />
                <div className=" mb-6 lg:mb-10 xl:mb-[45px]">
                  <div className=" flex flex-col lg:flex-row gap-y-4 items-start lg:items-center justify-between mt-6 sm:mt-8 md:mt-12  lg:mt-16 mb-[26px]">
                    <h2 className=" ff_Jakarta text-[32px] sm:text-[35px]  xl:text-6xl font-normal text-black leading-[110%]">
                      {data.newsMainHeading}
                      <span className=" font-semibold block sm:inline">
                        {" "}
                        {data.newsMainBoldHeading}
                      </span>
                    </h2>
                    <div className=" hidden lg:flex justify-between items-center gap-[22px] w-full lg:w-auto ">
                      <h3 className=" ff_Jakarta text-sm font-normal leading-[100%]">
                        {data.newsMainDate}
                      </h3>
                      <button className="py-[12.5px] px-[39px] hover:bg-white border border-transparent hover:border-black hover:text-black transition-all duration-300 ease-linear bg-[#076787] text-white text-sm font-semibold rounded-[4px]">
                        Marketting
                      </button>
                    </div>
                  </div>{" "}
                  <p className=" text-sm font-normal opacity-70 text-black leading-[150%]">
                    {data.newsMainInfoPera}
                  </p>
                  <div className=" flex lg:hidden justify-between items-center gap-[22px] w-full lg:w-auto mt-6 ">
                    <h3 className=" ff_Jakarta text-sm font-normal leading-[100%]">
                      {data.newsMainDate}
                    </h3>
                    <button className="py-[12.5px] px-[39px] hover:bg-white border border-transparent hover:border-black hover:text-black transition-all duration-300 ease-linear bg-[#076787] text-white text-sm font-semibold rounded-[4px]">
                      Marketting
                    </button>
                  </div>
                </div>
                <p className=" text-sm font-normal opacity-70 text-black leading-[150%] mb-6">
                  {data.newsMainDiscFirst}
                </p>
                <p className=" text-sm font-normal opacity-70 text-black leading-[150%]">
                  {data.newsMainDiscSecond}
                </p>
                <div className="px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 bg-[#076787] rounded-md py-12 lg:py-16 my-8">
                  <h3 className="ff_Jakarta text-[32px] sm:text-5xl xl:text-6xl text-white leading-[110%] font-normal">
                    {data.newsMainQt}
                    <span className=" font-semibold">
                      &nbsp;
                      {data.newsMainQtBold}
                    </span>
                  </h3>
                  <div className="text-end">
                    {" "}
                    <h4 className="text-end text-white font-normal text-sm leading-[150%] translate-x-[-15%] relative after:absolute after:h-[1px] md:after:h-[2px] after:bg-white after:left-[0%] after:translate-x-[calc(-100%_-_7px)] after:w-[28px] md:after:w-[36px] after:top-1/2 inline-block">
                      {data.newsMainQtAuthor}
                    </h4>
                  </div>
                </div>
                <p className=" text-sm font-normal opacity-70 text-black leading-[150%]">
                  {data.newsMainDiscEnd}
                </p>
              </div>
            </>
          ))}
        </div>
        <div>
          <h2 className=" ff_Jakarta text-4xl sm:text-5xl xl:text-6xl text-black leading-[110%] font-normal">
            Related <span className=" font-semibold">News</span>
          </h2>
          <div className=" flex flex-wrap mx-[-24px] mt-5 lg:mt-9">
            {newsData.map((data, i) => (
              <>
                <div
                  className={`w-full lg:w-6/12 px-3 ${
                    i === 1 ? " mt-8 lg:mt-0" : ""
                  }`}
                  key={i}>
                  <div className="px-3 pb-5 pt-3 rounded-md shadow-[0px_9px_22px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between h-full">
                    <div>
                      <img src={data.newsImage} alt="sub content" />
                      <h3 className=" ff_Jakarta text-xl sm:text-2xl font-normal leading-[120%] mt-[18px] mb-4">
                        {data.newsHeading}
                        <span className=" font-semibold">
                          {data.newsHeadingBold}
                        </span>
                      </h3>
                      <p className=" text-sm font-normal opacity-70 text-black leading-[150%]">
                        {data.newsPera}
                      </p>
                    </div>
                    <div className=" flex gap-[22px] items-center mt-6">
                      <button className="py-[12.5px] px-[39px] hover:bg-white border border-transparent hover:border-black hover:text-black transition-all duration-300 ease-linear bg-[#076787] text-white text-sm font-semibold rounded-[4px]">
                        Marketting
                      </button>
                      <h4 className="text-black ff_Jakarta text-sm font-normal">
                        {data.newsDate}
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default MainNews;
