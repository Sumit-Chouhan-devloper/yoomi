import React from "react";
import UpdatedUs from "../components/contactUs/UpdatedUs.tsx";
import CommonHero from "../components/common/CommonHero.tsx";
import Header from "../components/common/Header.tsx";

const ContactUs = () => {
  return (
    <>
      <Header />
      <CommonHero
        maxWidth={"max-w-[633px] text-center "}
        headlineTitle={"Lets work together"}
        subHeadlineTitle={"How Can We "}
        subHeadlineTitle2={"Help You?"}
        para={
          "Hoping to have a question answered? Curious about using Yoomi for your practice? Reach out to our team for a quick response!"
        }
      />
      <UpdatedUs />
    </>
  );
};

export default ContactUs;
