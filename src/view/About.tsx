import React from "react";
import AboutSlider from "../components/homepage/AboutSlider";
import OurTeam from "../components/about/OutTeam";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
import OurAdvisers from "../components/about/OurAdvisers";
const About = () => {
  return (
    <>
      <Header />
      <AboutSlider />
      <OurTeam />
      <SignUp />
      <OurTeam />
      <OurAdvisers />
      <Footer />
    </>
  );
};

export default About;
