import React from "react";
import AboutSlider from "../components/about/AboutSlider.tsx";
import OurTeam from "../components/about/OutTeam.tsx";
import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";

const About = () => {
  return (
    <>
    <Header/>
      <AboutSlider />
     <OurTeam/>
     <Footer/>
    </>
  );
};

export default About;
