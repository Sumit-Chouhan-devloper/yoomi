import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
const ContactForm = () => {
  const [phone, setPhone] = useState<string>("");
  const [TypicalForm, setTypicalForm] = useState({
    name: "",
    last: "",
    phone: "",
    textarea: "",
    email: "",
  });
  const [error, setError] = useState<boolean>(false);
  const regex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const OnsubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    if (
      TypicalForm.name !== "" &&
      TypicalForm.last !== "" &&
      TypicalForm.phone !== "" &&
      TypicalForm.textarea !== "" &&
      TypicalForm.email !== "" &&
      regex.test(TypicalForm.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        last: "",
        phone: "",
        textarea: "",
        email: "",
      });
    }
  };
  return (
    <>
      <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0 sm:mt-[210px] mt-[180px] sm:mb-0 mb-10">
        <p className="text-[#111] ff_Jakarta font-normal leading-[normal] sm:text-[38px] text-[32px] text-center sm:mb-[50px] mb-[47px]">
          Get Updated <span className="font-semibold">With Us</span>
        </p>
        <form onSubmit={(e) => OnsubmitHandler(e)}>
          <div className="flex items-center justify-center sm:flex-row flex-col">
            <div className="lg:min-w-[423px] sm:w-[400px] w-full">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                First Name
              </p>
              <input
                type="text"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] text-[#000] font-inter text-xs font-normal leading-[normal] h-[57px] ps-[15px]"
                placeholder="First Name"
                onChange={(e) =>
                  setTypicalForm({ ...TypicalForm, name: e.target.value })
                }
                value={TypicalForm.name}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ps-[15px] ">
                {error && TypicalForm.name === ""
                  ? "First Name is required"
                  : null}
              </p>
            </div>
            <div className="lg:min-w-[423px] sm:w-[400px] w-full sm:ms-6 sm:mt-0 mt-6">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Last Name
              </p>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] text-[#000] font-inter text-xs font-normal leading-[normal] h-[57px] ps-[15px]"
                onChange={(e) =>
                  setTypicalForm({ ...TypicalForm, last: e.target.value })
                }
                value={TypicalForm.last}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ps-[15px] ">
                {error && TypicalForm.last === ""
                  ? "Last Name is required"
                  : null}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:mt-[9px] mt-6 sm:flex-row flex-col">
            <div className="lg:min-w-[423px] sm:w-[400px] w-full">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Email
              </p>
              <input
                type="email"
                placeholder="jonhdoe@example.com"
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] placeholder:opacity-50 placeholder:text-[#000] text-[#000] font-inter text-xs font-normal leading-[normal] h-[57px] ps-[15px]"
                onChange={(e) =>
                  setTypicalForm({
                    ...TypicalForm,
                    email: e.target.value,
                  })
                }
                value={TypicalForm.email}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ps-[15px]">
                {error && TypicalForm.email === "" ? (
                  "Email is required"
                ) : error && regex.test(TypicalForm.email) === false ? (
                  <p className="text-rose-500 font-medium">Email Not Valid</p>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="lg:min-w-[423px] sm:w-[400px] w-full sm:ms-6 sm:mt-0 mt-6">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                Phone
              </p>
              <PhoneInput
                placeholder="(000) 000-0000"
                country={"in"}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ps-[15px]">
              {/* {error && TypicalForm.email === "" ? (
                "Email is required"
              ) : error && regex.test(TypicalForm.email) === false ? (
                <p className="text-rose-500 font-medium">Email Not Valid</p>
              ) : (
                ""
              )} */}
            </p>
            </div>
          </div>
          <div className="flex lg:justify-center sm:mt-[9px] mt-6">
            <div className="lg:max-w-[868px] w-full">
              <p className="text-[#000] font-inter text-sm font-normal leading-[normal] mb-3">
                How Can We Help You?
              </p>
              <textarea
                className="w-full border bg-white focus-visible:border-deep-blue focus-visible:outline-none rounded-[5px] border-[rgba(0,0,0,0.10)] text-[#000] font-inter text-xs font-normal leading-[normal] md:h-[195px] sm:h-[100px] ps-[15px] pt-3 h-[93px]"
                onChange={(e) =>
                  setTypicalForm({ ...TypicalForm, textarea: e.target.value })
                }
                value={TypicalForm.textarea}
              />
              <p className="mb-0 text-rose-500 font-medium pointer-events-none h-[24px] ps-[15px] ">
                {error && TypicalForm.textarea === ""
                  ? "Text is required"
                  : null}
              </p>
            </div>
          </div>
          <div className="flex items-center sm:justify-center mt-4">
            <button className="flex justify-center items-center overflow-hidden sm:h-[53px] h-[51px] sm:w-[160px] w-[129px] sm:text-[18px] text-[16px] text-white font-medium bg-deep-blue border-solid border-[2px] border-[#076787] duration-300 ease-linear hover:text-deep-blue hover:bg-white text-center rounded-[5px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
