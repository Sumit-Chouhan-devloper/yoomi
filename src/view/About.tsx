import React from "react";
import AboutSlider from "../components/about/AboutSlider";
import OurTeam from "../components/about/OurTeam";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SignUp from "../components/common/SignUp";
import OurAdvisers from "../components/about/OurAdvisers";
import AboutHero from "../components/about/AboutHero";
import OurMission from "../components/about/OurMission";
const About = () => {
  return (
    <>
      <Header />
      <AboutHero/>
      <AboutSlider />
      <OurMission/>
      <OurTeam />
      <OurAdvisers />
      <SignUp />
      <Footer />
    </>
  );
};

export default About;
