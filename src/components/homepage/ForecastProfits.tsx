import React from "react";
import { Images } from "../../images.js";

const ForecastProfits = () => {
  return (
    <>
      <div className="bg-[#F5F8F9] relative">
        <div className="absolute bottom-[50px]">
          <img src={Images.forecastIcon} alt="forecastImg" className="hidden xl:block xl:w-[70%]" />
        </div>
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 pt-20 pb-[100px] sm:pb-[53px]">
          <p className="text-deep-blue text-sm font-medium uppercase text-center mb-2">
            Forecast your profits
          </p>
          <h2 className="ff_Jakarta text-black md:text-[36px] sm:text-5xl text-3xl lg:text-6xl font-normal text-center leading-[110%] mb-4 sm:w-[592px] mx-auto">
            Calculate Your
            <span className="font-semibold"> Reimbursement With Yoomi</span>
          </h2>
          <p className="font-normal text-sm opacity-70 text-center">
            Calculations made using national average*{" "}
          </p>
          <div className="lg:flex justify-between lg:w-[965px] mx-auto pt-8 sm:pt-12">
            <div className="lg:w-[231px] h-[165] lg:h-[195px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] px-4 py-4 text-center">
              <p className="text-sm font-semibold text-white pb-4">
                Total Patients per month
              </p>
              <div className="h-[32px]">
                <img
                  src={Images.profitProgressIcon}
                  alt="profit-progress-img"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white w-[140px] lg:w-[174px] h-[40px] lg:h-[50px] rounded-[4px] flex items-center justify-center mt-4 lg:mt-9 mx-auto">
                <p className="text-xl lg:text-3xl font-semibold text-deep-blue">
                  100
                </p>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="w-[100%] lg:w-[343px] h-[70px] lg:h-[85px] rounded-[4px] forecast_box_bg p-[10px]">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-black sm:pl-4">
                    Initial Setup
                  </p>
                  <div className="w-[100px] sm:w-[130px] lg:w-[148px] h-[45px] sm:h-[50px] lg:h-[65px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] flex items-center justify-center">
                    <p className="text-xl lg:text-3xl font-semibold text-white">
                      $ 40.26
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[343px] h-[70px] lg:h-[85px] rounded-[4px] forecast_box_bg p-[10px] mt-4 lg:mt-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-black sm:pl-4 leading-[18px]">
                    Patient <br className="hidden lg:block" /> Monitoring
                  </p>
                  <div className="w-[100px] sm:w-[130px] lg:w-[148px] h-[45px] sm:h-[50px] lg:h-[65px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] flex items-center justify-center">
                    <p className="text-xl lg:text-3xl font-semibold text-white">
                      $ 40.26
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="w-[100%] lg:w-[343px] h-[70px] lg:h-[85px] rounded-[4px] forecast_box_bg p-[10px]">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-black sm:pl-4 leading-[18px]">
                    First <br className="hidden lg:block" /> 20 Minutes
                  </p>
                  <div className="w-[100px] sm:w-[130px] lg:w-[148px] h-[45px] sm:h-[50px] lg:h-[65px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] flex items-center justify-center">
                    <p className="text-xl lg:text-3xl font-semibold text-white">
                      $ 40.26
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[343px] h-[70px] lg:h-[85px] rounded-[4px] forecast_box_bg p-[10px] mt-4 lg:mt-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-black sm:pl-4 leading-[18px]">
                    Additional <br className="hidden lg:block" /> 20 Minitutes
                  </p>
                  <div className="w-[100px] sm:w-[130px] lg:w-[148px] h-[45px] sm:h-[50px] lg:h-[65px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] flex items-center justify-center">
                    <p className="text-xl lg:text-3xl font-semibold text-white">
                      $ 40.26
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[965px] h-[70px] lg:h-[85px] rounded-[4px] forecast_box_bg mx-auto mt-4 lg:mt-6 flex items-center justify-between p-[10px]">
            <p className="sm:text-lg font-normal text-black ff_lexend sm:pl-4 leading-[18px]">
              Potential Reimbursement
            </p>
            <div className="w-[100px] sm:w-[130px] lg:w-[148px] h-[45px] sm:h-[50px] lg:h-[65px] bg-deep-blue rounded-[4px] border-solid border-[1px] border-[#076787] flex items-center justify-center">
              <p className="text-xl lg:text-3xl font-semibold text-white">
                $12000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastProfits;
