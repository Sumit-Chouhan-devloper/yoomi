import React from "react";
import AboutSlider from "../components/about/AboutSlider.tsx";
import OurTeam from "../components/about/OutTeam.tsx";
import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
<<<<<<< HEAD
import SignUp from "../components/common/SignUp.tsx";
=======
import OurAdvisers from "../components/about/OurAdvisers.tsx";
>>>>>>> 1d523571665a4af52db7d200307575f0a59dae1f

const About = () => {
  return (
    <>
    <Header/>
      <AboutSlider />
<<<<<<< HEAD
      <OurTeam />
      <SignUp/>
=======
     <OurTeam/>
     <OurAdvisers/>
>>>>>>> 1d523571665a4af52db7d200307575f0a59dae1f
     <Footer/>
    </>
  );
};

export default About;
