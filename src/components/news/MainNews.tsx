import React, { useState } from "react";
import SignUp from "../common/SignUp";
import { newsData, mainNewsContent } from "../common/Helper";
import { Images } from "../../images";

type MainNewsProps = {};

const MainNews: React.FC<MainNewsProps> = () => {
  const [currentTabs, setCurrentTabs] = useState<[number, number]>([0, 1]);

  const handleTabClick = (tabIndex: number) => {
    const nextTab1 = (tabIndex + 1) % newsData.length;
    const nextTab2 = (tabIndex + 2) % newsData.length;

    setCurrentTabs([nextTab1, nextTab2]);
  };

  console.log(`Hidden tabs: ${currentTabs.join(", ")}`);

  return (
    <div className=" pt-[190px] relative">
      <img
        className=" absolute left-0 top-[49%] -z-10 w-[120px] translate-y-[-90%]"
        src={Images.plusImageNewsSec}
        alt="plus icon"
      />
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 items-center">
        <div className="mb-14 xl:mb-20">
          {mainNewsContent
            .slice(currentTabs[0], currentTabs[0] + 1)
            .map((data, i) => (
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
                        <span
                          className={`font-semibold block sm:inline ${
                            data.newsMainBoldHeading.includes(
                              "physical therapy adherence"
                            )
                              ? "sm:!block"
                              : ""
                          }`}>
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
                  <div className="ps-5 pe-0 sm:px-10 md:px-16 lg:px-24 xl:px-28 bg-[#2e7693] rounded-md py-[71.11px] my-8 relative">
                    {" "}
                    <img
                      className=" absolute top-3 md:top-5 left-8 md:left-12 w-[89px] md:w-[100px] lg:w-[117px] bg-transparent"
                      src={Images.commaImageNews}
                      alt=""
                    />
                    <img
                      className=" absolute bottom-0 right-0 w-16 lg:w-[98px] bg-transparent"
                      src={Images.plusImageNews}
                      alt=""
                    />
                    <h3 className="ff_Jakarta text-[32px] sm:text-5xl xl:text-6xl text-white leading-[110%] font-normal">
                      {data.newsMainQt}
                      <span className=" font-semibold">
                        &nbsp;
                        {data.newsMainQtBold}
                      </span>
                    </h3>
                    <div className="text-end">
                      {" "}
                      <h4 className="text-end text-white font-normal text-sm leading-[150%] translate-x-[-40%] sm:translate-x-[-15%] relative after:absolute after:h-[1px] md:after:h-[2px] after:bg-white after:left-[0%] after:translate-x-[calc(-100%_-_7px)] after:w-[28px] md:after:w-[36px] after:top-1/2 inline-block sm:mt-0 mt-2">
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
          <div className=" flex flex-wrap mx-[-24px] mt-8 sm:mt-6 lg:mt-5 justify-evenly">
            {newsData.map((data, i) => (
              <div
                className={`w-full lg:w-[48%] xl:w-6/12 px-3 mt-8 lg:mt-0 ${
                  currentTabs.includes(i) ? "block" : "hidden"
                }`}
                key={i}
                onClick={() => handleTabClick(i)}>
                <div className="px-3 pb-5 pt-3 rounded-md shadow-[0px_9px_22px_0px_rgba(0,0,0,0.10)] flex flex-col justify-between h-full">
                  <div>
                    <img src={data.newsImage} alt="sub content" />
                    <h3 className="ff_Jakarta text-xl sm:text-2xl font-medium leading-[120%] mt-[18px] mb-4">
                      {data.newsHeading}
                      <span
                        className={`font-semibold  ${
                          data.newsHeadingBold.includes(
                            "physical therapy adherence"
                          )
                            ? "md:block"
                            : ""
                        }`}>
                        {data.newsHeadingBold}
                      </span>
                    </h3>
                    <p className="text-sm font-normal opacity-70 text-black leading-[150%]">
                      {data.newsPera}
                    </p>
                  </div>
                  <div className="flex gap-[22px] items-center mt-6">
                    <button className="py-[12.5px] px-[42px] hover:bg-white border border-transparent hover:text-black hover:border-black hover-text-black transition-all duration-300 ease-linear bg-[#076787] text-white text-sm font-semibold rounded-[4px]">
                      Marketing
                    </button>
                    <h4 className="text-black ff_Jakarta text-sm font-normal">
                      {data.newsDate}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default MainNews;
