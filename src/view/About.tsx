import React from "react";
import AboutSlider from "../components/about/AboutSlider.tsx";
import OurTeam from "../components/about/OutTeam.tsx";
import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
import OurAdvisers from "../components/about/OurAdvisers.tsx";

const About = () => {
  return (
    <>
    <Header/>
      <AboutSlider />
     <OurTeam/>
     <OurAdvisers/>
     <Footer/>
    </>
  );
};

export default About;
