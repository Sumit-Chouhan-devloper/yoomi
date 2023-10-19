import React from "react";
import { StartNews } from "../common/Helper";
import SignUp from "../common/SignUp";
import { useNavigate } from "react-router-dom";
const NewsStart = () => {
  const navigate = useNavigate();

  const handleNavigateToNewsDetails = (i: number) => {
    navigate(`${StartNews[i].newsPathname}`);
  };

  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 md:mt-[200px] mt-[150px]">
        {StartNews.map((data, i) => {
          return (
            <div
              onClick={() => {
                // eslint-disable-next-line
                handleNavigateToNewsDetails(i);
              }}
              className="flex cursor-pointer md:items-center justify-between flex-wrap border border-[rgba(0,0,0,0.10)] rounded sm:mb-[36px] mb-[32px]"
              key={i}>
              <div className="lg:w-4/12 md:w-5/12 w-full h-full border-l-0 border-t-0 border-b-0 border border-[rgba(0,0,0,0.10)] rounded">
                <img
                  src={data.newsImage}
                  alt="news"
                  className="w-full h-full"
                />
              </div>
              <div className="lg:w-8/12 md:w-7/12 w-full py-[10px] lg:ps-[76px] md:ps-5 ps-[10px] pe-[10px]">
                <p className="text-[#000] ff_Jakarta xl:text-[32px] md:text-[25px] text-[28px] font-normal leading-[120%] lg:mb-4 mb-[5px]">
                  {data.heading}{" "}
                  <span className=" font-semibold">{data.boldHeading}</span>
                </p>
                <p className="xl:mb-[34px] lg:mb-[25px] mb-[10px] text-sm font-normal opacity-70 leading-[150%]">
                  {data.para}
                </p>
                <div className="flex items-center">
                  <button className="flex justify-center items-center overflow-hidden h-[47px] w-[164px]  text-sm text-white font-semibold rounded-[4px] bg-[#076787] border-solid border-[2px] border-[#076787] duration-300 ease-linear hover:text-[#076787]  hover:bg-white">
                    Marketting
                  </button>
                  <p className="sm:text-sm text-[15px] font-normal leading-[normal] text-[#000] sm:ms-[21px] ms-2 whitespace-nowrap">
                    {data.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <SignUp />
      </div>
    </>
  );
};

export default NewsStart;
