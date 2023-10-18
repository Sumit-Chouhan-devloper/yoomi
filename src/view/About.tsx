import React from "react";
import AboutSlider from "../components/homepage/AboutSlider.tsx";
import OurTeam from "../components/about/OutTeam.tsx";
import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
import SignUp from "../components/common/SignUp.tsx";
import OurAdvisers from "../components/about/OurAdvisers.tsx";
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
