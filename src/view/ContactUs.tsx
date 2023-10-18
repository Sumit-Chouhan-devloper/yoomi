import React from "react";
// import UpdatedUs from "../components/homepage/UpdatedUs";
import CommonHero from "../components/common/CommonHero";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <CommonHero
        maxWidth="max-w-[633px] text-center"
        headlineTitle="Lets work together"
        subHeadlineTitle="How Can We"
        subHeadlineTitle2="Help You?"
        para="Hoping to have a question answered? Curious about using Yoomi for your practice? Reach out to our team for a quick response!"
      />
      {/* <UpdatedUs /> */}
      <SignUp />
      <Footer />
    </>
  );
};

export default ContactUs;
