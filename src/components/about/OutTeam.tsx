import React from "react";
import { ourTeamData } from "../common/Helper.tsx";
import { Images } from "../../images.js";
import Slider from "react-slick";
const OurTeam = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const first = React.useRef();
  return (
    <>
      <div className="bg-[#F5F8FA]">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 py-14">
          <p className="text-deep-blue ff_inter text-sm font-medium leading-normal text-center uppercase">
            OUR team
          </p>
          <h2 className="text-black ff_Jakarta text-[30px] md:text-[36px] lg:text-6xl font-normal text-center leading-[110%] mb-[22px]">
            The Amazing Team
            <span className="font-semibold"> Behind Our Company</span>
          </h2>
          <p className="text-black text-center ff_inter text-[24px] font-normal opacity-70">
            We’re a dedicated group of individuals
          </p>
          <Slider {...settings} ref={first}>
            {ourTeamData.map((OurData, i) => {
              return (
                <div key={i}>
                  <div className="px-[10px]">
                      <div>
                        <img src={Images.ourTeamCard1} alt="team-member" />
                        <div className="bg-white">
                            <h4 className="text-center">{OurData.Heading}</h4>
                            <p className="text-center">{OurData.para}</p>
                        </div>
                      </div>
                  </div>
                </div>
              );
            })}
        </Slider>   
        </div>
      </div>
    </>
  );
};

export default OurTeam;
