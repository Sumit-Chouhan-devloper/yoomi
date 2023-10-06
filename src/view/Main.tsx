import React from "react";
import Footer from "../components/homepage/Footer.tsx";
import Header from "../components/homepage/Header.tsx";
import TreakingRemote from "../components/homepage/TreakingRemote.tsx";
import ReportingAnylats from "../components/homepage/ReportingAnylats.tsx";
import TrackingFeedback from "../components/homepage/TreakingFeedback.tsx";
import Partners from "../components/homepage/Partners.tsx";
import Workout from "../components/homepage/Workout.tsx";
import Feature from "../components/homepage/Feature.tsx";
// import { Review } from "../components/homepage/Review.tsx";
import BackToTop from "../components/common/BackToTopButton.tsx";
import OurPlatForm from "../components/homepage/OurPlatForm.tsx";
import AboutUs from "../components/homepage/AboutUs.tsx";

const Main = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Header />
        <Workout />
        <Feature />
        <TrackingFeedback />
        <ReportingAnylats />
        <TreakingRemote />
        <OurPlatForm/>
        <Partners />
        <AboutUs />
        <Footer />
        <BackToTop/>
      </div>
    </>
  );
};
export default Main;
