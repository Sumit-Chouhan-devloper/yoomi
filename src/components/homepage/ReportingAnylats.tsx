import React from "react";
import Reporting_img from "../../assets/images/webp/Report-main-img.webp";
import box_group from "../../assets/images/png/reporting-analytis-bottom-vecter.png";
const ReportingAnylats = () => {
  return (
    <>
      <section className="sm:py-12 py-8">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row common_card_shado py-10 lg:py-14 lg:items-center relative">
            <img
              className="absolute bottom-0 start-0 hidden lg:block"
              src={box_group}
              alt="cube"
            />
            <div className="lg:w-5/12 lg:ps-[34px] lg:pe-9 px-4">
              <p className="ff_Jakarta text-deep-blue text-sm font-semibold uppercase mb-2 pt-5 sm:pt-0">
                report
              </p>
              <h3 className="text-black text-4xl sm:text-5xl font-normal sm:mb-5 mb-3 leading-[110%]">
                Reporting +<span className="font-semibold"> Analytics</span>
              </h3>
              <p className="font-normal text-sm opacity-70 mb-5 sm:mb-9 relative">
                Track patient progress over time with compliance, pain, RPE, ROM
                and other key metrics
              </p>
              <button className="common_button">View the Matrics</button>
            </div>

            <div className="lg:w-7/12 mx-auto sm:w-10/12">
              <img
                className="w-full min-h-[228px]"
                src={Reporting_img}
                alt="tracking"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportingAnylats;
