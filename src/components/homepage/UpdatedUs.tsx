import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
const UpdatedUs = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
        <p className="text-[#111] ff_Jakarta font-normal leading-[normal] text-[38px] text-center mb-[50px]">
          Get Updated <span className="font-semibold">With Us</span>
        </p>
        <form>
          <div className="flex items-center justify-center">
            <div className="min-w-[423px]">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                First Name
              </p>
              <input
                type="text"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] text-[#000] font-inter text-xs font-normal leading-[normal] h-[57px] ps-[15px]"
              />
            </div>
            <div className="min-w-[423px] ms-6">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Last Name
              </p>
              <input
                type="text"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] text-[#000] font-inter text-sm font-normal leading-[normal] h-[57px] ps-[15px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-[33px]">
            <div className="min-w-[423px]">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Email
              </p>
              <input
                type="email"
                placeholder="jonhdoe@example.com"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] placeholder:opacity-50 placeholder:text-[#000] text-[#000] font-inter text-xs font-normal leading-[normal] h-[57px] ps-[15px]"
              />
            </div>
            <div className="min-w-[423px] ms-6 ">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Phone
              </p>
              <div className="w-full border bg-white focus-visible:border-deep-blue rounded-md ps-[15px]">
                <PhoneInput
                  country={"eg"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  
                />
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatedUs;
