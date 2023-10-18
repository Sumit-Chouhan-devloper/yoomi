import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TreakingRemote from "../components/homepage/TreakingRemote";
import ReportingAnylats from "../components/homepage/ReportingAnylats";
import TrackingFeedback from "../components/homepage/TreakingFeedback";
import Partners from "../components/homepage/Partners";
import Workout from "../components/homepage/Workout";
import Feature from "../components/homepage/Feature";
import BackToTop from "../components/common/BackToTopButton";
import OurPlatForm from "../components/homepage/OurPlatForm";
import AboutUs from "../components/homepage/AboutUs";
import Committed from "../components/homepage/Committed";
import ForecastProfits from "../components/homepage/ForecastProfits";
import KnowMore from "../components/homepage/KnowMore";
const Main = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Workout />
        <Feature />
        <TrackingFeedback />
        <ReportingAnylats />
        <TreakingRemote />
        <OurPlatForm />
        <ForecastProfits />
        <Partners />
        <KnowMore />
        <Committed />
        <AboutUs />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};
export default Main;
