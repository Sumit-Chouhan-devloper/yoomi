import React from "react";
import AboutSlider from "../components/about/AboutSlider.tsx";
import OurTeam from "../components/about/OutTeam.tsx";
import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
import SignUp from "../components/common/SignUp.tsx";

const About = () => {
  return (
    <>
    <Header/>
      <AboutSlider />
      <OurTeam />
      <SignUp/>
     <Footer/>
    </>
  );
};

export default About;
